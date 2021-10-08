export default function CommentsList({ o_comment }) {
    const {
        id,
        comment,
        likes,
    } = o_comment

    return (
        <div>
            <ul key={id}>
                <p>{comment} Likes: {likes} <button>❤</button></p>
            </ul>
        </div>
    )
}