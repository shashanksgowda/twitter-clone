import React from 'react'
import "./Widgets.css";
import SearchIcon from "@material-ui/icons/Search";
import {
    TwitterTimelineEmbed,
    TwitterShareButton,
    TwitterTweetEmbed,
  } from "react-twitter-embed";

function Widgets() {
    return (
      <div className="widgets">
        <SearchIcon className="widgets__searchIcon" />
        <input placeholder="Search Twitter" type="text" />

        <div className="widgets__widgetContainer">
          <h2>What's happening</h2>
          <TwitterTweetEmbed tweetId={"1398683683675070472"} />

          <TwitterTimelineEmbed
            sourceType="profile"
            screenName="anandMahindra"
            options={{ height: 400 }}
          />

        <TwitterShareButton
          url={"https://reactjs.org/docs/getting-started.html"}
          options={{ text: "#reactjs is awesome", via: "dan_abramov" }}
        />

        </div>
      </div>
    );
}

export default Widgets
