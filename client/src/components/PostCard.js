import { useEffect, useState } from "react";
import CommentsForm from "./CommentsForm";
import CommentsList from "./CommentsList";

export default function PostCard({ post, updateLikes, comments, createComment }) {
    const {
        id,
        user,
        img_url,
        caption,
        likes
    } = post
    // console.log(user)

    return (
        <div key={id} className="post-card">
            <strong className="post-user">{user.username}</strong>
            <button className="delete-button">X</button>
            <img src={img_url} alt={caption} />
            <div className="post-container">
                <strong className="caption">{user.username}: {caption}</strong>
                <p>Likes: {likes} <button onClick={() => updateLikes(id)}>❤</button></p>
            </div>
            <div className="comments-container">
                {comments.map(comment => (
                    <CommentsList
                        key={comment.id}
                        o_comment={comment}
                    />
                ))}
            </div>
            <CommentsForm createComment={createComment} />
        </div>
    )
}