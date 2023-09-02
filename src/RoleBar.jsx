export default function RoleBar({ roles }) {

    return (
        <>
            <div className="roleBar">
                {roles.map((role) => (
                    <div className="role">{role.name}</div>
                ))}
            </div>
        </>
    )

}