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
        <section id="specialization" className="flex flex-col gap-6 my-6">
            <header className="flex flex-row items-center gap-6 mb-6">
                <h1 className="shrink-0 text-center text-5xl font-bold uppercase leading-[0.95] md:text-6xl">
                    Specialization
                </h1>
                <div className="h-px w-full bg-black" />
            </header>

            <div className="w-full grid grid-cols-1 gap-8 py-12 px-28 md:grid-cols-2">
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