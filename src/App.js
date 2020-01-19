import React, { Component } from "react";
import { Provider } from "react-redux";

import Layout from "./components/Layout";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";

import store from "./store";

import "./scss/main.scss";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Layout>
          <Header />
          <Main />
          <Footer />
        </Layout>
      </Provider>
    );
  }
}

export default App;
