type SpecializeCardProps = {
    number: string // contoh: "01"
    title: string
    description: string
    color: string // class background Tailwind, contoh: "bg-[#85BDFF]"
}

export default function SpecializeCard({
    number,
    title,
    description,
    color,
}: SpecializeCardProps) {
    return (
        <article className="w-full h-full relative">
            <img
                src="src/assets/etc/stylish-background-wide.png"
                alt="stylish-background-wide"
                className="absolute inset-0 w-full h-full translate-x-0.5 translate-y-0.5 -z-1 md:translate-x-1 md:translate-y-1"
            />

            {/* Mobile: border, padding, dan teks lebih kecil. Desktop (md ke atas): ukuran seperti sebelumnya */}
            <div className={`w-full h-full flex min-h-40 md:min-h-80 flex-col gap-2 overflow-hidden border-2 border-black px-4 py-4 sm:gap-3 sm:px-6 sm:py-6 md:border-4 ${color}`}>
                <h2 className="text-xl font-bold uppercase leading-tight sm:text-3xl md:text-5xl">
                    {title}
                </h2>

                <p className="max-w-[85%] pl-2 text-base leading-snug sm:pl-3 sm:text-xl md:max-w-[80%] md:text-3xl">
                    {description}
                </p>

                {/* Nomor besar transparan di pojok kanan bawah (diperkecil di mobile agar tidak menutupi teks) */}
                <span
                    aria-hidden="true"
                    className="pointer-events-none absolute bottom-2 right-2 select-none text-7xl font-bold leading-none text-transparent [-webkit-text-stroke:1px_rgba(0,0,0,0.15)] sm:bottom-3 sm:right-3 sm:text-8xl md:text-9xl"
                >
                    {number}
                </span>
            </div>
        </article>
    )
}