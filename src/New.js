import React, { useState, useEffect } from 'react';

const App = () => {
  const [data, setData] = useState([]);
  const [searchKeyword, setSearchKeyword] = useState('');
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${searchKeyword}&apikey=YOUR_API_KEY&page=${page}`
        );
        const jsonData = await response.json();
        setData(jsonData.bestMatches || []);
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };
    fetchData();
  }, [searchKeyword, page]);

  return (
    <div className="App">
      <h1>API Data Listing</h1>
      <input
        type="text"
        placeholder="Search by keyword"
        value={searchKeyword}
        onChange={(e) => setSearchKeyword(e.target.value)}
      />
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {data &&
          data.map((item) => (
            <div key={item['1. symbol']} style={cardStyle}>
              <h3>{item['1. symbol']}</h3>
              <p>Name: {item['2. name']}</p>
              <p>Market Open: {item['5. marketOpen']}</p>
              <p>Market Close: {item['6. marketClose']}</p>
              <p>Match Score: {item['9. matchScore']}</p>
            </div>
          ))}
      </div>
      <div>
        <button onClick={() => setPage((prev) => Math.max(prev - 1, 1))}>Previous Page</button>
        <button onClick={() => setPage((prev) => prev + 1)}>Next Page</button>
      </div>
    </div>
  );
};

const cardStyle = {
  border: '1px solid #ccc',
  borderRadius: '5px',
  backgroundColor: 'lightpink',
  padding: '10px',
  margin: '10px',
  width: '200px',
};

export default App;
