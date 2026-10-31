import publicAsset from "../../utils/publicAsset"

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
        <section id="contact-us" className="flex w-full flex-col items-center gap-6 mb-12 md:gap-12 md:mb-32">
            <header className="flex w-full flex-row items-center justify-center gap-3 mb-2 md:gap-4 md:mb-4">
                <div className="h-px w-full bg-black" />
                <h1 className="shrink-0 text-center text-2xl font-bold uppercase leading-[0.95] sm:text-4xl md:text-6xl">
                    {"[ Contact Us ]"}
                </h1>
                <div className="h-px w-full bg-black" />
            </header>

            {/* break-all: email panjang boleh terpotong baris agar tidak melebihi lebar layar */}
            <a
                href={`mailto:${EMAIL}`}
                className="break-all text-center text-sm transition-opacity hover:opacity-70 sm:text-xl md:text-3xl"
            >
                {EMAIL}
            </a>

            {/* Mobile: ikon 40px dengan jarak kecil agar 4 ikon muat sebaris */}
            <ul className="flex flex-row items-center justify-center gap-6 sm:gap-12 md:gap-20">
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
                                src={publicAsset(social.icon)}
                                alt={social.name}
                                className="w-10 object-contain sm:w-12 md:w-14"
                                draggable={false}
                            />
                        </a>
                    </li>
                ))}
            </ul>
        </section>
    )
}