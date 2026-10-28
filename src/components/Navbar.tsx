import { useEffect, useState } from "react"
import { Link, NavLink } from "react-router-dom"
import SidePanel from "./etc/SidePanel"

const navItems = [
    { label: "Home", to: "/" },
    { label: "Portofolio", to: "/portofolio" },
    { label: "Services", to: "/services" },
]

const linkClass = (isActive: boolean) =>
    `uppercase text-black hover:opacity-70 transition-opacity ${
        isActive ? "font-bold" : "font-normal"
    }`

// Tombol Join Us dengan background bergaya (dipakai di desktop & side panel)
function JoinUsButton({ onClick }: { onClick?: () => void }) {
    return (
        <div className="relative isolate">
            <img
                src="src/assets/etc/stylish-background.png"
                alt="stylish-background"
                aria-hidden="true"
                className="absolute inset-0 w-full h-full translate-x-px translate-y-px -z-1"
            />
            <a
                href="#join-us"
                onClick={onClick}
                className="block text-sm uppercase text-black bg-white border border-black px-4 py-2 hover:bg-gray-100 transition-colors"
            >
                Join Us
            </a>
        </div>
    )
}

export default function Navbar() {
    const [open, setOpen] = useState(false)
    const closeMenu = () => setOpen(false)

    // Kalau layar membesar ke ukuran desktop (md = 768px), tutup side panel
    useEffect(() => {
        const onResize = () => {
            if (window.innerWidth >= 768) setOpen(false)
        }

        window.addEventListener("resize", onResize)
        return () => window.removeEventListener("resize", onResize)
    }, [])

    return (
        <nav className="w-full bg-[#E9E9E9] flex flex-row items-center justify-between px-4 py-3 rounded-lg">
            <Link to="/" className="flex items-center">
                <img
                    src="/logo/sleepermanz-vertical.svg"
                    alt="sleepermanz-logo"
                    className="h-12 w-auto object-contain"
                />
            </Link>

            {/* Menu desktop */}
            <div className="hidden md:flex flex-row items-center gap-8">
                {navItems.map((item) => (
                    <NavLink
                        key={item.label}
                        to={item.to}
                        // `end` pada "/" agar Home tidak ikut aktif di halaman lain
                        end={item.to === "/"}
                        className={({ isActive }) =>
                            `text-sm ${linkClass(isActive)}`
                        }
                    >
                        {item.label}
                    </NavLink>
                ))}

                <JoinUsButton />
            </div>

            {/* Tombol burger (hanya mobile) */}
            <button
                type="button"
                aria-label="Buka menu"
                aria-expanded={open}
                aria-controls="side-panel"
                onClick={() => setOpen(true)}
                className="md:hidden cursor-pointer p-2"
            >
                <svg
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="black"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    aria-hidden="true"
                >
                    <path d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </button>

            {/* Side panel (mobile) */}
            <SidePanel open={open} onClose={closeMenu}>
                {navItems.map((item) => (
                    <NavLink
                        key={item.label}
                        to={item.to}
                        end={item.to === "/"}
                        onClick={closeMenu}
                        className={({ isActive }) =>
                            `text-2xl ${linkClass(isActive)}`
                        }
                    >
                        {item.label}
                    </NavLink>
                ))}

                <JoinUsButton onClick={closeMenu} />
            </SidePanel>
        </nav>
    )
}