import Image from "next/image";
import Head from "next/head";
import Script from "next/script";

// Image 특징
// 1. 빌드타임에 image를 최적화 하는 대신에 뷰포트에서 lazy load할 떄 최적화한다.
// 따라서 1) 이미지가 아무리 많아도 빌드타임은 증가하지 않는다.
// 2) 뷰포트 밖에 있는 이미지 때문에 페이지 속도가 느려지지 않는다.
// 2. 뷰포트에 따른 resizing (반응형)
// 3. 브라우저가 지원하는 포맷으로 이미지 포맷을 선택

// Head 특징
// 해당 페이지에 대해서 head 태그안에 내용을 수정할 수 있다.

// Script 특징
// 추가적인 script를 fetch하고 실행할 때, 최적화한다.
// login 페이지에서 추가 스크립트를 lazy load로 불러오도록 아래 코드를 짰다.
// 불러온 script는 head 태그 안에 붙는다. 이후 페이지를 변경해도 script가 남아있는 것이 확인되었다.

function Login() {
  return (
    <div>
      <Head>
        <title>Next App - Login</title>
      </Head>
      <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload"
        onLoad={() =>
          console.log(`script loaded correctly, window.FB has been populated`)
        }
      />
      <h2>login</h2>
      <Image
        src="/images/profile.jpg" // Route of the image file
        height={144} // Desired size with correct aspect ratio
        width={144} // Desired size with correct aspect ratio
        alt="Your Name"
      />
    </div>
  );
}

export default Login;
