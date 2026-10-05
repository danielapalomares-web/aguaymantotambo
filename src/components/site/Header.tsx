import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X, ChevronDown, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { mainNav, site } from "@/config/site";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState<string | null>(null);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setOpenGroup(null);
  }, [pathname]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-border bg-background/95 shadow-card backdrop-blur-md"
          : "bg-primary-deep/25 backdrop-blur-[2px]",
      )}
    >
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link
          to="/"
          className="group flex items-center gap-3"
          aria-label={`${site.brandName} — ir al inicio`}
        >
          <span
            className="grid size-11 shrink-0 place-items-center rounded-full bg-[image:var(--gradient-gold)] shadow-[var(--shadow-gold)] transition-transform duration-300 group-hover:scale-105"
            aria-hidden="true"
          >
            <svg viewBox="0 0 24 24" className="size-6 text-primary" fill="currentColor">
              <path d="M12 21c-4.2 0-7.2-3-7.2-7.1C4.8 10 7.6 7.2 12 5.4c4.4 1.8 7.2 4.6 7.2 8.5C19.2 18 16.2 21 12 21Z" />
              <path
                d="M12 5.4 8.4 2.4M12 5.4l3.6-3"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                fill="none"
              />
            </svg>
          </span>
          <span className="leading-tight">
            <span
              className={cn(
                "block font-display text-base font-semibold tracking-tight sm:text-lg",
                scrolled ? "text-primary" : "text-primary-foreground",
              )}
            >
              {site.brandName}
            </span>
            <span
              className={cn(
                "block text-[0.62rem] font-semibold tracking-[0.2em] uppercase",
                scrolled ? "text-secondary" : "text-gold-soft",
              )}
            >
              Producción y comercialización
            </span>
          </span>
        </Link>

        <nav aria-label="Menú principal" className="hidden items-center gap-1 lg:flex">
          {mainNav.map((item) => {
            const active = pathname === item.to;
            const children = "children" in item ? item.children : undefined;
            return (
              <div key={item.label} className="relative group">
                <Link
                  to={item.to}
                  className={cn(
                    "flex items-center gap-1 whitespace-nowrap rounded-md px-2.5 py-2 text-sm font-semibold transition-colors",
                    scrolled
                      ? active
                        ? "text-accent"
                        : "text-primary hover:text-secondary"
                      : active
                        ? "text-gold-soft"
                        : "text-primary-foreground/90 hover:text-gold-soft",
                  )}
                >
                  {item.label}
                  {children ? (
                    <ChevronDown
                      className="size-3.5 transition-transform group-hover:rotate-180"
                      aria-hidden="true"
                    />
                  ) : null}
                </Link>
                {children ? (
                  <div className="invisible absolute left-0 top-full w-64 translate-y-1 pt-2 opacity-0 transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                    <ul className="overflow-hidden rounded-lg border border-border bg-card p-1.5 shadow-lift">
                      {children.map((child) => (
                        <li key={child.label}>
                          <Link
                            to={child.to}
                            hash={child.hash}
                            className="block rounded-md px-3 py-2 text-sm text-foreground transition-colors hover:bg-muted hover:text-primary"
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}
              </div>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={site.contact.phoneHref}
            className={cn(
              "hidden items-center gap-2 text-sm font-semibold transition-colors xl:flex",
              scrolled ? "text-primary hover:text-accent" : "text-primary-foreground/90 hover:text-gold-soft",
            )}
          >
            <Phone className="size-4" aria-hidden="true" />
            {site.contact.phoneDisplay}
          </a>
          <Button asChild variant="hero" size="lg">
            <Link to="/contacto" hash="cotizacion">
              Solicitar cotización
            </Link>
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="menu-movil"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          className={cn(
            "grid size-11 place-items-center rounded-md border transition-colors lg:hidden",
            scrolled
              ? "border-border text-primary hover:bg-muted"
              : "border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10",
          )}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {/* Menú móvil */}
      <div
        id="menu-movil"
        className={cn(
          "overflow-hidden border-t border-border bg-background transition-[max-height] duration-300 lg:hidden",
          open ? "max-h-[85vh] overflow-y-auto" : "max-h-0 border-t-0",
        )}
      >
        <nav aria-label="Menú móvil" className="px-4 py-4">
          <ul className="space-y-1">
            {mainNav.map((item) => {
              const children = "children" in item ? item.children : undefined;
              return (
                <li key={item.label} className="border-b border-border/60 last:border-0">
                  <div className="flex items-center justify-between">
                    <Link
                      to={item.to}
                      className="flex-1 py-3 text-base font-semibold text-primary"
                    >
                      {item.label}
                    </Link>
                    {children ? (
                      <button
                        type="button"
                        aria-label={`Ver secciones de ${item.label}`}
                        aria-expanded={openGroup === item.label}
                        onClick={() =>
                          setOpenGroup(openGroup === item.label ? null : item.label)
                        }
                        className="grid size-10 place-items-center rounded-md text-secondary hover:bg-muted"
                      >
                        <ChevronDown
                          className={cn(
                            "size-4 transition-transform",
                            openGroup === item.label && "rotate-180",
                          )}
                        />
                      </button>
                    ) : null}
                  </div>
                  {children && openGroup === item.label ? (
                    <ul className="pb-3 pl-3">
                      {children.map((child) => (
                        <li key={child.label}>
                          <Link
                            to={child.to}
                            hash={child.hash}
                            className="block py-2 text-sm text-muted-foreground hover:text-primary"
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </li>
              );
            })}
          </ul>
          <Button asChild variant="hero" size="lg" className="mt-5 w-full">
            <Link to="/contacto" hash="cotizacion">
              Solicitar cotización
            </Link>
          </Button>
          <a
            href={site.contact.phoneHref}
            className="mt-3 flex items-center justify-center gap-2 py-2 text-sm font-semibold text-primary"
          >
            <Phone className="size-4" aria-hidden="true" />
            {site.contact.phoneDisplay}
          </a>
        </nav>
      </div>
    </header>
  );
}
