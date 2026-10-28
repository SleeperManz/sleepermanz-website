import { useEffect, type ReactNode } from "react"

type SidePanelProps = {
    open: boolean
    onClose: () => void
    children: ReactNode
}

export default function SidePanel({ open, onClose, children }: SidePanelProps) {
    // Saat panel terbuka: kunci scroll halaman, dan tutup dengan tombol Escape
    useEffect(() => {
        if (!open) return

        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose()
        }

        document.body.style.overflow = "hidden"
        window.addEventListener("keydown", onKeyDown)

        return () => {
            document.body.style.overflow = ""
            window.removeEventListener("keydown", onKeyDown)
        }
    }, [open, onClose])

    return (
        // Lapisan luar: fixed, selebar layar, dan overflow-hidden.
        // Panel yang sedang berada di luar layar terpotong di sini, jadi tidak
        // menambah lebar halaman (penyebab ruang kosong di sisi kanan sebelumnya).
        <div
            id="side-panel"
            aria-hidden={!open}
            className={`fixed inset-0 z-50 overflow-hidden transition-[visibility] duration-300 ${
                open ? "visible" : "invisible pointer-events-none"
            }`}
        >
            {/* Latar gelap: klik untuk menutup */}
            <div
                aria-hidden="true"
                onClick={onClose}
                className={`absolute inset-0 bg-black/50 transition-opacity duration-300 ${
                    open ? "opacity-100" : "opacity-0"
                }`}
            />

            {/* Panel: masuk dari kanan ke kiri menuju layar */}
            <aside
                role="dialog"
                aria-modal="true"
                aria-label="Menu navigasi"
                className={`absolute right-0 top-0 flex h-full w-3/4 max-w-sm flex-col border-l-2 border-black bg-[#E9E9E9] transition-transform duration-300 ease-in-out ${
                    open ? "translate-x-0" : "translate-x-full"
                }`}
            >
                <div className="flex flex-row items-center justify-end px-4 py-3">
                    <button
                        type="button"
                        aria-label="Tutup menu"
                        onClick={onClose}
                        className="cursor-pointer p-2"
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
                            <path d="M6 6l12 12M18 6L6 18" />
                        </svg>
                    </button>
                </div>

                {/* Isi panel diberikan dari luar lewat children */}
                <div className="flex flex-1 flex-col items-center justify-center gap-8 px-6 pb-16">
                    {children}
                </div>
            </aside>
        </div>
    )
}