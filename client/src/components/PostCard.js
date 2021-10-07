import { useEffect, useState } from "react";
import CommentsForm from "./CommentsForm";

export default function PostCard({ post }) {
    const [comments, setComments] = useState([]);
    const [updateLike, setUpdateLikes] = useState(0);

    useEffect(() => {
        fetch("/api/comments")
            .then(res => res.json())
            .then(data => setComments(data))
    })

    // function updateLikes(e) {
    //     e.preventDefault()

    //     fetch("/api/posts/:id/likes", {
    //         method: "PATCH",
    //         headers: {
    //             Accept: '*/*',
    //             "Content-Type": "application/json"
    //         },
    //         body: JSON.stringify()
    //     })
    //     .then(res => res.json())
    //     .then(data => setUpdateLikes(data))
    // }

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
                    </div>
                ))}
            </div>
            <CommentsForm createComment={createComment}/>
        </div>
    )
}