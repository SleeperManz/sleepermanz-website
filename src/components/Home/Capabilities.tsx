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
        <section id="capabilities" className="flex w-full flex-col gap-6 my-4 md:my-6">
            <header className="flex flex-row items-center justify-center gap-3 mb-2 md:gap-6 md:mb-6">
                <h1 className="shrink-0 text-center text-2xl font-bold uppercase leading-[0.95] sm:text-4xl md:text-6xl">
                    Capabilities
                </h1>
                <div className="hidden h-px w-full bg-black md:block" />
            </header>

            {/*
              Mobile: gambar di atas, daftar kemampuan di bawah, tanpa padding samping.
              Desktop (md ke atas): sejajar ke samping dengan padding besar (px-28 di lg).
            */}
            <div className="flex w-full flex-col gap-8 py-4 px-0 md:flex-row md:gap-14 md:py-12 md:px-12 lg:px-28">
                {/* Gambar tunggal */}
                <div className="relative isolate h-fit w-full md:w-auto md:flex-1/4">
                    <img
                        src="src/assets/etc/stylish-background.png"
                        alt="stylish-background"
                        aria-hidden="true"
                        className="absolute inset-0 h-[98%] w-[98%] translate-x-2.25 translate-y-2 -z-1 md:w-full md:h-full md:translate-x-1 md:translate-y-1"
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
                            <div className="aspect-6/5 w-full bg-gray-400 border-3 border-black rounded-lg md:aspect-auto md:w-270 md:h-225" />
                    }
                </div>

                {/*
                  Daftar kemampuan.
                  Mobile: 3 kategori berjajar ke samping (flex-row), masing-masing berbagi lebar sama
                  (flex-1 + min-w-0) dan teks boleh turun baris. Desktop: tersusun ke bawah.
                */}
                <div className="flex flex-row justify-between gap-3 md:flex-col md:justify-start md:gap-6 md:w-72 md:shrink-0 md:flex-1">
                    {categories.map((category) => (
                        <div
                            key={category.title}
                            className="flex min-w-0 flex-1 flex-col gap-2 md:flex-none md:gap-4"
                        >
                            <h2 className="wrap-break-word text-xs font-bold uppercase sm:text-lg md:text-4xl">
                                {category.title}
                            </h2>
                            <ul className="flex flex-col gap-1 pl-0 text-[11px] sm:pl-3 sm:text-base md:text-3xl">
                                {category.items.map((item) => (
                                    <li key={item} className="flex items-start gap-1 sm:items-center sm:gap-2">
                                        <span aria-hidden="true">•</span>
                                        <span className="wrap-break-word">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>

            {/* Tools: margin kanan kecil di mobile untuk ruang bayangan, margin samping besar di desktop */}
            <div className="relative mr-2 md:mx-18">
                <img
                    src="src/assets/etc/stylish-background-wide.png"
                    alt="stylish-background-wide"
                    className="absolute inset-0 w-full h-full translate-x-0.5 translate-y-1 -z-1 md:translate-x-2 md:translate-y-2"
                />

                <div className="w-full h-full flex flex-col items-center gap-4 border-3 border-black bg-white p-4 md:gap-8 md:p-6">
                    <h2 className="text-2xl font-bold uppercase md:text-5xl">Tools</h2>

                    {/* Mobile: grid 4 kolom (8 ikon = 2 baris), ikon 50px. Desktop: baris fleksibel seperti sebelumnya */}
                    <ul className="grid w-full grid-cols-4 justify-items-center gap-3 md:flex md:flex-row md:flex-wrap md:items-center md:justify-evenly md:gap-6">
                        {tools.map((tool) => (
                            <li key={tool.name}>
                                {
                                    tool.icon ?
                                        <img
                                            src={tool.icon}
                                            alt={tool.name}
                                            title={tool.name}
                                            className="h-12.5 w-12.5 object-contain md:h-22.5 md:w-22.5"
                                            draggable={false}
                                        />
                                        :
                                        <div className="h-12.5 w-12.5 rounded-lg bg-gray-400 md:h-22.5 md:w-22.5" />
                                }
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    )
}