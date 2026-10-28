import SpecializeCard from "../SpecializeCard"

const specializations = [
    {
        title: "2D Game Development",
        description: "Character-driven games with expressive visuals.",
        color: "bg-[#85BDFF]",
    },
    {
        title: "2D Art & Animation",
        description:
            "Stylized characters, environments, UI and gameplay animation.",
        color: "bg-[#66EFC5]",
    },
    {
        title: "Indie Game Development",
        description:
            "Small-to-mid scale games focused on strong gameplay identity.",
        color: "bg-[#FF8E85]",
    },
    {
        title: "Prototyping",
        description: "Turning game ideas into playable prototypes.",
        color: "bg-[#D5A8F5]",
    },
]

export default function Specialization() {
    return (
        <section id="specialization" className="flex flex-col gap-2 my-2 md:gap-6 md:my-6">
            <header className="flex flex-row items-center justify-center gap-3 mb-2 md:gap-6 md:mb-6">
                <h1 className="shrink-0 text-center text-2xl font-bold uppercase leading-[0.95] sm:text-4xl md:text-6xl">
                    Specialization
                </h1>
                <div className="hidden h-px w-full bg-black md:block" />
            </header>

            <div className="w-full grid grid-cols-1 gap-8 py-6 md:py-12 md:px-28 md:grid-cols-2">
                {specializations.map((item, index) => (
                    <SpecializeCard
                        key={item.title}
                        number={String(index + 1).padStart(2, "0")}
                        title={item.title}
                        description={item.description}
                        color={item.color}
                    />
                ))}
            </div>
        </section>
    )
}