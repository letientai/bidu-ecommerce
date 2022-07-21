import React from "react";
import { Skeleton } from "@mui/material";
import "./loading.scss";

export const LoadingTopProduct = () => {
  return [1, 2, 3, 4, 5].map((index) => (
    <div className="loadingTopProduct" key={index}>
      <Skeleton variant="rectangular" width={120} height={120} />
      <div className="inf">
        <Skeleton />
        <Skeleton animation="wave" />
        <Skeleton animation="wave" />
        <Skeleton animation={false} />
      </div>
    </div>
  ));
};
