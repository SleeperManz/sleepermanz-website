import publicAsset from "../utils/publicAsset"

type GameImageProps = {
    main: string
    thumbnails?: string[]
    title: string
}

const THUMB_SLOTS = 3

export default function GameImage({ main, thumbnails = [], title }: GameImageProps) {
    // Tanpa thumbnail: tampilkan gambar utama saja.
    // `flex-1` membuat gambar mengisi sisa tinggi kartu, jadi tinggi kartu
    // tetap sama dengan kartu lain di baris yang sama.
    if (thumbnails.length === 0) {
        return (
            <div className="flex flex-1 flex-col">
                <img
                    src={publicAsset(main)}
                    alt={`${title} - cover`}
                    className="aspect-video w-full flex-1 object-cover"
                    draggable={false}
                />
            </div>
        )
    }

    // Kalau thumbnail kurang dari 3, sisanya jadi kotak abu-abu
    const slots = Array.from({ length: THUMB_SLOTS }, (_, i) => thumbnails[i])

    return (
        <div className="flex flex-col gap-1">
            {/* Gambar utama */}
            <img
                src={publicAsset(main)}
                alt={`${title} - cover`}
                className="aspect-video w-full object-cover"
                draggable={false}
            />

            {/* Thumbnail */}
            <div className="grid grid-cols-3 gap-1">
                {slots.map((src, index) =>
                    src ? (
                        <img
                            key={index}
                            src={publicAsset(src)}
                            alt={`${title} - screenshot ${index + 1}`}
                            className="aspect-video w-full object-cover"
                            draggable={false}
                        />
                    ) : (
                        <div
                            key={index}
                            className="aspect-video w-full bg-[#D9D9D9]"
                        />
                    )
                )}
            </div>
        </div>
    )
}