import type { Metadata } from "next";
import Image from "next/image";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";
import CTABlock from "@/components/CTABlock";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "See our work. Browse real PPF installations on dealership inventory and privately owned vehicles across multiple states.",
};

const galleryImages = [
  { src: "https://images.unsplash.com/photo-1619405399517-d7fce0f13302?w=600&q=80", alt: "PPF installation on luxury sedan hood", caption: "Partial Hood Shield" },
  { src: "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?w=600&q=80", alt: "Door edge guard installation", caption: "Door Edge Guards" },
  { src: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=600&q=80", alt: "Complete vehicle protection", caption: "Full Door Package" },
  { src: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=600&q=80", alt: "Dealership lot vehicle protection", caption: "Dealership Fleet" },
  { src: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=600&q=80", alt: "Rear bumper PPF application", caption: "Rear Bumper Guard" },
  { src: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=600&q=80", alt: "Headlight protection film", caption: "Headlight Protection" },
  { src: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=600&q=80", alt: "Door sill guard installation", caption: "Door Sill Guards" },
  { src: "https://images.unsplash.com/photo-1542362567-b07e54358753?w=600&q=80", alt: "Screen protection on infotainment", caption: "Screen Protection" },
  { src: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=600&q=80", alt: "Door cup guard detail", caption: "Door Cup Guards" },
];

export default function Gallery() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[50vh] items-center bg-dark">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1619405399517-d7fce0f13302?w=1920&q=80"
            alt="PPF installation gallery"
            fill
            className="object-cover"
            preload
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
        </div>
        <div className="relative mx-auto w-full max-w-[1280px] px-6 py-32 lg:px-12">
          <div className="max-w-2xl">
            <p className="animate-hero text-sm font-semibold uppercase tracking-wider text-blue">
              Our Work
            </p>
            <h1
              className="animate-hero mt-4 type-display text-[40px] text-white md:text-[52px]"
              style={{ animationDelay: "0.1s" }}
            >
              Installation Gallery
            </h1>
            <p
              className="animate-hero mt-4 text-lg text-white/70"
              style={{ animationDelay: "0.3s" }}
            >
              Real installations. Real results. Browse our work across
              dealerships and privately owned vehicles.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="bg-dark py-20 md:py-28">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
          <AnimatedSection>
            <SectionHeading
              label="Featured Installs"
              title="See the Quality Difference"
              description="Every install goes through our quality assurance process. Here are some of our recent projects."
            />
          </AnimatedSection>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {galleryImages.map((image, i) => (
              <AnimatedSection key={i} delay={i * 60}>
                <div className="group relative overflow-hidden rounded-xl">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={600}
                    height={400}
                    className="h-[280px] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <div className="absolute bottom-0 left-0 right-0 translate-y-full p-4 transition-transform duration-300 group-hover:translate-y-0">
                    <span className="text-sm font-semibold text-white">{image.caption}</span>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <CTABlock
        headline="Want Results Like These?"
        description="Get a free consultation and quote for professional paint protection film installation."
        buttonText="Get a Quote"
      />
    </>
  );
}
