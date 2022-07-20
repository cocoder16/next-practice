import Head from "next/head";

import { getAllPostIds, getPostData } from "lib/posts";

interface Props {
  post: Post;
}

function Post({ post }: Props) {
  return (
    <div>
      <Head>
        <title>{post.title}</title>
      </Head>
      {post.title}
      <br />
      {post.id}
      <br />
      {post.date}
      <br />
      <div dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
    </div>
  );
}

export async function getStaticPaths() {
  // Return a list of possible value for id
  const paths = getAllPostIds();

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: StaticPath) {
  // Fetch necessary data for the blog post using params.id
  // parameter: getStaticPaths가 반환하는 paths

  const post = await getPostData(params.id);

  return {
    props: {
      post,
    },
  };
}

export default Post;
