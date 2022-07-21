import { useRouter } from "next/router";

// Shallow routing allows you to change the URL without running data fetching methods again,
// that includes getServerSideProps, getStaticProps, and getInitialProps.

function ShallowRoute() {
  const router = useRouter();

  const pushShallow = () => {
    // Always do navigations after the first render
    router.push({ query: { counter: 10 } }, undefined, { shallow: true });
  };

  return (
    <div>
      <button type="button" onClick={pushShallow}>
        click
      </button>
      {router.query.counter}
    </div>
  );
}

export default ShallowRoute;
