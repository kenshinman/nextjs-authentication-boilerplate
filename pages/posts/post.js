import { withRouter } from "next/router";
import axios from "axios";
import Layout from "../../components/Layout";
import initialize from "../../utils/initialize";
import baseURL from "../../utils/baseURL";
import PageError from "../../components/common/PageError";
import Head from "next/head";

const Post = withRouter(({ post, error }) => {
  if (error) {
    return (
      <PageError
        message="Could not fetch post. Please try again."
        redirectTo="/posts"
      />
    );
  }
  return (
    <Layout>
      <Head>
        <title>{post.title.rendered}</title>
      </Head>
      <div className="container">
        <h3>{post.title.rendered}</h3>
        <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
      </div>
    </Layout>
  );
});

Post.getInitialProps = async ctx => {
  initialize(ctx);
  const id = ctx.query.id;
  try {
    const response = await axios.get(`${baseURL}/posts/${id}`);
    const post = await response.data;
    return { post };
  } catch (error) {
    console.log("postError => ", error);
    return {
      error: "Something went wrong"
    };
  }
};

export default Post;
