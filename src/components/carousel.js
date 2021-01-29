import React, { Component } from "react";

class Carousel extends Component {
  render() {
    return (
      <div className="container carousel">
        <div id="myCarousel" class="carousel slide" data-ride="carousel">
          <ol class="carousel-indicators">
            <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
            <li data-target="#myCarousel" data-slide-to="1"></li>
            <li data-target="#myCarousel" data-slide-to="2"></li>
          </ol>

          <div class="carousel-inner">
            <div className="item active">
              <img
                src="https://ae01.alicdn.com/kf/HTB1cMvpjDCWBKNjSZFtq6yC3FXaM/2018-New-summer-men-s-linen-shirt-men-brand-three-quarter-sleeve-shirt-mens-gradient-blue.jpg"
                alt="Shirt"
              />
            </div>

            <div className="item">
              <img
                src="https://ae01.alicdn.com/kf/HTB17al0ySzqK1RjSZPxq6A4tVXaf/New-Winter-Wool-Coat-Slim-Fit-Jackets-Mens-Casual-Warm-Outerwear-Jacket-and-coat-Men-Pea.jpg"
                alt="Coat"
              />
            </div>

            <div className="item">
              <img
                src="https://images-na.ssl-images-amazon.com/images/I/71UC5TkXixL._AC_UL1200_.jpg"
                alt="Hat"
              />
            </div>
          </div>

          <a class="left carousel-control" href="#myCarousel" data-slide="prev">
            <span class="glyphicon glyphicon-chevron-left"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a
            class="right carousel-control"
            href="#myCarousel"
            data-slide="next"
          >
            <span class="glyphicon glyphicon-chevron-right"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </div>
    );
  }
}

export default Carousel;
