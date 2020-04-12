import React, { Component } from "react";

export class Header extends Component {
  render() {
    return (
      <div style={style}>
        <div className="container">
          <div className="container-inner" style={styleInner}>
            <div className="banner-inner" style={bannerInner}>
              <div className="row" style={styleRow}>
                <div className="column banner-content" style={styleBanner}>
                  <h1 style={h1}>COVID19</h1>
                  <p></p>
                  <p>Find out more information on COVID19</p>
                  <div className="banner__cta" style={styleCTA}>
                    <a className="button" target="_self" href="#list" style={styleButton}>
                      View the list
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;

const style = {
  backgroundImage:
    "url(https://www.storyme.com/hs-fs/hubfs/StoryMe_2017/Image/background_header-01.png?t=1537799461843&width=1920&name=background_header-01.png)",
  backgroundPosition: "bottom center",
  backgroundSize: "cover",
  position: "relative",
  padding: '60px 0'
};
const styleInner = {
    position: 'relative',
    margin: '0 auto',
    width: '90%',
    maxWidth: '1120px',
    color: 'black'
};
const bannerInner = {
    padding: '100px 0',
    boxSizing: 'border-box'
}
const styleRow = {
    display: 'flex'
}
const styleBanner = {
    position: 'relative',
    zIndex: '2',
    textAlign: 'center',
    width: '100%',
    maxWidth: '950px',
    margin: '0 auto',
    boxSizing: 'border-box',
    padding: '60px 0',
}
const h1 = {
    fontSize: '2.75em',
    lineHeight: '1.3',
    fontWeight: 'bold'
}
const styleCTA = {
    PaddingTop: '25px'
}
const styleButton = {
    color: 'white',
    background: '#362c2c',
    padding: '.87em 1.7em',
    borderRadius: '4px',
    // background: '#fff',
    textDecoration: 'none',
    boxSizing: 'border-box',
    transition: 'transform .4s cubic-bezier(.374,.019,.035,1.861),-webkit-transform .3s cubic-bezier(.374,.019,.035,1.861)',
    display: 'inline-block',
    border: 'none',
    cursor: 'pointer',
    outline: '0'
}