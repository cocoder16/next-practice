import Link from "next/link";

import { getSortedPostsData } from "lib/posts";

interface Props {
  posts: PostSummary[];
}

function Home({ posts }: Props) {
  return (
    <section>
      <h2>Blog</h2>
      <ul>
        {posts.map(({ id, date, title }: PostSummary) => (
          <li key={id}>
            <Link href={`/posts/${id}`}>{title}</Link>
            <br />
            {date}
          </li>
        ))}
      </ul>
    </section>
  );
}

// getStaticPaths, getStaticProps - static generation을 하기 위한 메서드
// server-side에서 실행된다.
// 개발모드에서는 매 request마다 실행된다.
// 프로덕션모드에서는 빌드할때 실행된다.

export async function getStaticProps() {
  const posts = getSortedPostsData();
  return {
    props: {
      posts,
    },
  };
}

export default Home;
