import { useState } from "react"

type WorkItem = {
    src?: string // kosong = placeholder abu-abu
    alt: string
}

type Category = {
    id: string
    label: string
    items: WorkItem[]
}

// Jumlah kotak placeholder kalau kategori belum punya gambar
const PLACEHOLDER_COUNT = 12

// Isi `items` dengan gambar milikmu, contoh:
// { src: "/work/concept-art/1.png", alt: "Concept art 1" }
const categories: Category[] = [
    { id: "concept-art", label: "Concept Art", items: [] },
    { id: "3d-modeling", label: "3D Modeling", items: [] },
    { id: "ui-ux-design", label: "UI / UX Design", items: [] },
    { id: "animations", label: "Animations", items: [] },
]

export default function OurWork() {
    const [activeId, setActiveId] = useState(categories[0].id)

    const active = categories.find((c) => c.id === activeId) ?? categories[0]

    // Kalau belum ada gambar, tampilkan kotak placeholder
    const items: WorkItem[] =
        active.items.length > 0
            ? active.items
            : Array.from({ length: PLACEHOLDER_COUNT }, (_, i) => ({
                alt: `placeholder-${i + 1}`,
            }))

    return (
        <section id="our-work" className="flex w-full flex-col">
            {/* Bagian atas: judul, deskripsi, tab kategori */}
            <div className="flex w-full flex-col items-center gap-3 px-0 py-4 md:gap-4 md:px-6 md:py-6">
                <header className="w-full flex flex-row items-center justify-center gap-3 mb-2 md:gap-6 md:mb-6">
                    <div className="hidden h-px w-full bg-black md:block" />
                    <h1 className="shrink-0 text-center text-2xl font-bold uppercase leading-[0.95] sm:text-4xl md:text-6xl">
                        Our Work
                    </h1>
                    <div className="hidden h-px w-full bg-black md:block" />
                </header>

                {/*
                  Mulai layar sm, tiap kalimat tampil sebagai blok sendiri (2 baris).
                  Di mobile keduanya mengalir sebagai satu paragraf.
                */}
                <p className="text-center text-sm leading-snug sm:text-xl md:text-[32px]">
                    <span className="sm:block">
                        A bunch of things we&apos;ve made along the way.
                    </span>{" "}
                    <span className="sm:block">
                        Games, art, animation, and experiments from our studio.
                    </span>
                </p>

                {/*
                  Tab kategori: flex-row sejak awal (tidak berganti grid <-> flex), jadi susunan desktop
                  sama seperti semula. Yang berbeda hanya lebar tombol:
                  mobile = separuh baris (2 per baris), desktop = 250 x 50 px.
                */}
                <div className="w-full grid grid-cols-2 md:flex md:flex-row md:flex-wrap items-center justify-center gap-3 p-0 md:gap-4 md:p-6">
                    {categories.map((category) => {
                        const isActive = category.id === activeId

                        return (
                            <button
                                key={category.id}
                                type="button"
                                aria-pressed={isActive}
                                onClick={() => setActiveId(category.id)}
                                className="relative h-10 md:h-[50px] md:w-[250px]"
                            >
                                <img
                                    src="src/assets/etc/stylish-background-wide.png"
                                    alt="stylish-background-wide"
                                    className={`absolute inset-0 w-full h-full -z-1 ${isActive
                                        ? "translate-x-0 translate-y-1"
                                        : "translate-x-0.5 translate-y-0.5"
                                        }`}
                                />

                                <div className={`w-full h-full flex flex-row items-center justify-center cursor-pointer border border-black px-2 py-1.5 text-xs font-bold uppercase transition-colors md:px-4 md:text-base ${isActive
                                    ? "bg-[#1F4FC0] text-white"
                                    : "bg-white text-black hover:bg-gray-100"
                                    }`}
                                >
                                    {category.label}
                                </div>
                            </button>
                        )
                    })}
                </div>
            </div>

            {/* Galeri: 2 kolom di mobile, 3 kolom di desktop */}
            <div className="w-full mb-12 md:mb-24">
                <div className="grid grid-cols-2 gap-2 px-0 py-4 md:grid-cols-3 md:gap-3 md:px-12">
                    {items.map((item, index) => (
                        <div
                            key={item.src ?? index}
                            className="aspect-video overflow-hidden rounded-lg bg-[#D9D9D9]"
                        >
                            {item.src && (
                                <img
                                    src={item.src}
                                    alt={item.alt}
                                    className="h-full w-full object-cover"
                                    draggable={false}
                                />
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}