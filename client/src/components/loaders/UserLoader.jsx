import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function UserLoader() {
  return (
    <div className="usercard">
      <Skeleton count={1} circle width={100} height={100} />

      <div className="usercard__details">
        <Skeleton width={150} count={1} />
        <Skeleton width={150} count={1} />
        <Skeleton width={150} count={1} />
      </div>
    </div>
  );
}

export default UserLoader;
