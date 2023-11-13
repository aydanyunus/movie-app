import React from 'react'
import { AiFillStar } from "react-icons/ai";

const ContentItem = () => {
  return (
    <div className="item">
    <img src="../../../public/poster.jpg" alt="img" />
    <div className="details">
      <h5 className="item__title">title</h5>
      <div className="rating">
        <AiFillStar />
        <span className="imdb">7.0</span>
      </div>
    </div>
  </div>
  )
}

export default ContentItem