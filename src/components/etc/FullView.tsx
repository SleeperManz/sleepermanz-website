import { useEffect, useState, type CSSProperties } from "react"

type FullViewProps = {
    src: string
    alt: string
    mediaType?: "image" | "video"
    className?: string
    style?: CSSProperties
}

export default function FullView({
    src,
    alt,
    mediaType = "image",
    className = "h-full w-full object-cover",
    style,
}: FullViewProps) {
    const [isOpen, setIsOpen] = useState(false)
    const isVideo = mediaType === "video"

    useEffect(() => {
        if (!isOpen) return

        const previousOverflow = document.body.style.overflow
        document.body.style.overflow = "hidden"

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") setIsOpen(false)
        }

        window.addEventListener("keydown", handleKeyDown)

        return () => {
            document.body.style.overflow = previousOverflow
            window.removeEventListener("keydown", handleKeyDown)
        }
    }, [isOpen])

    return (
        <>
            <button
                type="button"
                onClick={() => setIsOpen(true)}
                aria-label={`${isVideo ? "Play" : "View"} ${alt} fullscreen`}
                style={style}
                className={`relative block h-full w-full appearance-none overflow-hidden border-0 bg-transparent p-0 shadow-none focus-visible:ring-2 focus-visible:ring-white ${isVideo ? "cursor-pointer" : "cursor-zoom-in"}`}
            >
                {isVideo ? (
                    <>
                        <video
                            src={src}
                            aria-hidden="true"
                            muted
                            playsInline
                            preload="metadata"
                            tabIndex={-1}
                            className={className}
                        />
                        <span
                            aria-hidden="true"
                            className="pointer-events-none absolute inset-0 flex items-center justify-center bg-transparent"
                        >
                            <span className="ml-1 h-0 w-0 border-y-14 border-l-24 border-y-transparent border-l-white drop-shadow-[0_1px_4px_rgba(0,0,0,0.9)]" />
                        </span>
                    </>
                ) : (
                    <img
                        src={src}
                        alt={alt}
                        draggable={false}
                        loading="lazy"
                        className={className}
                    />
                )}
            </button>

            {isOpen && (
                <div
                    role="dialog"
                    aria-modal="true"
                    aria-label={alt}
                    onClick={(event) => {
                        if (event.target === event.currentTarget) setIsOpen(false)
                    }}
                    className="fixed inset-0 z-100 flex items-center justify-center bg-black/90 p-4"
                >
                    <button
                        type="button"
                        autoFocus
                        onClick={() => setIsOpen(false)}
                        aria-label="Close media viewer"
                        className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full text-4xl leading-none text-white hover:bg-white/15"
                    >
                        <span className="w-full h-full">
                            &times;
                        </span>
                    </button>
                    {isVideo ? (
                        <video
                            src={src}
                            aria-label={alt}
                            autoPlay
                            controls
                            controlsList="nofullscreen"
                            playsInline
                            preload="auto"
                            className="max-h-[calc(100dvh-2rem)] max-w-[calc(100vw-2rem)] object-contain"
                        />
                    ) : (
                        <img
                            src={src}
                            alt={alt}
                            className="max-h-[calc(100dvh-2rem)] max-w-[calc(100vw-2rem)] object-contain"
                        />
                    )}
                </div>
            )}
        </>
    )
}