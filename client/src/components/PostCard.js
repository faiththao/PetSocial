import { useEffect, useState } from "react";
import CommentsForm from "./CommentsForm";

export default function PostCard({ post }) {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        fetch("/api/comments")
            .then(res => res.json())
            .then(data => setComments(data))
    })

    const {
        id,
        img_url,
        caption,
        likes
    } = post

    return (
        <div key={id} className="post-card">
            <strong>username</strong>
            <img src={img_url} alt={caption} />
            <strong>{caption}</strong>
            <button>❤</button>Likes: {likes}
            <div>
                {comments.map(comment => (
                    <div>
                        <ul key={comment.id}>
                            <h3>{comment.comment}</h3>
                            <button>❤</button>Likes: {likes}
                        </ul>
                        <CommentsForm key={comment.id} comment={comment} />
                    </div>
                ))}
            </div>
            <CommentsForm />
        </div>
    )
}