import { site, whatsappLink } from "@/config/site";

export function WhatsAppButton() {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${site.whatsapp.floatingLabel} Escríbenos por WhatsApp`}
      className="group fixed right-4 bottom-4 z-40 flex items-center gap-3 rounded-full bg-secondary py-2.5 pr-5 pl-2.5 text-sm font-semibold text-secondary-foreground shadow-lift transition-transform duration-300 hover:-translate-y-0.5 sm:right-6 sm:bottom-6"
    >
      <span className="grid size-9 place-items-center rounded-full bg-primary-foreground/15">
        <svg viewBox="0 0 24 24" className="size-5" fill="currentColor" aria-hidden="true">
          <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.46 1.32 4.97L2 22l5.25-1.38a9.87 9.87 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91C21.96 6.45 17.5 2 12.04 2Zm5.8 14.06c-.24.68-1.4 1.3-1.93 1.35-.53.05-1.02.24-3.47-.72-2.95-1.16-4.8-4.22-4.95-4.42-.14-.2-1.16-1.55-1.16-2.95 0-1.4.73-2.09 1-2.38.24-.27.53-.34.73-.34.2 0 .39 0 .56.01.19.01.44-.07.68.53.24.58.83 2.02.9 2.16.07.15.12.32.02.51-.1.2-.15.32-.29.49-.15.17-.31.39-.44.52-.15.15-.3.31-.13.6.17.29.76 1.26 1.63 2.04 1.12 1 2.06 1.31 2.35 1.46.29.15.46.12.63-.07.17-.2.73-.85.92-1.14.2-.29.39-.24.66-.15.27.1 1.7.8 1.99.95.29.15.48.22.56.34.07.12.07.71-.17 1.39Z" />
        </svg>
      </span>
      <span className="hidden sm:inline">{site.whatsapp.floatingLabel}</span>
    </a>
  );
}
