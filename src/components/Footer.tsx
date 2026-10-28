import { Link } from "react-router-dom"

const footerLinks = [
    { label: "Home", href: "/" },
    { label: "Portofolio", href: "/portofolio" },
    { label: "Services", href: "/services" },
    { label: "Careers", href: "#careers" },
]

const linkClass =
    "text-base font-bold uppercase transition-opacity hover:opacity-70 md:text-xl"

export default function Footer() {
    return (
        <footer className="w-full bg-[#111111] px-6 py-8 text-white md:px-12 md:py-12">
            {/* Mobile: tersusun ke bawah & rata tengah. Desktop (md ke atas): sejajar ke samping */}
            <div className="flex flex-col items-center gap-6 md:flex-row md:gap-8">
                {/* Logo + nama studio */}
                <Link to="/" className="flex shrink-0 flex-row items-center gap-3">
                    <img
                        src="/logo/sleepermanz-horizontal.svg"
                        alt="sleepermanz-logo"
                        className="h-20 w-auto max-w-full object-contain md:h-36"
                        draggable={false}
                    />
                </Link>

                {/* Menu: di mobile boleh turun baris (flex-wrap) agar tidak melebihi lebar layar */}
                <nav className="flex flex-col flex-wrap items-center justify-center gap-x-6 gap-y-3 md:ml-8 md:gap-16 md:flex-row">
                    {footerLinks.map((link) =>
                        link.href.startsWith("/") ? (
                            <Link key={link.label} to={link.href} className={linkClass}>
                                {link.label}
                            </Link>
                        ) : (
                            <a key={link.label} href={link.href} className={linkClass}>
                                {link.label}
                            </a>
                        )
                    )}
                </nav>
            </div>

            <div className="mt-6 h-px w-full bg-white" />

            <p className="mt-3 text-center text-xs md:text-[16px]">
                @ {new Date().getFullYear()} Sleeper Manz
            </p>
        </footer>
    )
}