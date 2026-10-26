import ImageSlider from "../etc/ImageSlider"

// Ganti dengan path gambar kamu (taruh di folder `public`)
const slides = [
    "/slides/slide-1.png",
    "/slides/slide-2.png",
    "/slides/slide-3.png",
    "/slides/slide-4.png",
    "/slides/slide-5.png",
]

const stats = [
    { value: "3 Years", label: "Of Experience" },
    { value: "PC / Mobile / Web", label: "Platforms" },
    { value: "Open", label: "For Services" },
]

export default function Hero() {
    return (
        <div className="flex flex-col gap-2 my-6">
            <header className="h-62 flex flex-row items-center gap-6 mb-6">
                <div className="h-1.25 w-full bg-black" />
                <h1 className="w-133.75 shrink-0 text-center text-9xl font-bold uppercase leading-[0.95] md:text-6xl">
                    We Make <br /> Playful Games
                </h1>
                <div className="h-1.25 w-full bg-black" />
            </header>

            {/* Slider + statistik */}
            <div className="relative">
                <img
                    src="src/assets/etc/stylish-background.png"
                    alt="stylish-background"
                    className="absolute inset-0 w-full h-full translate-x-1 translate-y-1 -z-1"
                />

                <div className="flex flex-col overflow-hidden border-3 border-black bg-white">
                    <ImageSlider images={slides} className="aspect-video" />

                    <div className="flex flex-row items-center justify-between border-t-2 bg-white px-6 py-3">
                        {stats.map((stat, index) => (
                            <div
                                key={stat.label}
                                className="flex flex-1 flex-row items-center"
                            >
                                {/* Garis pemisah antar statistik */}
                                {index > 0 && <div className="h-14 w-px bg-black" />}

                                <div className="flex flex-1 flex-col items-center">
                                    <span className="text-2xl font-bold">
                                        {stat.value}
                                    </span>
                                    <span className="text-sm text-gray-700">
                                        {stat.label}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <p className="text-center text-xl text-gray-600">
                Founden in 2023, Sleeper Manz Studios <br />
                develops self-publishes and develop for service
            </p>
        </div>
    )
}