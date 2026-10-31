import { useState } from "react"
import FullView from "../etc/FullView"
import stylishBackgroundWide from "../../assets/etc/stylish-background-wide.png"

type WorkItem = {
    src: string
    alt: string
    isVideo: boolean
}

type Category = {
    id: string
    label: string
    folder: string
    files: string[]
}

const categories: Category[] = [
    {
        id: "concept-art",
        label: "Concept Art",
        folder: "Concept",
        files: [
            "asset hewan.png",
            "asset monster.png",
            "character animation half pt2.gif",
            "character animation half pt1.gif",
            "Character Sheet.png",
            "character animation.gif",
            "Chr Ass Steampunk.png",
            "Fiverr Portfolio 5.png",
            "Fiverr Portfolio 4.png",
            "Fiverr Portfolio 3.png",
            "Fiverr Portfolio 2.png",
            "Environment-Village.png",
            "Environment-game-style3.png",
            "Cover game.png",
            "concept_banshee.jpg",
            "concept_art_zeus.png",
            "Map Potion House.png",
            "Map Forest.png",
            "Map China Town.png",
            "Last Bell_banner 2.png",
            "modelsheet_darina.png",
            "Map Workshop.png",
            "Poster Game.png",
            "Test-game-style3.png",
        ],
    },
    {
        id: "3d-modeling",
        label: "3D Modeling",
        folder: "3D Modeling",
        files: [
            "ROOM ALT 4.png",
            "ROOM ALT 3.png",
            "ROOM ALT 2.png",
            "ROOM ALT 1.png",
            "DIORAMA ALT 2.png",
            "DIORAMA ALT 1.png",
            "Bangunan 2-4.png",
            "Bangunan 2-3.png",
            "Bangunan 2-2.png",
            "Bangunan 2-1.png",
            "0002.png",
        ],
    },
    {
        id: "ui-ux-design",
        label: "UI / UX Design",
        folder: "UI UX",
        files: ["Patrol Soldier.png"],
    },
    {
        id: "animations",
        label: "Animations",
        folder: "Animations",
        files: [
            "Activity Writing Preview_00000.mp4",
            "Activity Singing Preview_00000.mp4",
            "Activity Ride Bike Preview_00000.mp4",
            "Activity Reading Preview_00000.mp4",
            "Activity Painting Preview_00000.mp4",
            "Activity Fishing Preview_00000.mp4",
            "ani miku1.mp4",
            "ani hutao.mp4",
            "ani golshi.mp4",
            "ani ollie.mp4",
            "ani miku2.mp4",
            "ani risu.mp4",
            "Wanderer render full(2).mp4",
            "varessa bts H.mp4",
            "TRAILER_NEW_COMPRESS.mp4",
            "teio bts H.mp4",
            "rev_animatic.mp4",
            "ollie bts H.mp4",
            "miku2 bts H.mp4",
            "golshi bts H.mp4",
            "ani varessa.mp4",
            "ani teio.mp4",
        ],

    },
]

export default function OurWork() {
    const [activeId, setActiveId] = useState(categories[0].id)
    const active = categories.find((c) => c.id === activeId) ?? categories[0]

    const items: WorkItem[] = active.files.map((file) => {
        const src = encodeURI(`${import.meta.env.BASE_URL}Portofolio/${active.folder}/${file}`)

        return {
            src,
            alt: file.replace(/\.[^.]+$/, "").replace(/[_-]/g, " "),
            isVideo: /\.mp4$/i.test(file),
        }
    })

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
                                    src={stylishBackgroundWide}
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
                    {items.map((item) => (
                        <div
                            key={item.src}
                            className="aspect-video overflow-hidden rounded-lg bg-[#D9D9D9]"
                        >
                            <FullView
                                src={item.src}
                                alt={item.alt}
                                mediaType={item.isVideo ? "video" : "image"}
                            />
                        </div>
                    ))}
                </div>
            </div>

        </section>
    )
}