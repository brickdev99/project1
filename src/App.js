import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import Carousel from "./components/carousel.js";
import Item from "./components/items.js";
import Footer from "./components/footer.js";
import $ from "jquery";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <nav
        class="navbar navbar-default navbar-fixed-top"
        onScroll={this.props.changeClass}
      >
        <div class="container">
          <div class="navbar-header">
            <a href="#" class="navbar-brand">
              Shopping Website
            </a>
          </div>
          <div class="collapse navbar-collapse" id="exampleNavComponents">
            <ul class="nav navbar-nav navbar-right"></ul>
          </div>
        </div>
      </nav>
    );
  }
}

class App extends Component {
  componentDidMount() {
    window.addEventListener("scroll", this.changeClass);
  }

  changeClass = () => {
    $(window).on("scroll", function () {
      if ($(window).scrollTop() >= 20) {
        $(".navbar").addClass("compressed");
      } else {
        $(".navbar").removeClass("compressed");
      }
    });
  };

  render() {
    return (
      <div className="App">
        <Navbar changeClass={this.changeClass}></Navbar>
        <Carousel />
        <Item />
        <Footer />
      </div>
    );
  }
}

export default App;
