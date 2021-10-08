import { useEffect, useState } from "react";
import PostCard from "../components/PostCard"

export default function Posts({ posts, updateLikes, handleDelete }) {
// console.log(posts)
// console.log(updateLikes)
    const renderPosts = posts.map((post) => (
        <PostCard
            key={post.id}
            post={post}
            updateLikes={updateLikes}
            // handleDelete={handleDelete}
        />))

    return (
        <div>
            <h2>Explore Posts</h2>
            <ul>
                {renderPosts}
            </ul>
        </div>
    )
}