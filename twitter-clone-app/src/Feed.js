import React , {useState, useEffect} from 'react'
import './Feed.css'
import Tweetbox from './Tweetbox';
import Post from './Post';
import db from './Firebase'
import FlipMove from "react-flip-move";

function Feed() {
    const [posts, setPosts] = useState( [] );

    useEffect(() => {
        db.collection("posts").onSnapshot((snapshot) =>
          {
          setPosts(snapshot.docs.map(doc => ( doc.data(), doc.id )))
          }
        );
      }, []);
    return (
      <div className="feed">
        {/*Home */}

        <div className="feed__header">
          <h2>Home</h2>
        </div>

        <Tweetbox />

        <FlipMove>
          {posts.map((post) => (
            <Post
              key={post.text}
              avatar={post.avatar}
              displayName={post.displayName}
              username={post.username}
              verified={post.verified}
              text={post.text}
              image={post.image}
            />
          ))}
        </FlipMove>
        {/* 
            <Post avatar="https://randomuser.me/api/portraits/men/33.jpg" displayName="Shashank" verified text="When I see a new JS framework 😂" username="superuser"/>
            <Post avatar="https://randomuser.me/api/portraits/women/93.jpg" text="I love building apps with React" username="awesomecoder"/>
            <Post />
            <Post />
            <Post />
            <Post />
            */}
      </div>
    );
}

export default Feed
