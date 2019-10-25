import React, { useState } from "react";

const FlightDetails = props => {
  const { userData, ratingCount } = props;
  const detailview = () => {
    let starPercentageRounded;
    const rating = (ratelength) => {
        const starPercentage = (ratelength / 5) * 100;
        starPercentageRounded = `${Math.round(starPercentage / 10) * 10}%`;
        return (
          <li key={keyid}>
            Rating:
            {rating == 0 ? (
              <div class="stars-outer">
                <div class="stars-inner"></div>
              </div>
            ) : (
              <div class="stars-outer">
                <div
                  class="stars-inner"
                  style={{ width: `${starPercentageRounded}` }}
                ></div>
              </div>
            )}
          </li>
        );
      };

    let keyid = Math.random();
    console.log(userData);
    return userData.map((user, index) => {
      return (
        <>
          <ul key={keyid + user.id}>
            <li key={keyid + user.name}>Flight Name: {user.name}</li>
            <li key={keyid + user.destination}>
              {user.origin} to {user.destination}
            </li>
            <li key={keyid + user.price}>Price: Rs{user.price}</li>
            {rating(user.rating.length)}
          </ul>
        </>
      );
    });
  };
  return (
    <>
      <div id="flightitem">{detailview()}</div>
    </>
  );
};
export default FlightDetails;
