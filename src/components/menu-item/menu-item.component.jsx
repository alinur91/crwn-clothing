import React, { Component } from 'react'
import './menu-item.styles.scss'
import {withRouter} from 'react-router-dom'


const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => { /* match.url degen localhost:3000/, linkUrl degen shop/sneakers polu4aetsya localhost:3000/shop/sneakers */
  return (
  <div
    onClick={() => history.push(`${match.url}${linkUrl}`)}
    className={`${size} menu-item`}
  >
    <div
      className="background-image"
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    />
    <div className="content">
      <h1 className="title">{title.toUpperCase()}</h1>
      <span className="subtitle">SHOP NOW</span>
      <h1></h1>
    </div>
  </div>
);
}
/* withRouter degen propsta history paida bolady,bizge history.push('/') kerek  withRouter will pass updated match , location , and history props to the wrapped component whenever it renders*/
export default withRouter(MenuItem)