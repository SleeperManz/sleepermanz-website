import publicAsset from "../utils/publicAsset"
import stylishBackground from "../assets/etc/stylish-background.png"
import FullView from "./etc/FullView"

type ServiceCardProps = {
    title: string
    description: string
    includes: string[]
    image?: string // 1 gambar gabungan
    images?: string[] // atau banyak gambar (contoh: 4) yang disusun otomatis dalam grid
    wide?: boolean // true = kartu selebar 2 kolom (contoh: Illustration & Key Art)
}

// Jumlah kolom grid berdasarkan banyaknya gambar:
// 1 -> 1 kolom, 2 -> 2 kolom, 3 -> 3 kolom, 4 -> 2x2, 5 ke atas -> 3 kolom
function getColumns(count: number): 1 | 2 | 3 {
    if (count <= 1) return 1
    if (count === 2 || count === 4) return 2
    return 3
}

// Class harus ditulis utuh agar terdeteksi Tailwind
const columnClass = {
    1: "grid-cols-1",
    2: "grid-cols-2",
    3: "grid-cols-3",
} as const

export default function ServiceCard({
    title,
    description,
    includes,
    image,
    images,
    wide = false,
}: ServiceCardProps) {
    // `images` diutamakan; kalau tidak ada, pakai `image`; kalau dua-duanya kosong = placeholder
    const gallery = images && images.length > 0 ? images : image ? [image] : []

    const columns = getColumns(gallery.length)
    const remainder = gallery.length % columns

    return (
        // col-span harus di elemen terluar ini, karena inilah yang menjadi item langsung dari grid di WeBuild
        <article className={`relative w-full ${wide ? "md:col-span-2" : ""}`}>
            <img
                src={stylishBackground}
                alt="stylish-background"
                className="absolute inset-0 w-full h-full translate-x-0.5 translate-y-0.5 -z-1 md:translate-x-1 md:translate-y-1"
            />

            {/* Mobile: padding, jarak, dan teks lebih kecil. Desktop (md ke atas): ukuran seperti sebelumnya */}
            <div className="w-full h-full flex flex-col gap-4 border-2 border-black bg-[#F9F9F9] p-4 pb-6 md:gap-6 md:p-6 md:pb-14">
                {/* Area gambar: tinggi tetap, isi menyesuaikan jumlah gambar.
                    Kartu wide: di mobile memakai rasio sama dengan kartu biasa agar gambar tidak terlalu pendek */}
                <div
                    className={`w-full overflow-hidden aspect-[16/10] ${wide ? "md:aspect-[21/9]" : ""
                        } ${gallery.length > 0 ? "bg-[#F9F9F9]" : "bg-[#D9D9D9]"}`}
                >
                    {gallery.length > 0 && (
                        <div
                            className={`grid h-full w-full auto-rows-fr gap-1 ${columnClass[columns]}`}
                        >
                            {gallery.map((src, index) => {
                                // Kalau baris terakhir tidak penuh, gambar terakhir
                                // melebar mengisi sisa kolom (contoh: 5 gambar -> 3 + 2)
                                const isLast = index === gallery.length - 1
                                const span =
                                    isLast && remainder !== 0
                                        ? columns - remainder + 1
                                        : 1
                                const mediaStyle =
                                    span > 1 ? { gridColumn: `span ${span}` } : undefined

                                return (
                                    <FullView
                                        key={src}
                                        src={publicAsset(src)}
                                        alt={
                                            gallery.length > 1
                                                ? `${title} - ${index + 1}`
                                                : title
                                        }
                                        mediaType={/\.(mp4|mov)$/i.test(src) ? "video" : "image"}
                                        style={mediaStyle}
                                        className="h-full min-h-0 w-full object-cover"
                                    />
                                )
                            })}
                        </div>
                    )}
                </div>

                <div className="flex flex-col items-center gap-1 px-0 text-center md:px-2">
                    <h3 className="text-xl font-bold uppercase leading-tight sm:text-3xl md:text-4xl">
                        {title}
                    </h3>
                    <p className="max-w-lg text-sm leading-snug sm:text-xl md:text-2xl">{description}</p>
                </div>

                <div className="flex flex-col gap-1 px-0 pb-2 sm:px-6 md:px-12">
                    <h4 className="text-base font-bold uppercase sm:text-2xl md:text-[32px]">Includes:</h4>
                    <ul
                        className={`grid gap-x-3 gap-y-0.5 pl-1 text-xs sm:text-lg md:gap-x-6 md:text-2xl ${wide ? "grid-cols-2 md:grid-cols-3" : "grid-cols-2"
                            }`}
                    >
                        {includes.map((item) => (
                            <li key={item} className="flex min-w-0 items-start gap-1.5">
                                <span aria-hidden="true">•</span>
                                <span className="wrap-break-word">{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </article>
    )
}