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
                    "Services/Character Design/Chr Ass Steampunk.png",
                    "Services/Character Design/concept_banshee.jpg",
                    "Services/Character Design/Character Sheet.png",
                    "Services/Character Design/modelsheet_c1.jpg",
                ],
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
                images: [
                    "Services/Character Art/hutao 1.jpg",
                    "Services/Character Art/Last Bell_banner 2.png",
                    "Services/Character Art/risu.mp4",
                    "Services/Character Art/miku 1.jpg",
                ],
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
                images: [
                    "Services/Environment Art/Environment-game-style3.png",
                    "Services/Environment Art/ECHOES 001.png",
                    "Services/Environment Art/checker_winter_biome_w_LRC.png",
                    "Services/Environment Art/Environment-Village.png",
                    "Services/Environment Art/grannary map.png",
                ],
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
                images: [
                    "Services/UI Art/SS fr mainmenu.png",
                    "Services/UI Art/Patrol Soldier.png",
                    "Services/UI Art/Icon Style 04-2-01.png",
                    "Services/UI Art/Icon Style 04-01.png",
                    "Services/UI Art/Icon Style 03-01.png",
                    "Services/UI Art/Book.png",
                ],
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
                images: [
                    "Services/Illustration and KeyArt/Environment-game-style3.png",
                    "Services/Illustration and KeyArt/Concept-art-2@2x.jpg",
                    "Services/Illustration and KeyArt/banner_emily.png",
                    "Services/Illustration and KeyArt/KOSONGAN.png",
                    "Services/Illustration and KeyArt/handroyal_banner no logo.png",
                    "Services/Illustration and KeyArt/Owl V1-01.png",
                ],
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
                images: [
                    "Services/Animation/Activity Fishing Preview_00000.mp4",
                    "Services/Animation/rev_animatic.mp4",
                    "Services/Animation/run_darina.gif",
                    "Services/Animation/run_jen.gif",
                    "Services/Animation/TRAILER_NEW_REV.mp4",
                    "Services/Animation/stb1.png",
                    "Services/Animation/znaw2025texturelight.mov",
                ],
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
                images: [
                    "Services/Spine Animation/sprite_emily_jump1.png",
                    "Services/Spine Animation/ollie bts H.mp4",
                    "Services/Spine Animation/miku2 bts H.mp4",
                    "Services/Spine Animation/idle.gif",
                    "Services/Spine Animation/heal.gif",
                    "Services/Spine Animation/get hit.gif",
                    "Services/Spine Animation/basic attack.gif",
                ],
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
        <section id="services" className="flex w-full flex-col gap-4 mb-8 md:mb-12">
            <div className="flex flex-col items-center justify-center">
                <header className="flex w-full flex-row items-center justify-center gap-3 mb-4 md:gap-6 md:mb-12">
                    <div className="hidden h-px w-full bg-black md:block" />
                    <h1 className="shrink-0 text-center text-2xl font-bold uppercase leading-[0.95] sm:text-4xl md:text-6xl">
                        What Can We
                        <br />
                        Build For You?
                    </h1>
                    <div className="hidden h-px w-full bg-black md:block" />
                </header>

                <p className="max-w-3xl text-center text-sm leading-snug sm:text-xl md:text-[32px]">
                    From game development to art and animation, we help turn
                    ideas into playable experiences.
                </p>
            </div>

            {groups.map((group) => (
                <div key={group.title} className="w-full flex flex-col items-center justify-center gap-4 my-4 md:gap-8 md:my-8">
                    <h2 className="text-center text-xl font-bold uppercase leading-none sm:text-3xl md:text-5xl">
                        {`[ ${group.title} ]`}
                    </h2>

                    {/* Padding samping besar hanya untuk desktop lebar (lg ke atas) */}
                    <div className="w-full grid grid-cols-1 gap-8 py-4 px-0 md:grid-cols-2 md:gap-12 md:py-12 md:px-12 lg:px-24">
                        {group.services.map((service) => (
                            <ServiceCard key={service.title} {...service} />
                        ))}
                    </div>
                </div>
            ))}
        </section>
    )
}