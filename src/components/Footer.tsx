const footerLinks = [
    { label: "Home", href: "#home" },
    { label: "Portofolio", href: "#portofolio" },
    { label: "Services", href: "#services" },
    { label: "Careers", href: "#careers" },
]

export default function Footer() {
    return (
        <footer className="w-full bg-[#111111] px-12 py-12 text-white">
            <div className="flex flex-row items-center gap-8">
                {/* Logo + nama studio */}
                <a href="#home" className="flex shrink-0 flex-row items-center gap-3">
                    {/* Ganti dengan versi putih dari logo studiomu */}
                    <img
                        src="/logo/sleepermanz-horizontal.svg"
                        alt="sleepermanz-logo"
                        className="h-36 w-auto object-contain"
                        draggable={false}
                    />
                </a>

                {/* Menu */}
                <nav className="flex flex-row items-center gap-16 ml-8">
                    {footerLinks.map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            className="text-xl font-bold uppercase transition-opacity hover:opacity-70"
                        >
                            {link.label}
                        </a>
                    ))}
                </nav>
            </div>

            <div className="mt-6 h-px w-full bg-white" />

            <p className="mt-3 text-center text-[16px]">
                @ {new Date().getFullYear()} Sleeper Manz
            </p>
        </footer>
    )
}