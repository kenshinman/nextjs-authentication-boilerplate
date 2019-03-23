import React from "react";
import { connect } from "react-redux";
import initialize from "../../utils/initialize";
import Layout from "../../components/Layout";
import axios from "axios";
import devLogger from "dev-logger-simple";
import baseURL from "../../utils/baseURL";
import { Helmet } from "react-helmet";
import Link from "next/link";

class Posts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { posts } = this.props;
    return (
      <Layout>
        <Helmet>
          <title>All Posts</title>
          <meta
            name="description"
            content="This is the page to view our posts"
          />
        </Helmet>

        <div className="container">
          <h3>Hello here. There are {`${posts && posts.length}`} posts</h3>
          <div className="row mb-2">
            {posts.map(post => {
              return (
                <div key={post.id} className="col-12 col-sm-6 col-md-3 mb-5">
                  <h5>
                    <Link
                      as={`/post/${post.id}`}
                      href={`/post?id=${post.id}`}>
                      {post.title.rendered}
                    </Link>
                  </h5>
                  {post._embedded && post._embedded["wp:featuredmedia"] ? (
                    <img
                      className="img-fluid"
                      src={`${
                        post._embedded["wp:featuredmedia"]["0"].source_url
                      }`}
                    />
                  ) : (
                    <img
                      className="img-fluid"
                      src="//loremflickr.com/300/200"
                    />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </Layout>
    );
  }
}

Posts.getInitialProps = async ctx => {
  initialize(ctx);
  const token = ctx.store.getState().authentication.token;
  // const user = ctx.store.getState().authentication.user;

  if (token) {
    try {
      const response = await axios.get(`${baseURL}/posts?_embed`);
      const posts = await response.data;
      return {
        posts
      };
    } catch (error) {
      devLogger(error);
      return {
        error: "error.response"
      };
    }
  }
};

export default connect(state => state)(Posts);
