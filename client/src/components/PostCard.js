export default function PostCard({ post }) {
    const {
        id,
        img_url,
        caption,
        likes
    } = post

    return (
        <div key={id}>
            <img src={img_url} alt={caption} />
            <strong>{caption}</strong>
            <button>❤</button>Likes: {likes}
        </div>
    )
}