import Image from "next/image";

// Image 특징
// 1. 빌드타임에 image를 최적화 하는 대신에 뷰포트에서 lazy load할 떄 최적화한다.
// 따라서 1) 이미지가 아무리 많아도 빌드타임은 증가하지 않는다.
// 2) 뷰포트 밖에 있는 이미지 때문에 페이지 속도가 느려지지 않는다.
// 2. 뷰포트에 따른 resizing (반응형)
// 3. 브라우저가 지원하는 포맷으로 이미지 포맷을 선택

function Login() {
  return (
    <div>
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
