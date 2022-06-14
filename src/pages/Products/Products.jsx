import React, { useState, useEffect } from "react";
import Product from "./Product";
import "./products.css";
import clicksLogo from "../../assets/logos/clicks-logo.png";


function Products() {
  //State management for the data pulled using fetch
  // data comes in as an array of arrays
  // so I have to transform into an array of objects
  const [data, setData] = useState([]);

  // using slice method to separate my keys (first array)..
  // ..from my properties (rest of the date) in the 'array of arrays'
  // ..into different arrays
  const keys = data.slice(0, 1);
  const properties = data.slice(1, data.length);

  // console.log(keys);

  // transforming from 'array of arrays' to 'array of objects'
  const dataObj = properties.map((elem) => ({
    [keys[0][0]]: elem[0],
    [keys[0][1]]: elem[1],
    [keys[0][2]]: elem[2],
    [keys[0][3]]: elem[3],
    [keys[0][4]]: elem[4],
    [keys[0][5]]: elem[5],
  }));

  // console.log(keys);
  // console.log(properties);
  console.log(dataObj);

  // pulling data from excel sheet
  useEffect(() => {
    fetch(
      "https://sheets.googleapis.com/v4/spreadsheets/1DpaMUmqYxGUKnT9BL0uBuCZ6WJ8vd1CLAklqUvkcA8M/values/Sheet1?alt=json&key=AIzaSyD6o4v215zWtw-kOqGVeuLG50pE2QeRZTg",
      {
        method: "GET",
      }
    )
      .then((response) => response.json())
      .then((data) => {
        //  console.log(data.values);
        setData(data.values);
      });
  }, []);

  

  

  const iphoneArr = []
  const samsungArr = []
  const appleArr = []
  const gameArr = []
  const accessoriesArr = []


  for (let i = 0; i < dataObj.length; i++) {
  switch(dataObj[i].tag) {
    case 'Iphone':
      iphoneArr.push(dataObj[i])
      break;
    case 'Samsung':
      samsungArr.push(dataObj[i])
      break;
    case 'Apple':
      appleArr.push(dataObj[i])
      break;
    case 'Games':
      gameArr.push(dataObj[i])
      break;
    case 'Accessories':
      accessoriesArr.push(dataObj[i])
      break;
  }
}

  console.log(iphoneArr)
  console.log(samsungArr)
  
  return (
    <div>
      <aside class="left-col text-center"><img src={clicksLogo} class = "banner" alt="Clicks gadget logo" width="200" 
      height="200"/></aside>
      <h1>Iphone</h1>
      
      <div className="item">
      {iphoneArr.map((prod) => (
        <div>
          <Product prod={prod} key={prod.id} />
          </div>
        ))}
      </div>
      <h1>Samsung</h1>
      <div className="item">
      {samsungArr.map((prod) => (
        <div>
          <Product prod={prod} key={prod.id} />
          </div>
        ))}
      </div>
      <h1>Apple</h1>
      <div className="item">
      {appleArr.map((prod) => (
        <div>
          <Product prod={prod} key={prod.id} />
          </div>
        ))}
      </div>
      
      <h1 id="games">Games</h1>
      <div className="item">
      {gameArr.map((prod) => (
        <div>
          <Product prod={prod} key={prod.id} />
          </div>
        ))}
      </div>
      <h1>Accessories</h1>
      <div className="item">
      {accessoriesArr.map((prod) => (
        <div>
          <Product prod={prod} key={prod.id} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
