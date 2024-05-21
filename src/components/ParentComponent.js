import React, { useState } from 'react';
import ButtonSubmit from './buttons/ButtonSubmit';
import { savePost } from './PostDatabase';

function ParentComponent() {
  const [postContent, setPostContent] = useState("");

  const handleSavePost = () => {
    if (postContent.trim()) {
      savePost({ content: postContent });
      setPostContent(""); // Clear the input after saving
    } else {
      console.log("Post content is empty. Not saving.");
    }
  };

  return (
    <div>
      <input
        type="text"
        value={postContent}
        onChange={(e) => setPostContent(e.target.value)}
        placeholder="Enter post content"
      />
      <ButtonSubmit text="Save Post" onClick={handleSavePost} />
    </div>
  );
}

export default ParentComponent;
