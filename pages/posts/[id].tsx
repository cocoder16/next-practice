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

// https://nextjs.org/docs/basic-features/data-fetching/get-static-paths
// getStaticPaths must be used with getStaticProps
export async function getStaticPaths() {
  // Return a list of possible value for id
  const paths = getAllPostIds();

  return {
    paths,
    fallback: false,
  };
}

// https://nextjs.org/docs/basic-features/data-fetching/get-static-props
// When a page with getStaticProps is pre-rendered at build time, in addition to the page HTML file, Next.js generates a JSON file holding the result of running getStaticProps.
export async function getStaticProps({ params }: StaticPath) {
  // Fetch necessary data for the blog post using params.id
  // parameter: getStaticPaths가 반환하는 paths

  const post = await getPostData(params.id);

  return {
    props: {
      post,
    },
    // ISR: 일정 주기마다 데이터의 최신 여부를 검사하고 업데이트된 데이터로 페이지를 다시 생성
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    revalidate: 10, // In seconds
  };
}

export default Post;
