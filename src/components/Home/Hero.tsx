import ImageSlider from "../etc/ImageSlider"
import stylishBackground from "../../assets/etc/stylish-background.png"

// Ganti dengan path gambar kamu (taruh di folder `public`)
const slides = [
    "/games/block-flow/main.png",
    "/games/feather-rogue/main.png",
    "/games/hand-royal/main.png",
    "/games/last-bell/main.png",
    "/games/last-hope/main.png",
    "/games/lets-open/main.png",
    "/games/in-development/1.png",
]

const stats = [
    { value: "3 Years", label: "Of Experience" },
    { value: "PC / Mobile / Web", label: "Platforms" },
    { value: "Open", label: "For Services" },
]

export default function Hero() {
    return (
        <div className="flex flex-col gap-2 my-4 md:my-6">
            {/* Mobile: tinggi & lebar mengikuti isi. Desktop (md ke atas): ukuran tetap seperti sebelumnya */}
            <header className="flex flex-row items-center justify-center gap-3 mb-2 md:h-62 md:gap-6 md:mb-6">
                <div className="hidden h-px w-full bg-black md:h-1.25 md:block" />
                <h1 className="shrink-0 text-center text-2xl font-bold uppercase leading-[0.95] sm:text-4xl md:w-133.75 md:text-6xl">
                    We Make <br /> Playful Games
                </h1>
                <div className="hidden h-px w-full bg-black md:h-1.25 md:block" />
            </header>

            {/* Slider + statistik */}
            <div className="relative">
                <img
                    src={stylishBackground}
                    alt="stylish-background"
                    className="absolute inset-0 w-full h-full translate-x-0.5 translate-y-0.5 -z-1 md:translate-x-1 md:translate-y-1"
                />

                <div className="flex flex-col overflow-hidden border-2 border-black bg-white md:border-3">
                    <ImageSlider images={slides} className="aspect-video" />

                    {/* Statistik: tetap 3 kolom, ukuran teks & jarak diperkecil di mobile */}
                    <div className="flex flex-row items-center justify-between border-t-2 bg-white px-2 py-2 md:px-6 md:py-3">
                        {stats.map((stat, index) => (
                            <div
                                key={stat.label}
                                className="flex min-w-0 flex-1 flex-row items-center"
                            >
                                {/* Garis pemisah antar statistik */}
                                {index > 0 && (
                                    <div className="h-10 w-px shrink-0 bg-black md:h-14" />
                                )}

                                <div className="flex min-w-0 flex-1 flex-col items-center px-1 text-center">
                                    <span className="text-[12px] font-bold leading-tight md:text-2xl">
                                        {stat.value}
                                    </span>
                                    <span className="text-[10px] text-gray-700 md:text-sm">
                                        {stat.label}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <p className="text-center text-xs text-gray-600 md:text-xl">
                Founden in 2023, Sleeper Manz Studios <br />
                develops self-publishes and develop for service
            </p>
        </div>
    )
}