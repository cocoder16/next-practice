function Privacy() {
  return <div>privacy</div>;
}

export async function getStaticProps(_context: any) {
  return {
    notFound: true, // triggers 404
  };
}

export default Privacy;
