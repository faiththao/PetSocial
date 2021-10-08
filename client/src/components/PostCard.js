import { useEffect, useState } from "react";
import CommentsForm from "./CommentsForm";

export default function PostCard({ post, updateLikes }) {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        fetch("/api/comments")
            .then(res => res.json())
            .then(data => setComments(data))
    })


    const createComment = (formData) => {
        return fetch("/api/comments", {
            method: "POST",
            headers: {
                Accept: '*/*',
                "Content-Type": "application/json"
            },
            credentials: 'include',
            body: JSON.stringify(formData)
        })
        .then(res => {
            if (res.ok) {
                return res.json()
            } else {
                return res.json().then(errors => Promise.reject(errors))
            }
        })
        .then(comment => {
            setComments(comments.concat(comment))
        })
    }


    const {
        id,
        img_url,
        caption,
        likes
    } = post

    return (
        <div key={id} className="post-card">
            <strong>sername</strong>
            <button classname="delete-button">X</button>
            <img src={img_url} alt={caption} />
            <strong className="caption">{caption}</strong>
            Likes: {likes} <button onClick={() => updateLikes(id)}>❤</button>
            <div>
                {comments.map(comment => (
                    <div>
                        <ul key={comment.id}>
                            <h3>{comment.comment}</h3>
                            Likes: {likes} <button>❤</button>
                        </ul>
                    </div>
                ))}
            </div>
            <CommentsForm createComment={createComment}/>
        </div>
    )
}