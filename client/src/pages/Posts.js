import PostCard from "../components/PostCard"

export default function Posts({ posts }) {
    const renderpost = posts.map(post =>
        <PostCard 
        key={post.id}
        post={post}
        />)

    return (
        <div>
        <h2>Explore Posts</h2>
        <ul>
            {renderpost}
        </ul>
        </div>
    )
}