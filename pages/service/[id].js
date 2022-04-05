import parse from "html-react-parser";
import Head from "next/head";
import Layout from "../../components/layout";
import { getServiceById, getSortedPostsData } from "../../lib/posts";

export default function Service({ service }) {
  return (
    <Layout>
      <Head>
        <title>{service.name}</title>
      </Head>
      {(service.service_products || []).map((item) => (
        <article key={item.id}>
          <h2>{item.title}</h2>
          <div>{parse(item.description)}</div>
        </article>
      ))}
    </Layout>
  );
}

export async function getStaticPaths() {
  const services = await getSortedPostsData();
  return {
    paths: services.map((item) => {
      return {
        params: {
          id: item.id.toString(),
        },
      };
    }),
    fallback: false,
  };
  // Return a list of possible value for id
}

export async function getStaticProps({ params }) {
  // Fetch necessary data for the blog post using params.id
  const service = await getServiceById(params.id);
  return {
    props: {
      service,
    },
  };
}
