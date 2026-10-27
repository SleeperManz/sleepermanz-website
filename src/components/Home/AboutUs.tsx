import TeamCard from "../TeamCard"

// Ganti path `image` dengan asset milikmu
const team = [
    { name: "Nai", role: "Team Lead", image: "/team/Nai.png" },
    { name: "Mel", role: "Lead Art", image: "/team/Mel.png" },
    { name: "Dhaf", role: "Programmer", image: "/team/Oyek.png" },
    { name: "Sav", role: "Animator", image: "/team/Sava.png" },
]



export default function AboutUs() {
    return (
        <section id="about-us" className="flex w-full flex-col">
            <header className="flex flex-row items-center gap-6">
                <h1 className="shrink-0 text-center text-5xl font-bold uppercase leading-[0.95] md:text-6xl">
                    About Us
                </h1>
                <div className="h-px w-full bg-black" />
            </header>

            {/* Deskripsi studio */}
            <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 py-12 px-28 text-center">
                <p className="text-[28px] leading-snug">
                    Sleeper Manz is an independent game studio creating playful
                    games, expressive characters, and worlds worth exploring.
                </p>
                <p className="text-[38px] font-bold uppercase">
                    Founded 2023 · Indonesia
                </p>
            </div>

            {/* Tim */}
            <div className="flex flex-col items-center gap-6">
                <div className="flex flex-col items-center gap-6">
                    <h2 className="text-7xl font-bold uppercase leading-none">
                        Meet Our Team
                    </h2>
                    <p className="text-[32px]">Who is behind the studio?</p>
                </div>

                {/* 4 anggota per baris, sisa baris otomatis rata tengah */}
                <div className="flex w-full flex-row flex-wrap justify-center gap-x-40 gap-y-6 my-12">
                    {team.map((member) => (
                        <TeamCard key={member.name} member={member} />
                    ))}
                </div>
            </div>

            {/* Ajakan kolaborasi */}
            <div className="flex flex-col items-center gap-8 py-8 text-center">
                <h2 className="text-7xl font-bold uppercase leading-[0.95]">
                    Let&apos;s make <br /> something fun.
                </h2>
                <p className="text-[32px] uppercase">
                    Have a project, game idea, or collaboration in mind?
                </p>
            </div>
        </section>
    )
}