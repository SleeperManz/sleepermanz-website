import GameImage from "../GameImage"

type GameStatus = "playstore" | "steam" | "itch" | "development"

type GameItem = {
    title: string
    description: string
    tags: string[]
    status: GameStatus
    href?: string
    main: string
    thumbnails?: string[]
}

// Warna tombol + warna teks tag per status
const statusStyle: Record<GameStatus, { button: string; text: string; label: string }> = {
    playstore: { button: "bg-[#2FAE4F]", text: "text-[#2FAE4F]", label: "Go to game" },
    steam: { button: "bg-[#1B3F7A]", text: "text-[#1B3F7A]", label: "Go to game" },
    itch: { button: "bg-[#FF5A5F]", text: "text-[#FF5A5F]", label: "Go to game" },
    development: { button: "bg-[#6B6B6B]", text: "text-[#6B6B6B]", label: "In development" },
}

const LOREM =
    "Lorem ipsum dolor sit amet consectetur. Aliquet venenatis quisque et eget fringilla convallis. Phasellus ac viverra praesent dignissim in platea pulvinar nibh."

// Ganti path gambar dengan milik kamu (taruh di folder `public`)
const games: GameItem[] = [
    {
        title: "Block Flow",
        description: LOREM,
        tags: ["Idle Game", "Restaurant", "Cute"],
        status: "playstore",
        href: "#",
        main: "/games/block-flow/main.png",
        thumbnails: [
            "/games/block-flow/1.png",
            "/games/block-flow/2.png",
            "/games/block-flow/3.png",
        ],
    },
    {
        title: "Feather Rogue",
        description: LOREM,
        tags: ["Idle Game", "Restaurant", "Cute"],
        status: "steam",
        href: "#",
        main: "/games/feather-rogue/main.png",
        thumbnails: [
            "/games/feather-rogue/1.png",
            "/games/feather-rogue/2.png",
            "/games/feather-rogue/3.png",
        ],
    },
    {
        title: "Let's Open",
        description: LOREM,
        tags: ["Idle Game", "Restaurant", "Cute"],
        status: "itch",
        href: "#",
        main: "/games/lets-open/main.png",
        thumbnails: [
            "/games/lets-open/1.png",
            "/games/lets-open/2.png",
            "/games/lets-open/3.png",
        ],
    },
    {
        title: "Last Hope : Emily",
        description: LOREM,
        tags: ["Idle Game", "Restaurant", "Cute"],
        status: "development",
        main: "/games/last-hope/main.png",
    },
    {
        title: "Last Bell",
        description: LOREM,
        tags: ["Idle Game", "Restaurant", "Cute"],
        status: "development",
        main: "/games/last-bell/main.png",
    },
    {
        title: "Hand Royal",
        description: LOREM,
        tags: ["Idle Game", "Restaurant", "Cute"],
        status: "itch",
        href: "#",
        main: "/games/hand-royal/main.png",
        thumbnails: [
            "/games/hand-royal/1.png",
            "/games/hand-royal/2.png",
            "/games/hand-royal/3.png",
        ],
    },
]

export default function Game() {
    return (
        <section id="game" className="flex flex-col gap-6 my-6">
            <header className="flex flex-row items-center gap-6 mb-6">
                <h1 className="shrink-0 text-center text-5xl font-bold uppercase leading-[0.95] md:text-6xl">
                    Game
                </h1>
                <div className="h-px w-full bg-black" />
            </header>

            <div className="grid grid-cols-1 gap-12 py-12 px-38 md:grid-cols-2 lg:grid-cols-3">
                {games.map((game) => {
                    const style = statusStyle[game.status]
                    const isDev = game.status === "development"

                    return (
                        <article
                            key={game.title}
                            className="relative border-2 border-black"
                        >
                            <img
                                src="src/assets/etc/stylish-background.png"
                                alt="stylish-background"
                                className="absolute inset-0 w-full h-full translate-x-1 translate-y-1 -z-1"
                            />

                            <div className="w-full h-full relative flex flex-col gap-2 bg-[#F9F9F9] p-1.5">
                                <GameImage
                                    title={game.title}
                                    main={game.main}
                                    thumbnails={game.thumbnails}
                                />

                                <div className="flex flex-1 flex-col gap-1 px-1">
                                    <h2 className="text-[24px] font-bold uppercase">
                                        {game.title}
                                    </h2>
                                    <p className="text-base leading-snug text-black">
                                        {game.description}
                                    </p>
                                </div>

                                <div className="flex flex-row items-center justify-between px-1 pb-1 pt-3">
                                    <span className={`text-xs uppercase ${style.text}`}>
                                        {game.tags.join(" . ")}
                                    </span>

                                    {isDev ? (
                                        <span
                                            className={`w-fit rounded px-3 py-1.5 text-base font-bold uppercase text-white ${style.button}`}
                                        >
                                            {style.label}
                                        </span>
                                    ) : (
                                        <a
                                            href={game.href}
                                            className={`w-fit rounded px-3 py-1.5 text-base font-bold uppercase text-white transition-opacity hover:opacity-80 ${style.button}`}
                                        >
                                            {style.label}
                                        </a>
                                    )}
                                </div>
                            </div>
                        </article>
                    )
                })}
            </div>
        </section>
    )
}