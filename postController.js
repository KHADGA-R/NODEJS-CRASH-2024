
const posts = [
    {id : 1, title : "Post 1", description : "Post 1 description"},
    {id : 2, title : "Post 2", description : "Post 2 description"}
];

const getPosts = () => posts;

export const getPostsLength = () => posts.length;

export default getPosts;