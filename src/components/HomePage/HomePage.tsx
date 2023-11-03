import React, { useState } from "react";
import LayoutContainer from "../MainPage/LayoutContainer";
import Post from "../Post/Post";

const HomePage: React.FC = () => {
    const [posts, setPosts] = useState([
        {
            id: 'post1',
            authorLogo: "https://pbs.twimg.com/profile_images/1457725055178260480/_GOnheh__400x400.jpg",
            author: 'GOAL',
            time: '4h',
            content: "Cristiano Ronaldo Jr has signed with Al-Nassr's U13 team and will wear the No.7 shirt 7️⃣",
            imageUrl: 'https://pbs.twimg.com/media/F80U91YW4AEVlQM?format=jpg&name=medium',
            comments: 200,
            shares: 800,
            likes: 52324,
        },
        {
            id: 'post2',
            authorLogo: "https://pbs.twimg.com/profile_images/1668437684828684290/GMDq0cU1_400x400.jpg",
            author: 'Tengrinews',
            time: 'Oct 18',
            content: "Уроженца Казахстана приговорили к пожизненному заключению в США.",
            imageUrl: 'https://pbs.twimg.com/card_img/1714628090024837120/6f2RMyXb?format=jpg&name=medium',
            comments: 5,
            shares: 2,
            likes: 800,
        },
    ]);

    const onPostDelete = (postId: string) => {
        setPosts(posts.filter(post => post.id !== postId));
    };

    const onPostEdit = (postId: string, newContent: string) => {
        setPosts(posts.map(post => {
            if (post.id === postId) {
                return { ...post, content: newContent };
            }
            return post;
        }));
    };

    return (
        <LayoutContainer>
            <h2 style={{marginLeft: "1em"}}>Feed</h2>
            {posts.map(post => (
                <Post
                    key={post.id}
                    {...post}
                    onPostEdit={onPostEdit}
                    onPostDelete={onPostDelete}
                />
            ))}
        </LayoutContainer>
    );
}

export default HomePage;
