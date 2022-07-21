import React from "react";
import { Skeleton, Typography } from "@mui/material";
import "./loading.scss";
export const LoadingNewProduct = () => {
  return (
    <div className="Allloading">
      {[1, 2, 3, 4].map((index) => (
        <div className="loadingNewProduct" key={index}>
          <Skeleton variant="rectangular" width={160} height={160} />
          {/* <Skeleton variant="text" /> */}
          <Typography variant="h4">
            <Skeleton animation="wave" variant="text" />
          </Typography>
          <Skeleton variant="text" />
          <Skeleton variant="text" />
        </div>
      ))}
    </div>
  );
};
