import Router from "next/router";
import ReactMarkdown from "react-markdown";

export type PostProps = {
  id: number;
  title: string;
  author: {
    name: string;
    email: string;
  } | null;
  content: string;
  published: boolean;
};

const Post = ({ post }) => {
  const authorName = post.author ? post.author.name : "Unknnown author";
  return (
    <div onClick={() => Router.push("/p/[id]", `/p/${post.id}`)}>
      <h2>{post.title}</h2>
      <small>{authorName}</small>
      <ReactMarkdown source={post.content} />
    </div>
  );
};

export default Post;
