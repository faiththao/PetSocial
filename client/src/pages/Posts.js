import { useEffect, useState } from "react";
import PostCard from "../components/PostCard"

export default function Posts({ posts }) {
    const renderPosts = posts.map((post) => (
        <PostCard
            key={post.id}
            post={post}
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