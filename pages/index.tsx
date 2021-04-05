import React from "react";
import { GetStaticProps } from "next";
import Header from "../components/Header";
import Post, { PostProps } from "../components/Post";
import prisma from "../lib/prisma";

export const getStaticProps: GetStaticProps = async () => {
  const feed = await prisma.post.findMany({
    where: {
      published: true,
    },
    include: {
      author: {
        select: {
          name: true,
        },
      },
    },
  });
  return { props: { feed } };
};

type Props = {
  feed: PostProps[];
};

const Blog: React.FC<Props> = (props) => {
  return (
    <>
      <Header />
      <div className="page">
        {props.feed.map((post) => (
          <div key={post.id} className="post">
            <Post post={post} />
          </div>
        ))}
      </div>
    </>
  );
};

export default Blog;
