import React, { useState, useEffect } from "react";
import "./App.css";
import New from './New'
function App() {
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch(
  //         "https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=AAPL&apikey=YOUR_API_KEY&page"
  //       );
  //       const jsonData = await response.json();
  //       setData(jsonData.bestMatches);
  //     } catch (error) {
  //       console.error("Error fetching data: ", error);
  //     }
  //   };
  //   fetchData();
  // }, []);

  // const Navbar = () => {
  //   return (
  //     <div className="my_navbar">
  //       <input className="inpbtnn" placeholder="Enter... " />
  //       <button className="btnn" >Support</button>
  //       <button className="btnn" >Api key</button>
  //     </div>
  //   );
  // };

  

  return (
    <><New/></>
    // <div className="App">
    //   <h1>API Data  is Cards</h1>
    //   <Navbar />

    //   <div
    //     style={{
    //       textAlign: "center",
    //       display: "flex",
    //       flexWrap: "wrap",
    //       flexDirection: "row",
    //     }}
    //   >
    //     {data?.map((item) => (
    //       <div
    //         key={item["1. symbol"]}
    //         style={{
    //           alignItems: "center",
    //           textAlign: "center",
    //           border: "1px solid #ccc",
    //           borderRadius: "5px",
    //           backgroundColor: "pink",
    //           display: "flex",
    //           flexDirection: "column",
    //           padding: "10px",
    //           margin: "10px",
    //           width: "200px",
    //         }}
    //       >
    //         <h3>{item["2. name"]}</h3>
    //         <p>Equity :{item["3. type"]}</p>
    //         <p>region  :{item["4. region"]}</p>
    //         <p>marketOpen  :{item["5. marketOpen"]}</p>
    //         <p>marketClose  : {item["6. marketClose"]}</p>
    //       </div>
    //     ))}
    //   </div>
    // </div>
  );
}

export default App;
