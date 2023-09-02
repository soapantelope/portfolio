export default function Awards({ awards }) {
    return (
        <>
            <div className="awards">
                {awards.map((award) => (
                    <div className="award">{award.name}</div>
                ))}
            </div>

        </>
    )
}