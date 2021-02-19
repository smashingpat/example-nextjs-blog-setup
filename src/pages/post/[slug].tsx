import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import Layout from '../../components/Layout';
import { Post } from '../../lib/models';
import { getPost, getAllPosts } from '../../lib/services';

type Params = {
  slug: string;
};
type Props = {
  post: Post;
};

// fetch a post and pass as props.
export const getStaticProps: GetStaticProps<Props, Params> = async ({
  params,
}) => {
  const slug = params?.slug || null;
  if (slug) {
    const post = await getPost(slug);
    if (post) {
      return {
        props: { post },
      };
    }
  }

  return { notFound: true };
};

// get all the slugs for the above function to fetch.
export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const posts = await getAllPosts();
  return {
    // sets the ability to also fetch paths on runtime. Does not work
    // in static export.
    fallback: false,
    paths: posts.map((post) => ({ params: { slug: post.slug } })),
  };
};

export default function PostPage({ post }: Props) {
  const { isFallback } = useRouter();

  // fallback render when fallback is enabled on line 37
  if (isFallback) {
    return (
      <Layout>
        <h1>loading..</h1>
      </Layout>
    );
  }

  return (
    <Layout>
      <h1>{post.title}</h1>
      <div>{post.content}</div>
    </Layout>
  );
}
