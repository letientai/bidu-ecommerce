import React from 'react'
import "./post.scss"
import avt from "../../../assets/data-userStory/img/img5.jpg"
export const Post = () => {
  return (
    <div className='post'>
        <div className="post_header">
            <div className="avt">
                <img src={avt} alt="" />
            </div>
            <div className="name">
                <p>yonqseok_io</p>
            </div>
        </div>
        <div className="post_content">
            <div className="image">
                <img src={avt} alt="" />
            </div>
        </div>
    </div>
  )
}
