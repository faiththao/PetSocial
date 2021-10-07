import { useState } from "react";
import { useHistory } from "react-router-dom";

export default function NewPost({ createPost }) {
    const [img_url, setImg_url] = useState('');
    const [caption, setCaption] = useState('');

    function handleSubmit(e) {
        e.preventDefault()
        createPost({
            img_url,
            caption,
            likes: 0,
        })
        setImg_url('')
        setCaption('')
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2>
                Create a New Post
            </h2>
            <input
                type="text"
                id="img"
                placeholder="img url..."
                value={img_url}
                onChange={(e) => setImg_url(e.target.value)}
            />
            <input
                type="text"
                id="caption"
                placeholder="enter caption"
                value={caption}
                onChange={(e) => setCaption(e.target.value)}
            />
            <button type="submit">Post</button>
        </form>
    )
}