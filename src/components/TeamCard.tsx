type TeamMember = {
    name: string
    role: string
    image?: string // kosong = placeholder abu-abu
}

export default function TeamCard({ member }: { member: TeamMember }) {
    return (
        <div className="flex w-40 flex-col items-center">
            <div
                className={`h-72.5 w-72.5`}
            >
                {member.image && (
                    <img
                        src={member.image}
                        alt={member.name}
                        className="h-full w-full object-cover"
                        draggable={false}
                    />
                )}
            </div>

            <h3 className="mt-3 text-[40px] font-bold uppercase leading-tight">
                {member.name}
            </h3>
            <p className="text-[32px]">{member.role}</p>
        </div>
    )
}