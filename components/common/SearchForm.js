import { Component } from "react";

class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      serial: "",
      itemType: ""
    };

    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    if (e) e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      <section className="search-sec">
        <div className="container">
          <form action="#" method="post" noValidate="novalidate">
            <div className="row">
              <div className="col-lg-12">
                <div className="row">
                  <div className="col-lg-3 col-md-3 col-sm-12 p-0">
                    <input
                      type="text"
                      className="form-control search-slt"
                      placeholder="Enter Pickup City"
                    />
                  </div>
                  <div className="col-lg-3 col-md-3 col-sm-12 p-0">
                    <input
                      type="text"
                      className="form-control search-slt"
                      placeholder="Enter Drop City"
                    />
                  </div>
                  <div className="col-lg-3 col-md-3 col-sm-12 p-0">
                    <select
                      className="form-control search-slt"
                      id="exampleFormControlSelect1">
                      <option>Select Vehicle</option>
                      <option>Example one</option>
                      <option>Example one</option>
                      <option>Example one</option>
                      <option>Example one</option>
                      <option>Example one</option>
                      <option>Example one</option>
                    </select>
                  </div>
                  <div className="col-lg-3 col-md-3 col-sm-12 p-0">
                    <button type="button" className="btn btn-danger wrn-btn">
                      Search
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
        <style jsx>
          {`
            .search-sec {
              background: #1a4668;
              padding: 2rem;
            }
            .search-slt {
              display: block;
              width: 100%;
              font-size: 0.875rem;
              line-height: 1.5;
              color: #55595c;
              background-color: #fff;
              background-image: none;
              border: 1px solid #ccc;
              height: calc(3rem + 2px) !important;
              border-radius: 0;
            }
            .wrn-btn {
              width: 100%;
              font-size: 16px;
              font-weight: 400;
              text-transform: capitalize;
              height: calc(3rem + 2px) !important;
              border-radius: 0;
            }
          `}
        </style>
      </section>
    );
  }
}

export default SearchForm;
