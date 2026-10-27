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
                src="src/assets/etc/stylish-background.png"
                alt="stylish-background"
                className="absolute inset-0 w-full h-full translate-x-1 translate-y-px -z-1"
            />

            <div className={`w-full h-full flex min-h-80 flex-col gap-3 overflow-hidden border-4 border-black px-6 py-6 ${color}`}>
                <h2 className="text-5xl font-bold uppercase leading-tight">
                    {title}
                </h2>

                <p className="max-w-[80%] pl-3 text-3xl leading-snug">
                    {description}
                </p>

                {/* Nomor besar transparan di pojok kanan bawah */}
                <span
                    aria-hidden="true"
                    className="pointer-events-none absolute bottom-3 right-3 select-none text-9xl font-bold leading-none text-transparent [-webkit-text-stroke:1px_rgba(0,0,0,0.15)]"
                >
                    {number}
                </span>
            </div>
        </article>
    )
}