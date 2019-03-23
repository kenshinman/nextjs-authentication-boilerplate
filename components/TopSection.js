import { Component, Fragment } from "react";
import SearchForm from "./common/SearchForm";
// import { Form, FormControl } from "react-bootstrap";

class TopSection extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Fragment>
        <section className="top-search-wrap">
          <div className="overlay" />
          <div className="search-form-wrap p-3">
            <h3 className="text-center">Search for your ow thing...</h3>
            <SearchForm />
          </div>
        </section>
        <style jsx>
          {`
            .top-search-wrap {
              background: url(/static/img/main_bg.jpg);
              height: 450px;
              width: 100%;
              display: flex;
              justify-content: center;
              align-items: center;
            }
            .search-form-wrap {
              width: 60%;
              background-color: rgba(225, 225, 225, 0.5);
            }
          `}
        </style>
      </Fragment>
    );
  }
}

export default TopSection;
