import { Skeleton, Typography } from "@mui/material";
import React from "react";
import "./loading.scss";

export const LoadingDetail = () => {
  return (
    <div className="main_content">
      <div className="slide-image">
        <div className="slide">
          <Skeleton
            variant="rectangular"
            width={110}
            height={140}
            className="rectangular"
          />
          <Skeleton
            variant="rectangular"
            width={110}
            height={140}
            className="rectangular"
          />
          <Skeleton
            variant="rectangular"
            width={110}
            height={140}
            className="rectangular"
          />
        </div>
      </div>
      <div className="image">
        <Skeleton
          variant="rectangular"
          width={`100%`}
          height={520}
          className="rectangular"
        />
      </div>
      <div className="inf">
        <Typography variant="h1">
          <Skeleton animation="wave" />
        </Typography>
        <Skeleton animation="wave" width={400} />
        <Skeleton animation={false} />
        <Skeleton />
        <Typography variant="h3">
          <Skeleton animation="wave" />
        </Typography>
        <Skeleton width={400} />
        <Skeleton width={400} />
        <Skeleton width={400} />
      </div>
    </div>
  );
};
