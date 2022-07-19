import Link from "next/link";

import { getSortedPostsData } from "lib/posts";

function Home({ allPostsData }: any) {
  return (
    <section>
      <h2>Blog</h2>
      <ul>
        {allPostsData.map(({ id, date, title }: any) => (
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
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

// TODO
// export async function getServerSideProps(context) {
//   return {
//     props: {
//       // props for your component
//     },
//   };
// }

export default Home;
