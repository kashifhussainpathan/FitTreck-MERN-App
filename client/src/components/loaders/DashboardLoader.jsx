import React from "react";
import UserCard from "../userCard/UserCard";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function DashboardLoader() {
  return (
    <div className="dashboard">
      <section className="caloriesSummary">
        <div className="caloriesSummary__details">
          <div className="caloriesSummary__detail">
            <Skeleton width={250} count={1} height={110} />
            <div>
              <Skeleton width={250} count={1} />
            </div>
          </div>

          <div className="caloriesSummary__detail">
            <Skeleton width={250} count={1} height={110} />
            <div>
              <Skeleton width={250} count={1} />
            </div>
          </div>

          <div className="caloriesSummary__detail">
            <Skeleton width={250} count={1} height={110} />
            <div>
              <Skeleton width={250} count={1} />
            </div>
          </div>

          <div className="caloriesSummary__detail">
            <Skeleton width={250} count={1} height={110} />
            <div>
              <Skeleton width={250} count={1} />
            </div>
          </div>
        </div>

        <div
          className="caloriesChart"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <Skeleton width={550} count={1} />
          <Skeleton width={550} count={1} height={280} />
        </div>
      </section>

      <section className="user-wrapper">
        <UserCard />
      </section>
    </div>
  );
}

export default DashboardLoader;
