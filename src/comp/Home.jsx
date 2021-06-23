import React, { Component } from "react";
import Main from "./Main";

// import Warranty from "./Warranty";
// import Created from "./Created";
// import Footer from "./Footer";
// import Services from "./Services";

class Home extends Component {
  render() {
    return (
      <div id="home">
        <div className="container">
          <Main />
          {/* <Warranty />
          <Services />
          <Footer />
          <Created /> */}
        </div>
      </div>
    );
  }
}

export default Home;
