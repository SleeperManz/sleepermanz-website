const capabilities = "/capabilities/main.png";

const categories = [
    {
        title: "Game Art",
        items: ["Character Design", "Environment Art", "UI/UX", "Illustration"],
    },
    {
        title: "Animation",
        items: ["2D Animation", "Spine", "Character Animation", "VFX"],
    },
    {
        title: "Game Development",
        items: ["Gameplay", "Game Systems", "UI Implementation", "Prototyping"],
    },
]

// Ikon tools: file harus benar-benar ada di `public/tools/` dengan nama persis seperti di bawah
const tools = [
    { name: "Photoshop", icon: "/icons/ps.png" },
    { name: "Illustrator", icon: "/icons/ai.png" },
    { name: "After Effects", icon: "/icons/ae.png" },
    { name: "Spine", icon: "/icons/sp.png" },
    { name: "Figma", icon: "/icons/fm.png" },
    { name: "Blender", icon: "/icons/bld.png" },
    { name: "Unity", icon: "/icons/unt.png" },
    { name: "Clip Studio Paint", icon: "/icons/csp.png" },
]

export default function Capabilities() {
    return (
        <section id="capabilities" className="flex w-full flex-col gap-6 my-6">
            <header className="flex flex-row items-center gap-6 mb-6">
                <h1 className="shrink-0 text-center text-5xl font-bold uppercase leading-[0.95] md:text-6xl">
                    Capabilities
                </h1>
                <div className="h-px w-full bg-black" />
            </header>

            <div className="flex w-full flex-col gap-14 py-12 px-28 md:flex-row">
                {/* Gambar tunggal: mengambil sisa lebar */}
                <div className="relative isolate h-fit flex-1/4">
                    <img
                        src="src/assets/etc/stylish-background.png"
                        alt="stylish-background"
                        aria-hidden="true"
                        className="absolute inset-0 h-full w-full translate-x-1 translate-y-1 -z-1"
                    />

                    {
                        capabilities ?
                            <img
                                src={capabilities}
                                alt="capabilities-image"
                                className="block w-full border-3 border-black bg-white rounded-lg"
                                draggable={false}
                            />
                            :
                            <div className="w-270 h-225 bg-gray-400 border-3 border-black rounded-lg" />
                    }
                </div>

                <div className="flex-1 flex flex-col gap-6 md:w-72 md:shrink-0">
                    {categories.map((category) => (
                        <div key={category.title} className="flex flex-col gap-4">
                            <h2 className="text-4xl font-bold uppercase">
                                {category.title}
                            </h2>
                            <ul className="flex flex-col gap-1 pl-3 text-3xl">
                                {category.items.map((item) => (
                                    <li key={item} className="flex items-center gap-2">
                                        <span aria-hidden="true">•</span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>

            {/* Tools */}
            <div className="mx-18 relative">
                <img
                    src="src/assets/etc/stylish-background-wide.png"
                    alt="stylish-background-wide"
                    className="absolute inset-0 w-full h-full translate-x-2 translate-y-2 -z-1"
                />

                <div className="w-full h-full flex flex-col items-center gap-8 border-3 border-black bg-white p-6">
                    <h2 className="text-5xl font-bold uppercase">Tools</h2>

                    <ul className="flex flex-row flex-wrap w-full items-center justify-evenly gap-6">
                        {tools.map((tool) => (
                            <li key={tool.name}>
                                {
                                    tool.icon ?
                                        <img
                                            src={tool.icon}
                                            alt={tool.name}
                                            title={tool.name}
                                            className="h-22.5 w-22.5 object-contain"
                                            draggable={false}
                                        />
                                        :
                                        <div className="h-22.5 w-22.5 object-contain rounded-lg bg-gray-400" />
                                }
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    )
}