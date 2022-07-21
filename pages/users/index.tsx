import Head from "next/head";
import dynamic from "next/dynamic";
import { useState } from "react";

const Modal = dynamic(() => import("components/Modal"), {
  ssr: false,
});
import { getUsers } from "services/users";

interface Props {
  users: User[];
}

function Users({ users }: Props) {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div>
      <Head>
        <title>users</title>
      </Head>
      {users.map((user: User) => (
        <li key={user.id}>{user.email}</li>
      ))}
      <button onClick={toggleModal}>modal</button>
      {isModalOpen && <Modal />}
    </div>
  );
}

// SSR 메서드
// network 탭 열어보면 요청은 서버쪽에서 이미 끝난걸로 보이고, json 데이터 파일을 받아옴
// https://nextjs.org/docs/basic-features/data-fetching/get-server-side-props
// You should use getServerSideProps only if you need to render a page whose data must be fetched at request time
export async function getServerSideProps({ query, req, res }: any) {
  const {
    data: { data },
  } = await getUsers(1);

  res.setHeader(
    "Cache-Control",
    "public, s-maxage=10, stale-while-revalidate=59"
  ); // cache dynamic response

  return {
    props: {
      users: data,
    },
  };
}

export default Users;
