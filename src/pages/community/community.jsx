import React, { useState } from "react";
import "./community.scss";
import chevronRight from "../../assets/img/chevron-right.svg";
import { Story } from "../../components/community/story/story";
import { DataUserStory } from "../../assets/data-userStory/dataUserStory";
import Slider from "react-slick";
import { DataTopSeller } from "../../assets/data-topSeller/dataSeller";
import { Card } from "../../components/community/card-TopSeller/card";
import { Post } from "../../components/community/post/post";

export const Community = () => {
  const [data, setData] = useState({});
  const [position, setPosition] = useState(0);

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 2,
    initialSlide: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 475,
        settings: {
          slidesToShow: 2,
          initialSlide: 0,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 540,
        settings: {
          slidesToShow: 4,
          initialSlide: 0,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };

  const openStory = (item, index) => {
    setData(item);
    setPosition(index + 1);
    console.log(item);
  };

  const closeStories = () => {
    setData({});
  };
  const allStoriesEnd = () => {
    setPosition(position + 1);
    if (position === DataUserStory.length) {
      setData({});
    } else {
      setData(DataUserStory[position]);
    }
  };
  return (
    <div className="community">
      {data.name && (
        <div className="community-story">
          <Story
            data={data}
            closeStories={closeStories}
            allStoriesEnd={allStoriesEnd}
          />
        </div>
      )}
      <div className="community_header">
        <div className="community_header_content">
          <p>Trang chủ</p>
          <img src={chevronRight} alt="" />
          <p>Cộng đồng</p>
        </div>
      </div>
      <div className="community_content">
        <div className="main">
          <div className="main_content">
            <div className="story">
              <Slider {...settings}>
                {DataUserStory.map((item, index) => (
                  <div className="slick-story" key={index}>
                    <div
                      className="image"
                      onClick={(e) => openStory(item, index)}
                    >
                      <img src={item.image[0]} alt="" />
                    </div>
                  </div>
                ))}
              </Slider>
              <div className="posts">
                {DataTopSeller.map((item, index) => (
                  <Post key={index} />
                ))}
              </div>
            </div>
            <div className="top-seller">
              <div className="top-seller_header">
                <h3>TOP NGƯỜI DÙNG</h3>
              </div>
              <div className="top-seller_content">
                {DataTopSeller.map((item, index) => (
                  <Card key={index} item={item} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
