import React, { useState } from "react";
import "./Post.scss";
import {
    LikeFilled,
    ShareAltOutlined,
    CommentOutlined,
    MessageFilled,
    SoundFilled,
    LikeOutlined,
    EditOutlined,
    DeleteOutlined
} from "@ant-design/icons";

interface PostProps {
    id: string;
    authorLogo: string;
    author: string;
    time: string;
    content: string;
    imageUrl: string;
    comments: number;
    shares: number;
    likes: number;
    onPostDelete: (postId: string) => void;
    onPostEdit: (postId: string, newContent: string) => void;
}

const Post: React.FC<PostProps> = ({
                                       id,
                                       authorLogo,
                                       author,
                                       time,
                                       content,
                                       imageUrl,
                                       comments,
                                       shares,
                                       likes,
                                       onPostDelete,
                                       onPostEdit
                                   }) => {
    const [isLiked, setIsLiked] = useState(false);
    const [likeCount, setLikeCount] = useState(likes);
    const [isCommented, setIsCommented] = useState(false);
    const [commentCount, setCommentCount] = useState(comments);
    const [isShared, setIsShared] = useState(false);
    const [shareCount, setShareCount] = useState(shares);
    const [isEditing, setIsEditing] = useState(false);
    const [editedContent, setEditedContent] = useState(content);

    const handleLikeClick = () => {
        setIsLiked(!isLiked);
        setLikeCount(prev => isLiked ? prev - 1 : prev + 1);
    };

    const handleCommentClick = () => {
        setIsCommented(!isCommented);
        setCommentCount(prev => isCommented ? prev - 1 : prev + 1);
    };

    const handleShareClick = () => {
        setIsShared(!isShared);
        setShareCount(prev => isShared ? prev - 1 : prev + 1);
    };

    const handleDelete = () => {
        onPostDelete(id);
    };

    const handleEdit = () => {
        if (isEditing) {
            onPostEdit(id, editedContent);
        }
        setIsEditing(!isEditing);
    };

    const handleContentChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setEditedContent(event.target.value);
    };

    return (
        <div className="post-container">
            <div className="post-header">
                <div>
                    <img src={authorLogo} alt="" />
                </div>
                <div className="post-author-info">
                    <div>
                        <span id="author-name">{author}</span>
                        <span> @{author.toLowerCase()} · {time}</span>
                    </div>
                    <div>
                        {isEditing ? (
                            <textarea value={editedContent} onChange={handleContentChange} />
                        ) : (
                            <span>{content}</span>
                        )}
                    </div>
                </div>
                <div className="post-edit-delete">
                    {isEditing ? (
                        <button onClick={handleEdit}>Save</button>
                    ) : (
                        <>
                            <EditOutlined onClick={handleEdit} />
                            <DeleteOutlined onClick={handleDelete} />
                        </>
                    )}
                </div>
            </div>
            <div className="post-image">
                <img src={imageUrl} alt="" />
            </div>
            <div className="post-actions">
                <div className={`like-button ${isLiked ? 'liked' : ''}`} onClick={handleLikeClick}>
                    {isLiked ? <LikeFilled /> : <LikeOutlined />}
                    <span>{likeCount}</span>
                </div>
                <div className={`comment-button ${isCommented ? 'commented' : ''}`} onClick={handleCommentClick}>
                    <CommentOutlined />
                    <span>{commentCount}</span>
                </div>
                <div className={`share-button ${isShared ? 'shared' : ''}`} onClick={handleShareClick}>
                    <ShareAltOutlined />
                    <span>{shareCount}</span>
                </div>
            </div>
        </div>
    );
};

export default Post;