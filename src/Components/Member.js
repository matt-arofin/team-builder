// Individual Member info

// Build out a contact card displaying a member's full details

// Should display basic information of every team member (eg. name, role, etc)

export default function Member(props) {
    const { details } = props;
    
    if(!details) return <h3>Working on building your team roster...</h3>
    return (
        <div className="teammate container">
            <h2>{details.name}</h2>
            <p>Email: {details.email}</p>
            <p>Role: {details.role}</p>
        </div>
    )
}