export default function Profile({ user, posts }) {
    return (
        <div>
            <h2>Profile</h2>
            <h2 className="username">{user.username}</h2>
            <div>
                <h3>
                    Your Posts
                </h3>
            </div>
        </div>
    )
}