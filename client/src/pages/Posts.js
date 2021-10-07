import { useEffect, useState } from "react";
import PostCard from "../components/PostCard"

export default function Posts({ posts }) {

    return (
        <div>
        <h2>Explore Posts</h2>
        <ul>
            {posts.map((post) => (
            <PostCard 
            key={post.id}
            post={post}
            />))}
        </ul>
        </div>
    )
}