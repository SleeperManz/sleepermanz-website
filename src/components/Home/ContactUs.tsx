const EMAIL = "sleepermanz102@gmail.com"

// Ganti href dengan link sosial media studio, dan siapkan ikon SVG/PNG sendiri di `public/socials/`
const socials = [
    { name: "YouTube", href: "#", icon: "/socials/yt.svg" },
    { name: "Instagram", href: "#", icon: "/socials/ig.svg" },
    { name: "LinkedIn", href: "#", icon: "/socials/link.svg" },
    { name: "X", href: "#", icon: "/socials/x.svg" },
]

export default function ContactUs() {
    return (
        <section id="contact-us" className="flex w-full flex-col items-center gap-12 mb-32">
            <header className="flex w-full flex-row items-center justify-center gap-4 mb-6">
                <div className="h-px w-full bg-black" />
                <h1 className="shrink-0 text-center text-6xl font-bold uppercase leading-[0.95]">
                    {"[ Contact Us ]"}
                </h1>
                <div className="h-px w-full bg-black" />
            </header>

            <a
                href={`mailto:${EMAIL}`}
                className="text-4xl transition-opacity hover:opacity-70"
            >
                {EMAIL}
            </a>

            <ul className="flex flex-row items-center justify-center gap-28">
                {socials.map((social) => (
                    <li key={social.name}>
                        <a
                            href={social.href}
                            target="_blank"
                            rel="noreferrer"
                            aria-label={social.name}
                            className="block transition-transform hover:scale-110"
                        >
                            <img
                                src={social.icon}
                                alt={social.name}
                                className="w-20 object-contain"
                                draggable={false}
                            />
                        </a>
                    </li>
                ))}
            </ul>
        </section>
    )
}