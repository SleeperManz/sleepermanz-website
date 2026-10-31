import stylishBackground from "../../assets/etc/stylish-background.png"
import itchIcon from "../../assets/etc/storeIcon/itchio.svg"
import playstoreIcon from "../../assets/etc/storeIcon/playstore.svg"
import steamIcon from "../../assets/etc/storeIcon/steam.svg"
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

const storeIcons: Record<GameStatus, string | undefined> = {
    playstore: playstoreIcon,
    steam: steamIcon,
    itch: itchIcon,
    development: undefined,
}

// Ganti path gambar dengan milik kamu (taruh di folder `public`)
const games: GameItem[] = [
    {
        title: "Feather Rogue",
        description: "Feather Rogue is a roguelike deckbuilder featuring a smoking crow on a dangerous adventure through a world of quirky animal enemies. Build your deck, master elemental reactions, and engage in tactical turn-based combat using a modular grid. Discover powerful card combinations, defeat challenging bosses, and adapt your strategy to survive.",
        tags: ["Idle Game", "Restaurant", "Cute"],
        status: "steam",
        href: "https://store.steampowered.com/app/4610380/Feather_Rogue/",
        main: "/games/feather-rogue/main.png",
        thumbnails: [
            "/games/feather-rogue/1.png",
            "/games/feather-rogue/2.png",
            "/games/feather-rogue/3.png",
        ],
    },
    {
        title: "Last Bell",
        description: "Last Bell is a school gang management game set in the 2000s–2010s. Recruit students, build your crew, and expand your influence across school departments. Assign members to different activities, earn money, increase your reputation, and manage your gang's strength to become the most dominant group in school.",
        tags: ["Idle Game", "Restaurant", "Cute"],
        status: "development",
        main: "/games/last-bell/main.png",
    },
    {
        title: "Harvestbound",
        description: "Harvestbound is a 2D medieval fantasy survival defense game where you play as a farmer protecting your barn from relentless waves of monsters. Fight enemies, manage your defenses, and use combat skills strategically to survive each night and protect your precious harvest.",
        tags: ["Idle Game", "Restaurant", "Cute"],
        status: "development",
        main: "/games/in-development/1.png",
    },
    {
        title: "Block Flow",
        description: "Block Flow is a colorful block-blasting puzzle game where players match at least three blocks of the same color to clear them and earn points. Rotate and position blocks strategically to create matches, trigger consecutive clears, and earn bonus points. Reach the target score to complete each level and progress further.",
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
        title: "Last Hope : Emily",
        description: "post-apocalyptic metroidvania adventure following Emily, a nimble cat-like humanoid warrior, and her glowing fairy companion. Explore a ruined world, overcome dangerous enemies, and solve environmental puzzles using Emily's combat skills and her fairy's light and ability to reach hidden places.",
        tags: ["Idle Game", "Restaurant", "Cute"],
        status: "development",
        main: "/games/last-hope/main.png",
    },
    {
        title: "Let's Open",
        description: "Let's Open is a casual idle management game where players build and grow their own food business. Start with a small food stall, serve customers automatically, and earn money to unlock new stalls and upgrade existing ones. Discover various restaurants and meet adorable mascot characters along the way.",
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
        title: "Hand Royal",
        description: "multiplayer 1v1 PvP game built around Rock-Paper-Scissors battles. Win each round to attack your opponent, unleash buffs, debuffs, or healing abilities. Each character has unique skills, while the losing player can still use minor counter abilities to turn the tide of battle.",
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
        <section id="game" className="flex flex-col gap-2 my-2 md:gap-6 md:my-6">
            <header className="flex flex-row items-center justify-center gap-3 mb-2 md:gap-6 md:mb-6">
                <h1 className="shrink-0 text-center text-2xl font-bold uppercase leading-[0.95] sm:text-4xl md:text-6xl">
                    Game
                </h1>
                <div className="hidden h-px w-full bg-black md:block" />
            </header>

            {/*
              Padding samping besar (px-38) hanya untuk desktop lebar (lg ke atas).
              Di mobile tanpa padding tambahan, supaya kartu memakai lebar penuh.
            */}
            <div className="grid grid-cols-1 gap-8 py-6 px-0 md:grid-cols-2 md:gap-12 md:py-12 md:px-12 lg:grid-cols-3 lg:px-38">
                {games.map((game) => {
                    const style = statusStyle[game.status]
                    const storeIcon = storeIcons[game.status]
                    const isDev = game.status === "development"
                    const storeHref = game.href?.trim()
                    const hasStoreLink = Boolean(storeHref && storeHref !== "#")

                    return (
                        <article
                            key={game.title}
                            className="relative border-2 border-black"
                        >
                            <img
                                src={stylishBackground}
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
                                    <h2 className="text-xl font-bold uppercase md:text-[24px]">
                                        {game.title}
                                    </h2>
                                    <p className="text-sm leading-snug text-black md:text-base">
                                        {game.description}
                                    </p>
                                </div>

                                {/*
                                  flex-wrap: kalau tag + tombol tidak muat sebaris (kartu sempit),
                                  tombol otomatis turun ke baris berikutnya dan tetap rata kanan (ml-auto).
                                */}
                                <div className="flex flex-row flex-wrap items-center gap-x-3 gap-y-2 px-1 pb-1 pt-3">
                                    <span className={`text-xs uppercase ${style.text}`}>
                                        {game.tags.join(" . ")}
                                    </span>

                                    {isDev ? (
                                        <span
                                            className={`ml-auto w-fit rounded px-3 py-1.5 text-sm font-bold uppercase text-white md:text-base ${style.button}`}
                                        >
                                            {style.label}
                                        </span>
                                    ) : hasStoreLink ? (
                                        <a
                                            href={storeHref}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`ml-auto inline-flex w-fit items-center gap-2 rounded px-3 py-1.5 text-sm font-bold uppercase text-white transition-opacity hover:opacity-80 md:gap-6 md:text-base ${style.button}`}
                                        >
                                            {style.label}
                                            {storeIcon && <img src={storeIcon} alt="" aria-hidden="true" className="h-5 w-5 shrink-0 object-contain" />}
                                        </a>
                                    ) : (
                                        <button
                                            type="button"
                                            disabled
                                            className={`ml-auto inline-flex w-fit cursor-not-allowed items-center gap-2 rounded px-3 py-1.5 text-sm font-bold uppercase text-white opacity-50 md:gap-6 md:text-base ${style.button}`}
                                        >
                                            {style.label}
                                            {storeIcon && <img src={storeIcon} alt="" aria-hidden="true" className="h-5 w-5 shrink-0 object-contain" />}
                                        </button>
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