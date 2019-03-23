import { withRouter } from "next/router";
import axios from "axios";
import Layout from "../../components/Layout";
import initialize from "../../utils/initialize";
import baseURL from "../../utils/baseURL";

const Post = withRouter(({post}) => {
  return (
    <Layout>
      <div className="container">
        <h3>{post.title.rendered}</h3>
       <div dangerouslySetInnerHTML={{__html: post.content.rendered}} ></div>
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
    console.log(error);
  }
};

export default Post;
