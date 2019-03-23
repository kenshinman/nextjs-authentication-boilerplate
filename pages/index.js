import { connect } from "react-redux";
import initialize from "../utils/initialize";
import Layout from "../components/Layout";
import TopSection from "../components/TopSection";

const Index = () => (
  <Layout title="Home">
    <TopSection />
    <div className="container">
      <h2 className="title is-2">Authentication with Next.js and JWT</h2>
      <img src="/static/nextjs.jpg" />
      <p>
        A proof of concept app, demonstrating the authentication of Next.js
        application using JWT.
      </p>
    </div>
  </Layout>
);

Index.getInitialProps = function(ctx) {
  initialize(ctx);
};

export default connect(state => state)(Index);
