import ServiceCard from "../ServiceCard"

type Service = {
    title: string
    description: string
    includes: string[]
    images?: string[]
    wide?: boolean
}

type ServiceGroup = {
    title: string
    services: Service[]
}

// Teks dan path gambar diambil dari screenshot / contoh: periksa & sesuaikan dengan milikmu
const groups: ServiceGroup[] = [
    {
        title: "Game Art",
        services: [
            {
                title: "Character Design",
                description:
                    "Designing distinctive characters that fit your game's visual identity, personality, and world.",
                includes: [
                    "Main Characters",
                    "NPCs",
                    "Enemies & Creatures",
                    "Outfit & Equipment Variations",
                    "Expression & Pose Sheets",
                    "Character Turnarounds",
                ],
                images: [
                    "/services/character-design1.png",
                    "/services/character-design2.png",
                    "/services/character-design3.png",
                    "/services/character-design4.png",
                ]
            },
            {
                title: "Character Art",
                description:
                    "Creating polished production-ready character artwork from concept to final game assets.",
                includes: [
                    "Character Rendering",
                    "Sprite / Game Assets",
                    "Character Variations",
                    "Promotional Character Art",
                    "In-game Character Assets",
                ],
                images: ["/services/character-art.png",],
            },
            {
                title: "Environment Art",
                description:
                    "Building expressive environments that establish the atmosphere and visual identity of your game world.",
                includes: [
                    "Backgrounds",
                    "Locations & Scenes",
                    "Props",
                    "Buildings & Structures",
                    "Environmental Assets",
                    "Tilesets",
                ],
                images: ["/services/environment-art.png",],
            },
            {
                title: "UI Art",
                description:
                    "Designing game interfaces that communicate information clearly while fitting your game's style.",
                includes: [
                    "HUD",
                    "Menus",
                    "Inventory",
                    "Character Screens",
                    "Shop Interfaces",
                    "UI Icons",
                ],
                images: ["/services/ui-art.png",],
            },
            {
                title: "Illustration & Key Art",
                description:
                    "Creating polished artwork for game presentation, promotion, and visual storytelling.",
                includes: [
                    "Key Art",
                    "Splash Art",
                    "Promotional Artwork",
                    "Loading Screens",
                    "Character Illustration",
                    "Store & Social Media Assets",
                ],
                images: ["/services/illustration.png",],
                wide: true,
            },
        ],
    },
    {
        title: "Animation",
        services: [
            {
                title: "Animation",
                description:
                    "Bringing characters to life through expressive animation designed for gameplay and personality.",
                includes: [
                    "Idle",
                    "Movement",
                    "Attack",
                    "Skill / Ability",
                    "Hit Reaction",
                    "Emotes",
                    "Death Animation",
                ],
                images: ["/services/animation.png",],
            },
            {
                title: "Spine Animation",
                description:
                    "Creating flexible, lightweight animation systems for efficient, versatile production workflows.",
                includes: [
                    "Bone Rigging",
                    "Skin & Slots",
                    "Mesh & Weighting",
                    "IK Setup",
                    "Animation Setup",
                    "Skin Variation",
                    "Unity Integration",
                ],
                images: ["/services/spine-animation.png",],
            },
        ],
    },
    {
        title: "Game Development",
        services: [
            {
                title: "Gameplay Programming",
                description:
                    "Turning game mechanics and design into responsive, playable gameplay.",
                includes: [
                    "Player Controllers",
                    "Combat",
                    "Enemy Behavior",
                    "Interaction Systems",
                    "Input Systems",
                    "Gameplay Logic",
                ],
                // tanpa `image` = placeholder abu-abu
            },
            {
                title: "Game Systems",
                description:
                    "Building the systems that support progression, interaction, and the overall game flow.",
                includes: [
                    "Inventory",
                    "Progression",
                    "Economy",
                    "Quest Systems",
                    "Save System",
                    "Data Management",
                ],
            },
        ],
    },
]

export default function WeBuild() {
    return (
        <section id="services" className="flex w-full flex-col gap-8">
            <div className="flex flex-col items-center justify-center gap-3">
                <header className="flex w-full flex-row items-center gap-6">
                    <div className="h-px w-full bg-black" />
                    <h1 className="shrink-0 text-center text-5xl font-bold uppercase leading-[0.95] md:text-6xl">
                        What Can We
                        <br />
                        Build For You?
                    </h1>
                    <div className="h-px w-full bg-black" />
                </header>

                <p className="max-w-3xl text-center text-4xl leading-snug">
                    From game development to art and animation, we help turn
                    ideas into playable experiences.
                </p>
            </div>

            {groups.map((group) => (
                <div key={group.title} className="w-full flex flex-col items-center justify-center gap-12 my-24">
                    <h2 className="text-6xl font-bold uppercase leading-none">
                        {`[ ${group.title} ]`}
                    </h2>

                    <div className="w-full grid grid-cols-1 gap-6 md:grid-cols-2">
                        {group.services.map((service) => (
                            <ServiceCard key={service.title} {...service} />
                        ))}
                    </div>
                </div>
            ))}
        </section>
    )
}