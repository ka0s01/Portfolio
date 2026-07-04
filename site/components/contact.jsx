import { Eyebrow } from "@/components/scramble";
import { Reveal } from "@/components/reveal";
import { FloatingDock } from "@/components/floating-dock";
import {
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconMail,
} from "@tabler/icons-react";

const links = [
  {
    title: "Email",
    icon: <IconMail className="h-full w-full" />,
    href: "mailto:varghese.aaron13@gmail.com",
  },
  {
    title: "GitHub",
    icon: <IconBrandGithub className="h-full w-full" />,
    href: "https://github.com/ka0s01",
  },
  {
    title: "LinkedIn",
    icon: <IconBrandLinkedin className="h-full w-full" />,
    // TODO: drop in the real LinkedIn URL
    href: "https://www.linkedin.com/",
  },
  {
    title: "Instagram",
    icon: <IconBrandInstagram className="h-full w-full" />,
    // TODO: drop in your real Instagram handle
    href: "https://www.instagram.com/",
  },
];

export function Contact() {
  return (
    <section id="contact" className="relative py-28 md:py-40">
      <div className="mx-auto w-full max-w-6xl px-6">
        <Eyebrow>contact me</Eyebrow>
        <Reveal>
          <h2 className="max-w-[14ch] font-display text-[clamp(2.6rem,8vw,6rem)] font-bold leading-[0.95] tracking-tight text-balance">
            Let’s build something{" "}
            <span className="bg-gradient-to-r from-teal via-cyan to-spring bg-clip-text text-transparent">
              together.
            </span>
          </h2>
        </Reveal>
        <Reveal delay={120}>
          <p className="mt-7 max-w-[46ch] text-lg leading-relaxed text-mist">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit — sed do
            eiusmod tempor incididunt ut labore.
          </p>
        </Reveal>
        <Reveal delay={220}>
          <div className="mt-10 flex flex-wrap items-center gap-6">
            <FloatingDock
              items={links}
              desktopClassName="flex"
              mobileClassName="hidden"
            />
            <a
              href="/resume.pdf"
              download
              className="rounded-full bg-teal px-6 py-3 text-sm font-bold text-abyss transition-all hover:-translate-y-0.5 hover:shadow-[0_10px_36px_rgba(45,230,196,0.4)]"
            >
              ↓ Download résumé
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
