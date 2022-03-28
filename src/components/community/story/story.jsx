import React from "react";
import Stories from "react-insta-stories";
import "./story.scss";
export const Story = (prop) => {
  const data = prop.data.image
  
 const closeStory = () =>{
  prop.closeStories()
 }
 const onAllStoriesEnd = () => {
  prop.allStoriesEnd()
 }
  return (
    <div className="story-container" style={{ backgroundColor: "red" }}>
      <div className="outsite" onClick={closeStory}> </div>
      <div className="story">
        <Stories
          className="abc"
          stories={data}
          defaultInterval={1500}
          width={320}
          height={540}
          onAllStoriesEnd={onAllStoriesEnd}
        />
      </div>
    </div>
  );
};
