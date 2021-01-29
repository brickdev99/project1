import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <div>
        <div class="col-md-12 text-center footer">
          <ul class="social-network social-circle">
            <li>
              <a href="#" class="icoRss" title="Rss">
                <i class="fa fa-rss"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/ltndat"
                class="icoFacebook"
                title="Facebook"
              >
                <i class="fa fa-facebook"></i>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/brickdev99"
                class="icoTwitter"
                title="Twitter"
              >
                <i class="fa fa-github"></i>
              </a>
            </li>
          </ul>
          <p style={{ color: "white" }}>Made By : Le Tran Ngoc Dat</p>
        </div>
      </div>
    );
  }
}

export default Footer;
