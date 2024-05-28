let postDatabase = [];

export const savePost = (post) => {
  postDatabase.push(post);
  console.log("Post saved:", post); // Debugging: log the saved post
};

export default postDatabase;
