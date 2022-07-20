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
export async function getServerSideProps({ query }: any) {
  const {
    data: { data },
  } = await getUsers(1);

  return {
    props: {
      users: data,
    },
  };
}

export default Users;
