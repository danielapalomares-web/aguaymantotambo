import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, MessageCircle, Clock } from "lucide-react";
import { mainNav, site, whatsappLink } from "@/config/site";

const socials = [
  { label: "Facebook", href: site.social.facebook, Icon: Facebook },
  { label: "Instagram", href: site.social.instagram, Icon: Instagram },
  { label: "LinkedIn", href: site.social.linkedin, Icon: Linkedin },
];

export function Footer() {
  return (
    <footer className="surface-field">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div className="lg:col-span-1">
          <p className="font-display text-xl font-semibold">{site.brandName}</p>
          <p className="mt-1 text-sm text-primary-foreground/70">{site.legalName}</p>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-primary-foreground/80">
            {site.tagline}
          </p>
          <div className="mt-6 flex gap-3">
            {socials.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="grid size-10 place-items-center rounded-full border border-primary-foreground/25 transition-colors hover:border-gold hover:bg-gold hover:text-accent-foreground"
              >
                <Icon className="size-4" aria-hidden="true" />
              </a>
            ))}
            <a
              href={site.social.tiktok}
              aria-label="TikTok"
              className="grid size-10 place-items-center rounded-full border border-primary-foreground/25 text-xs font-bold transition-colors hover:border-gold hover:bg-gold hover:text-accent-foreground"
            >
              TT
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-bold tracking-[0.18em] uppercase text-gold-soft">Enlaces</h3>
          <ul className="mt-5 space-y-3 text-sm">
            {mainNav.map((item) => (
              <li key={item.label}>
                <Link
                  to={item.to}
                  className="text-primary-foreground/80 transition-colors hover:text-gold-soft"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-bold tracking-[0.18em] uppercase text-gold-soft">
            Información
          </h3>
          <ul className="mt-5 space-y-4 text-sm text-primary-foreground/80">
            <li>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 transition-colors hover:text-gold-soft"
              >
                <MessageCircle className="mt-0.5 size-4 shrink-0 text-gold" aria-hidden="true" />
                WhatsApp: {site.contact.whatsappDisplay}
              </a>
            </li>
            <li>
              <a
                href={site.contact.phoneHref}
                className="flex items-start gap-3 transition-colors hover:text-gold-soft"
              >
                <Phone className="mt-0.5 size-4 shrink-0 text-gold" aria-hidden="true" />
                {site.contact.phoneDisplay}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <Mail className="mt-0.5 size-4 shrink-0 text-gold" aria-hidden="true" />
              {site.contact.email}
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 size-4 shrink-0 text-gold" aria-hidden="true" />
              {site.contact.address}, {site.contact.city}
            </li>
            <li className="flex items-start gap-3">
              <Clock className="mt-0.5 size-4 shrink-0 text-gold" aria-hidden="true" />
              {site.contact.schedule}
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-bold tracking-[0.18em] uppercase text-gold-soft">
            ¿Eres empresa?
          </h3>
          <p className="mt-5 text-sm leading-relaxed text-primary-foreground/80">
            Atendemos consultas de restaurantes, tiendas, distribuidores y compradores mayoristas.
          </p>
          <Link
            to="/contacto"
            hash="cotizacion"
            className="mt-5 inline-flex items-center justify-center rounded-md bg-[image:var(--gradient-gold)] px-5 py-2.5 text-sm font-semibold text-accent-foreground transition-transform hover:-translate-y-0.5"
          >
            Solicitar cotización
          </Link>
        </div>
      </div>

      <div className="border-t border-primary-foreground/15">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-6 text-xs text-primary-foreground/70 sm:flex-row sm:px-6 lg:px-8">
          <p>© 2026 {site.legalName}. Todos los derechos reservados.</p>
          <div className="flex gap-6">
            <Link to="/privacidad" className="transition-colors hover:text-gold-soft">
              Política de privacidad
            </Link>
            <Link to="/terminos" className="transition-colors hover:text-gold-soft">
              Términos y condiciones
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
