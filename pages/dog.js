import Layout from "../components/layout";

const Dog = ({ data }) => (
  <Layout pageTitle="SSR Page with Dogs">
    <main>
      <img alt="Happy dog" src={data.message} />
    </main>
  </Layout>
);
export default Dog;

export async function getServerSideProps() {
  try {
    const res = await fetch(`https://dog.ceo/api/breeds/image/random`);
    if (!res.ok) {
      throw new Error(`Response failed`);
    }
    return {
      props: {
        data: await res.json()
      },
    };
  } catch (error) {
    return {
      status: 500,
      props: {},
    };
  }
  
}
