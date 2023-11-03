import React, { useState } from "react";
import { Input } from 'antd';
import { LikeOutlined, CommentOutlined, ShareAltOutlined, EditOutlined, SaveOutlined } from '@ant-design/icons';
import './Tweet.scss';
import LayoutContainer from "../MainPage/LayoutContainer";

const { TextArea } = Input;

const Tweet = () => {
    const [tweetContent, setTweetContent] = useState("");
    const [isEditing, setIsEditing] = useState(false);
    const [likes, setLikes] = useState(0);
    const [comments, setComments] = useState(0);
    const [shares, setShares] = useState(0);

    const onContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setTweetContent(e.target.value);
    };

    const toggleEdit = () => {
        setIsEditing(!isEditing);
    };

    const incrementLikes = () => {
        setLikes(likes + 1);
    };

    const incrementComments = () => {
        setComments(comments + 1);
    };

    const incrementShares = () => {
        setShares(shares + 1);
    };

    return (
        <LayoutContainer>
            <div className="tweet-container">
                <div>
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/b/b9/Mona_Lisa.PNG"
                        alt="Profile"
                    />
                </div>
                <div className="tweet-input-container">
                    {isEditing ? (
                        <TextArea
                            style={{
                                background: "black",
                                border: "none",
                                color: "white",
                                padding: "20px 0",
                            }}
                            value={tweetContent}
                            onChange={onContentChange}
                            autoSize={{ minRows: 2, maxRows: 6 }}
                            placeholder="What's happening?"
                        />
                    ) : (
                        <p className="tweet-content">{tweetContent || "What's happening?!"}</p>
                    )}
                    <div className="tweet-actions">
                        <div className="tweet-action" onClick={toggleEdit}>
                            {isEditing ? <SaveOutlined /> : <EditOutlined />}
                        </div>
                        <div className="tweet-action" onClick={incrementLikes}>
                            <LikeOutlined /> {likes}
                        </div>
                        <div className="tweet-action" onClick={incrementComments}>
                            <CommentOutlined /> {comments}
                        </div>
                        <div className="tweet-action" onClick={incrementShares}>
                            <ShareAltOutlined /> {shares}
                        </div>
                    </div>
                </div>
            </div>
        </LayoutContainer>
    );
};

export default Tweet;
