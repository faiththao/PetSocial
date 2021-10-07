import { useState } from "react"

export default function CommentsForm({ createComment }) {
    const [comment, setComment] = useState('');
    
    function handleSubmit(e) {
        e.preventDefault()
        createComment({
            comment,
            likes: 0,
        })
        setComment('')
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                id="comment"
                placeholder="Add comment..."
                value={comment}
                onChange={(e) => setComment(e.target.value)}
            />
            <button>Post</button>
        </form>
    )
}