import React, { useState, useEffect } from "react";
import "./App.css";
import AddFlight from "./components/Addflight";
import FlightDetails from "./components/FlightDetails";
import Button from "./components/Button";

function App() {
  const usersData = [
    {
      id: 1,
      name: "KingFisher",
      origin: "chennai",
      destination: "bangalore",
      price: 500,
      rating: '*****'
    },
    {
      id: 1,
      name: "KingFisher",
      origin: "chennai",
      destination: "bangalore",
      price: 20,
      rating: '***'
    }
  ];
  const ratingData = [usersData[0].rating,usersData[1].rating];

  const [users, setUsers] = useState(usersData);
  const [usersrating, setUsersRating] = useState(ratingData);
  const [sortby, setSortby] = useState({ isChecked: false, sortName: "" });

  const addUser = user => {
    user.id = users.length + 1;
    setUsers([...users, user]);
    setUsersRating([...usersrating, user.rating.length]);
  };
  console.log(ratingData)
  const asce = () => {
    if (
      users.length !== 2 &&
      sortby.sortName === "Price" &&
      sortby.isChecked === true
    ) {
      let aceResult = users.sort((a, b) => a.price - b.price);
      usersData.length = 0;
      aceResult = aceResult.pop();
      setUsers([...users, aceResult]);
    } else if (
      users.length !== 2 &&
      sortby.sortName === "Rating" &&
      sortby.isChecked === true
    ) {
      let aceResult = users.sort((a, b) => a.rating.length - b.rating.length);
      usersData.length = 0;
      aceResult = aceResult.pop();
      setUsers([...users, aceResult]);
    } else {
      setUsers(users);
    }
  };
  const desc = () => {
    if (
      users.length !== 2 &&
      sortby.sortName === "Price" &&
      sortby.isChecked === true
    ) {
      let aceResult = users.sort((a, b) => b.price - a.price);
      usersData.length = 0;
      aceResult = aceResult.pop();
      setUsers([...users, aceResult]);
    } else if (
      users.length !== 2 &&
      sortby.sortName === "Rating" &&
      sortby.isChecked === true
    ) {
      let aceResult = users.sort((a, b) => b.rating.length - a.rating.length);
      usersData.length = 0;
      aceResult = aceResult.pop();
      setUsers([...users, aceResult]);
    } else {
      setUsers(users);
    }
  };
  const handleAllChecked = e => {
    if (e.target.value === "Price") {
      setSortby({ isChecked: e.target.checked, sortName: e.target.value });
    } else {
      setSortby({ isChecked: e.target.checked, sortName: e.target.value });
    }
  };

  return (
    <div className="container-fluid">
      <div className="left-content">
        <div className="aside-content">
        <AddFlight addUser={addUser} />
      <div className="radio-container">
      <div class="radio-sty"><label class="">Price</label>
      <input
        class="radio-center"
        onClick={event => handleAllChecked(event)}
        type="radio"
        checked={sortby.sortName === "Price"}
        value="Price"
      /></div>
      <div class="radio-sty">
      <label class="">Rating</label>
      <input
      class="radio-center"
        onClick={event => handleAllChecked(event)}
        type="radio"
        checked={sortby.sortName === "Rating"}
        value="Rating"
      />
      </div>
      </div>
      
      <div className="btn-container">
      <Button name="asc" clickbtn={asce} />
      <Button name="des" clickbtn={desc} />
      </div>
        </div>
      
      
      <FlightDetails ratingCount ={usersrating} userData={users} />

      </div>
      
    </div>
  );
}

export default App;
