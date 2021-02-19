import { GetStaticPaths, GetStaticProps } from 'next';
import Link from 'next/link';
import Layout from '../../components/Layout';
import { GeneralPost } from '../../lib/models';
import { getAllPosts } from '../../lib/services';

type Props = {
  posts: GeneralPost[];
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const posts = await getAllPosts();
  return {
    props: { posts },
  };
};

export default function IndexPage({ posts }: Props) {
  return (
    <Layout>
      {posts.map((post) => (
        <li key={post.id}>
          <Link href={`/post/${post.slug}`}>
            <a>{post.title}</a>
          </Link>
        </li>
      ))}
    </Layout>
  );
}
