import Link from "next/link";
import { Button } from "@/components/ui/Button";
import Typography from "../Typography";

type Button = {
  label: string;
  href: string;
  variant: "default" | "outline";
  newTab: boolean;
};

export const ctaButtons: Button[] = [
  {
    label: "Get started",
    href: "/",
    variant: "default",
    newTab: false,
  },
  {
    label: "Learn more",
    href: "/",
    variant: "outline",
    newTab: false,
  },
];

export default function Hero({
  announcementText = "Announcing our next round of funding.",
  announcementLinkText = "Read more",
  announcementUrl = "#",
  headline = "Data to enrich your online business",
  description = "Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat.",
  buttons = ctaButtons,
}: {
  announcementText?: string;
  announcementLinkText?: string;
  announcementUrl?: string;
  headline?: string;
  description?: string;
  buttons?: Button[];
}) {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
        <div className="hidden sm:mb-8 sm:flex sm:justify-center">
          <div className="ring-gray/20 hover:ring-gray/30 relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1">
            {announcementText}{" "}
            <Link
              href={announcementUrl || "#addLink"}
              className="text-brand-600 font-semibold"
            >
              <span aria-hidden="true" className="absolute inset-0" />
              {announcementLinkText} <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </div>
        <div className="text-center">
          <Typography>{headline}</Typography>

          <p className="text-gray mt-8 text-lg font-medium text-pretty sm:text-xl">
            {description}
          </p>

          {buttons && buttons.length > 0 && (
            <div className="mt-10 flex items-center justify-center gap-x-6">
              {buttons.map(({ label, href, variant, newTab }) => (
                <Button key={label} variant={variant}>
                  <Link
                    href={href}
                    target={newTab ? "_blank" : "_self"}
                    rel={newTab ? "noopener noreferrer" : undefined}
                  >
                    {label}
                  </Link>
                </Button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
