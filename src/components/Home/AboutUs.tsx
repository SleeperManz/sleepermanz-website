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
            <header className="flex flex-row items-center justify-center gap-3 mb-2 md:gap-6 md:mb-0">
                <h1 className="shrink-0 text-center text-2xl font-bold uppercase leading-[0.95] sm:text-4xl md:text-6xl">
                    About Us
                </h1>
                <div className="hidden h-px w-full bg-black md:block" />
            </header>

            {/* Deskripsi studio: padding samping besar hanya di desktop */}
            <div className="mx-auto flex max-w-7xl flex-col items-center gap-2 py-6 px-0 text-center md:gap-4 md:py-12 md:px-12 lg:px-28">
                <p className="text-sm leading-snug sm:text-xl md:text-[28px]">
                    Sleeper Manz is an independent game studio creating playful
                    games, expressive characters, and worlds worth exploring.
                </p>
                <p className="text-base font-bold uppercase sm:text-2xl md:text-[38px]">
                    Founded 2023 · Indonesia
                </p>
            </div>

            {/* Tim */}
            <div className="flex flex-col items-center gap-6">
                <div className="flex flex-col items-center gap-2 md:gap-6">
                    <h2 className="text-3xl font-bold uppercase leading-none sm:text-5xl md:text-7xl">
                        Meet Our Team
                    </h2>
                    <p className="text-sm sm:text-xl md:text-[32px]">Who is behind the studio?</p>
                </div>

                {/* Mobile: 2 anggota per baris dengan jarak kecil. Desktop: jarak lebar (gap-x-40) */}
                <div className="flex w-full flex-row flex-wrap justify-center gap-x-4 gap-y-6 my-6 md:gap-x-40 md:my-12">
                    {team.map((member) => (
                        <TeamCard key={member.name} member={member} />
                    ))}
                </div>
            </div>

            {/* Ajakan kolaborasi */}
            <div className="flex flex-col items-center gap-4 py-4 text-center md:gap-8 md:py-8">
                <h2 className="text-3xl font-bold uppercase leading-[0.95] sm:text-5xl md:text-7xl">
                    Let&apos;s make <br /> something fun.
                </h2>
                <p className="text-sm uppercase sm:text-xl md:text-[32px]">
                    Have a project, game idea, or collaboration in mind?
                </p>
            </div>
        </section>
    )
}