function Auth() {
  return <div>auth</div>;
}

export async function getStaticProps(_context: any) {
  return {
    redirect: {
      destination: "/",
      permanent: true, // triggers 308
    },
  };
}

export default Auth;
