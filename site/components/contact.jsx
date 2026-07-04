import {
  IconMail,
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandInstagram,
} from "@tabler/icons-react";
import { Eyebrow } from "@/components/scramble";
import { Reveal } from "@/components/reveal";
import { FloatingDock } from "@/components/floating-dock";

const DOCK_ITEMS = [
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
    // TODO: drop in the real LinkedIn URL
    title: "LinkedIn",
    icon: <IconBrandLinkedin className="h-full w-full" />,
    href: "https://www.linkedin.com/",
  },
  {
    // TODO: drop in your real Instagram handle
    title: "Instagram",
    icon: <IconBrandInstagram className="h-full w-full" />,
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
            <span className="text-ember">together.</span>
          </h2>
        </Reveal>
        <Reveal delay={120}>
          <p className="mt-7 max-w-[46ch] text-lg leading-relaxed text-mist">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit — sed do
            eiusmod tempor incididunt ut labore.
          </p>
        </Reveal>
        <Reveal delay={220}>
          <div className="mt-10">
            <FloatingDock
              items={DOCK_ITEMS}
              desktopClassName="flex"
              mobileClassName="hidden"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
