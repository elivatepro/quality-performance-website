import Image from "next/image";
import Btn from "@/components/Btn";
import { contact } from "@/lib/siteConfig";

interface CTABlockProps {
  headline?: string;
  description?: string;
  buttonText?: string;
  buttonHref?: string;
}

export default function CTABlock({
  headline = "Ready to protect your inventory?",
  description = "Professional, on-site paint protection film across your lot. One conversation gets it started.",
  buttonText = "Partner With Us",
  buttonHref = "/contact",
}: CTABlockProps) {
  return (
    <section className="relative overflow-hidden bg-dark-deep">
      <div className="absolute inset-0">
        <Image
          src="https://tbkdlwkmomsuzfwfofoy.supabase.co/storage/v1/object/public/site-images/patrik-storm-alstra-pictures-3TcafUeQM3E-unsplash.jpg"
          alt=""
          fill
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dark-deep via-dark-deep/95 via-[45%] to-dark-deep/30" />
        <div className="absolute inset-0 bg-gradient-to-b from-dark-deep/80 via-transparent to-dark-deep/80" />
      </div>

      <div className="relative mx-auto max-w-[1280px] px-6 lg:px-12">
        <div className="max-w-xl py-28 md:py-36">
          <h2 className="type-display text-[36px] text-white md:text-[48px]">
            {headline}
          </h2>
          <p className="mt-5 max-w-lg text-lg leading-relaxed text-white/65">
            {description}
          </p>
          <div className="mt-9 flex flex-col gap-5 sm:flex-row sm:items-center">
            <Btn href={buttonHref} size="lg" arrow>
              {buttonText}
            </Btn>
            <a
              href={`mailto:${contact.email}`}
              className="text-sm text-white/50 transition-colors hover:text-white"
            >
              Or email {contact.email}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
