import axios from "axios";
import { connect } from "react-redux";
// import { API } from "../config";
import initialize from "../utils/initialize";
import Layout from "../components/Layout";
import devLogger from "dev-logger-simple";
import { Button } from '@material-ui/core'

const Whoami = ({ user }) => {
  devLogger(user)
  return (
    <Layout title="Who Am I">
      {(user && (
        <h3 className="title is-3">
          You are logged in as{" "}
          <strong className="is-size-2 has-text-primary">
            {user.name || user.firstName}
          </strong>
          .
        </h3>
      )) || (
        <h3 className="title is-3 has-text-danger	">
          You are not authenticated.
        </h3>
      )}
      <Button>Hello</Button>
    </Layout>
  );
};

Whoami.getInitialProps = async ctx => {
  initialize(ctx);
  const token = ctx.store.getState().authentication.token;
  if (token) {
    // let id = jwt_decode(token).id;
    try {
      const response = await axios.get(
        `https://api.github.com/users/kenshinman`,
        {
          headers: {
            authorization: token
          }
        }
      );
      const user = response.data;
      return {
        user
      };
    } catch (error) {
      devLogger(error.response);
      return {
        user: { firstName: "Paul" }
      };
    }
  }
};

export default connect(state => state)(Whoami);
