import { Provider } from "react-redux";
import App, { Container } from "next/app";
import withRedux from "next-redux-wrapper";
import { initStore } from "../redux";
// import NProgress from "next-nprogress/component";

export default withRedux(initStore, { debug: true })(
  class MyApp extends App {
    static async getInitialProps({ Component, ctx }) {
      return {
        pageProps: {
          ...(Component.getInitialProps
            ? await Component.getInitialProps(ctx)
            : {})
        }
      };
    }

    render() {
      const { Component, pageProps, store } = this.props;
      return (
        <Container>
          {/* <NProgress /> */}
          <Provider store={store}>
            <Component {...pageProps} />
          </Provider>
        </Container>
      );
    }
  }
);
