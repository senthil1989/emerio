import React, { useState } from "react";

const FlightDetails = props => {
  console.log(props);

  const { userData } = props;
  const detailview = () => {
    let keyid = Math.random();
    console.log(keyid);
    return userData.map((user, index) => {
      return (
        <>
          <ul key={keyid + user.id}>
            <li key={keyid + user.name}>{user.name}</li>
            <li key={keyid + user.origin}>{user.origin}</li>
            <li key={keyid + user.destination}>{user.destination}</li>
            <li key={keyid + user.price}>{user.price}</li>
            <li key={keyid + user.rating}>{user.rating}</li>
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
