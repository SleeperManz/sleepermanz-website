type TeamMember = {
    name: string
    role: string
    image?: string // kosong = placeholder abu-abu
}

export default function TeamCard({ member }: { member: TeamMember }) {
    return (
        // Mobile: kartu & foto 128px agar 2 anggota muat sebaris. Desktop: ukuran seperti sebelumnya
        <div className="flex w-32 flex-col items-center md:w-40">
            <div className="h-32 w-32 md:h-50 md:w-50">
                {member.image && (
                    <img
                        src={member.image}
                        alt={member.name}
                        className="h-full w-full object-cover"
                        draggable={false}
                    />
                )}
            </div>

            <h3 className="mt-2 text-lg font-bold uppercase leading-tight md:mt-3 md:text-[28px]">
                {member.name}
            </h3>
            <p className="text-sm md:text-[24px]">{member.role}</p>
        </div>
    )
}