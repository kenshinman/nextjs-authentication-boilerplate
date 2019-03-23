import Layout from "../Layout";
// import Link from "next/link";

const PageError = ({ message }) => (
  <Layout>
    <div className="container">
      <div className="col-12 col-md-6 offset-md-3 mt-5">
        <div
          class="alert alert-danger alert-dismissible fade show"
          role="alert">
          <button
            type="button"
            class="close"
            data-dismiss="alert"
            aria-label="Close">
            <span aria-hidden="true">&times;</span>
            <span class="sr-only">Close</span>
          </button>
          <h4>{message}</h4>
          {/* {redirectTo && <p>Go back</p>} */}
        </div>
      </div>
    </div>
  </Layout>
);

export default PageError;
