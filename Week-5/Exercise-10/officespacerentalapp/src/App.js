import React from "react";
import "./App.css";

function App() {
  const officeList = [
    {
      Name: "DBS",
      Rent: 50000,
      Address: "Chennai",
      img: "https://cdn.sanity.io/images/uqxwe2qj/production/62db3c671745e98cb27690dff96f8033d2bb7f35-2048x1010.jpg?q=80&auto=format&fit=clip&w=1440",
    },
    {
      Name: "Regus",
      Rent: 65000,
      Address: "Bangalore",
      img: "https://qdesq.imagekit.io/img/tr:n-listing_image_hq/image/upload/v1579507319/rnrxqcbatzfzmzj7d48c.webp",
    },
    {
      Name: "WeWork",
      Rent: 55000,
      Address: "Hyderabad",
      img: "https://qdesq.imagekit.io/img/tr:n-listing_image_hq/image/upload/v1608703156/aea4o5w8woxv5hnqaadr.webp",
    },
  ];

  return (
    <div className="App">
      <h1>Office Space Rental</h1>
      {officeList.map((office, index) => (
        <div
          key={index}
          style={{ border: "1px solid #ccc", padding: "10px", margin: "10px" }}
        >
          <img
            src={office.img}
            alt={office.Name}
            style={{ width: "250px", height: "150px", objectFit: "cover" }}
          />
          <h2>Office Name: {office.Name}</h2>
          <h3 style={{ color: office.Rent < 60000 ? "red" : "green" }}>
            Rent: Rs. {office.Rent}
          </h3>
          <h3>Address: {office.Address}</h3>
        </div>
      ))}
    </div>
  );
}

export default App;
