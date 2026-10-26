import { useEffect, useState } from "react"

type ImageSliderProps = {
    images: string[]
    interval?: number // ms, 0 = autoplay mati
    className?: string
}

export default function ImageSlider({
    images,
    interval = 4000,
    className = "",
}: ImageSliderProps) {
    const [current, setCurrent] = useState(0)

    // Autoplay. Dependensi `current` membuat timer di-reset
    // setiap kali slide berpindah (termasuk saat dot diklik).
    useEffect(() => {
        if (!interval || images.length <= 1) return

        const timer = setTimeout(() => {
            setCurrent((prev) => (prev + 1) % images.length)
        }, interval)

        return () => clearTimeout(timer)
    }, [current, interval, images.length])

    return (
        <div className={`relative w-full overflow-hidden ${className}`}>
            {/* Track slide */}
            <div
                className="flex h-full transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${current * 100}%)` }}
            >
                {images.map((src, index) => (
                    <img
                        key={src}
                        src={src}
                        alt={`slide-${index + 1}`}
                        className="h-full w-full shrink-0 object-cover"
                        draggable={false}
                    />
                ))}
            </div>

            {/* Indikator */}
            <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-2">
                {images.map((_, index) => (
                    <button
                        key={index}
                        type="button"
                        aria-label={`Ke slide ${index + 1}`}
                        onClick={() => setCurrent(index)}
                        className={`h-0.75 w-8 cursor-pointer transition-colors ${
                            index === current
                                ? "bg-[#128EF4]"
                                : "bg-white/60 hover:bg-white"
                        }`}
                    />
                ))}
            </div>
        </div>
    )
}