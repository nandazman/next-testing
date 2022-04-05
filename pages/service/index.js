import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/layout";
import { getSortedPostsData } from "../../lib/posts";
import utilStyles from "../../styles/utils.module.scss";

export default function Service({ services }) {
  return (
    <Layout home>
      <Head>
        <title>Service</title>
      </Head>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {services.map(({ id, name }) => (
            <article key={id}>
              <h2>
                <Link href={`/service/${id}`}>{name}</Link>
              </h2>
            </article>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const services = await getSortedPostsData();
  return {
    props: {
      services,
    },
  };
}
