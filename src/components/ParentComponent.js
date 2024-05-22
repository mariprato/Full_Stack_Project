import React, { useState } from 'react';
import { savePost } from './PostDatabase';
import { Button } from 'flowbite-react';
import ButtonComponent from './ButtonComponent';

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
      <ButtonComponent type="submit" variant="button-form-submit" onClick={handleSavePost}>Save Post</ButtonComponent>
    </div>
  );
}

export default ParentComponent;
