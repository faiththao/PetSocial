export default function PostCard({ post }) {
    const {
        id,
        user_id,
        img_url,
        caption,
        likes
    } = post

    return (
        <div key={id}>
            <strong>{user_id.username}</strong>
            <img src={img_url} alt={caption} />
            <strong>{caption}</strong>
            <button>❤</button>Likes: {likes}
        </div>
    )
}