import { useState } from "react"

export default function CommentsForm({ comment }) {
    const [newComments, setNewComments] = useState('')
    
    function handleSubmit() {
        fetch("/api/comments", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newComments),
        })
            .then((res) => {
                if (res.ok) {
                    res.json().then(json => setNewComments([...comment, json]))
                }
            })
}



function onSubmit(e) {
    e.preventDefault();

    const newComment = 
    {
        comment: newComments, 
        likes: 0,
    } 

    handleSubmit(newComment)
}

    return (
        <form onSubmit={onSubmit}>
            <input
                type="text"
                id="comment"
                placeholder="Add comment..."
                value={newComments}
                onChange={(e) => setNewComments(e.target.value)}
            />
            <button>Post</button>
        </form>
    )
}