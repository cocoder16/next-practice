import Link from "next/link";

// routing library가 따로 필요없다.
// Link는 client side navigation
// Link가 브라우저 뷰포트에 있으면, Next는 그 링크와 연결된 페이지를 background에서 prefetch하여 split code를 받아온다.

function Header() {
  return (
    <div>
      <Link href="/">Home</Link>
      <Link href="/login">Login</Link>
      <Link href="/users">Users</Link>
      <Link href="/shallow-route">Shallow Route</Link>
    </div>
  );
}

export default Header;
