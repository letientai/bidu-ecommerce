import React from "react";
import { Skeleton } from "@mui/material";
import "./loading.scss";
export const LoadingSuggest = () => {
  return [1, 2, 3].map(() =>
    [1, 2, 3, 4, 5].map((index) => (
      <div className="skeleton" key={index}>
        <Skeleton variant="rectangular" width={187} height={200} />
        <Skeleton variant="text" />
        <Skeleton variant="text" />
        <Skeleton variant="text" />
      </div>
    ))
  );
};
