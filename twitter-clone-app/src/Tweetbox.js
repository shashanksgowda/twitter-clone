import React, {useState} from 'react'
import "./Tweetbox.css";
import {Avatar, Button} from "@material-ui/core";
import db from './Firebase';


function Tweetbox() {
    const [tweetMessage, setTweetMessage] = useState("");
    const [tweetImage, setTweetImage] = useState("");

    const handleTweetButton = (e) => {
      e.preventDefault();
      db.collection("posts").add({
        displayName: "Kakashi Hatake",
        username: "copyninja",
        text: tweetMessage,
        image: tweetImage ,
        avatar:
          "https://www.syfy.com/sites/syfy/files/styles/1140x640_hero/public/wire/legacy/kakashihatake_naruto_0.png",
        verified: false,
        time: Date().toLocaleString()

      });
      setTweetMessage("");
      setTweetImage("");
    };

    return (
        <div className="tweetbox">
            <form>
                <div className="tweetBox__input">
                <Avatar src="
                https://randomuser.me/api/portraits/men/33.jpg"
                />
                <input onChange={e => setTweetMessage(e.target.value)} placeholder="What's happening ?" value = {tweetMessage}/>
                </div>
                <input
                onChange={e => setTweetImage(e.target.value)}
                value={tweetImage}
                className="tweetBox__imageInput"
                placeholder="Enter Image URL"
                type="text"/>
                <Button onClick={handleTweetButton} className="tweetBox__tweetButton">Tweet</Button>
            </form>
        </div>
    )
}

export default Tweetbox
