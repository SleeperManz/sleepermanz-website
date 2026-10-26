const navItems = [
    { label: "Home", href: "#home" },
    { label: "Portofolio", href: "#portofolio" },
    { label: "Services", href: "#services" },
]

export default function Navbar() {
    return (
        <nav className="w-full bg-[#E9E9E9] flex flex-row items-center justify-between px-4 py-3 rounded-lg">
            <a href="#home" className="flex items-center">
                <img
                    src="/logo/sleepermanz-vertical.svg"
                    alt="sleepermanz-logo"
                    className="h-12 w-auto object-contain"
                />
            </a>

            <div className="flex flex-row items-center gap-8">
                {navItems.map((item, index) => (
                    <a
                        key={item.label}
                        href={item.href}
                        className={`text-sm uppercase text-black hover:opacity-70 transition-opacity ${index === 0 ? "font-bold" : "font-normal"
                            }`}
                    >
                        {item.label}
                    </a>
                ))}

                <div className="relative isolate">
                    <img
                        src="src/assets/etc/stylish-background.png"
                        alt="stylish-background"
                        aria-hidden="true"
                        className="absolute inset-0 w-full h-full translate-x-px translate-y-px -z-1"
                    />
                    <a
                        href="#join-us"
                        className="block text-sm uppercase text-black bg-white border border-black px-4 py-2 hover:bg-gray-100 transition-colors"
                    >
                        Join Us
                    </a>
                </div>
            </div>
        </nav>
    )
}