import "../pages/marketdashboard.css";
import { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
















function MarketDashboard() {
    const[asset,setAsset] = useState('BTC')
    const [timeframe, setTimeframe] = useState("1D");
    const [apiData, setApiData] = useState(null);
    const[chart,setChart] = useState([]);


    const timeframeDays = {
  "1H": 1,
  "1D": 1,
  "1W": 7,
  "1M": 30,
  "1Y": 365,
};


      const coinIds = {
        BTC: "bitcoin",
        ETH: "ethereum",
        SOL: "solana",
        BNB: "binancecoin"
      };

      const currentApiMarket = apiData?.find(
        (market) => market.id === coinIds[asset]
      );




useEffect(() => {
  fetch("https://lantern-backend-wqjb.onrender.com/api/markets")
    .then((response) => response.json())
    .then((data) => {
      setApiData(data);
      console.log(data)
      // const bitcoin = data.find((coin) => coin.id === "bitcoin");
      // console.log(bitcoin.current_price);
    });
}, []);


useEffect(() => {
  fetch(`https://lantern-backend-wqjb.onrender.com/chart?currentCoinChart=${coinIds[asset]}&days=${timeframeDays[timeframe]}`)
    .then((response) => response.json())
    .then((data) => {
      setChart(
        data.prices.map((item) => ({
          time: item[0],
          price: item[1],
        }))
      );
    });
    console.log(chart)
}, [timeframe,asset]);








    

//     const marketData = {
//   BTC: {
//     name: "Bitcoin",
//     symbol: "BTC",
//     price: "$67,842.24",
//     currenyPair: "BTC / USD",
//     change: "+2.48%",
//     high: "$68,921.40",
//     low: "$65,104.72",
//     volume: "$38.4B",
//     chart: {
//   "1H": [67000, 67120, 66980, 67300, 67550, 67420, 67842],

//   "1D": [65000, 65400, 65100, 66200, 65800, 67100, 67842],

//   "1W": [62000, 63500, 62800, 64100, 65000, 66300, 67842],

//   "1M": [58000, 60000, 61500, 59800, 63000, 65200, 67842],

//   "1Y": [42000, 47000, 51000, 56000, 59000, 63000, 67842],
// },
//   },

// ETH: {
//   name: "Ethereum",
//   symbol: "ETH",
//   price: "$3,842.18",
//   currenyPair: "ETH / USD",
//   change: "+1.86%",
//   high: "$3,910.22",
//   low: "$3,742.50",
//   volume: "$18.7B",
//   chart: {
//     "1H": [3780, 3805, 3792, 3820, 3810, 3830, 3842],
//     "1D": [3690, 3725, 3750, 3710, 3780, 3815, 3842],
//     "1W": [3510, 3590, 3650, 3610, 3720, 3790, 3842],
//     "1M": [3200, 3340, 3420, 3370, 3540, 3710, 3842],
//     "1Y": [2100, 2450, 2780, 3010, 3260, 3520, 3842],
//   },
// },

// SOL: {
//   name: "Solana",
//   symbol: "SOL",
//   price: "$182.64",
//   currenyPair: "SOL / USD",
//   change: "+4.12%",
//   high: "$187.91",
//   low: "$174.20",
//   volume: "$5.8B",
//   chart: {
//     "1H": [178, 179.5, 178.2, 181, 180.4, 182, 182.64],
//     "1D": [174.5, 176, 178.5, 177, 180, 181.2, 182.64],
//     "1W": [165, 169, 167, 173, 176, 180, 182.64],
//     "1M": [142, 151, 157, 153, 164, 175, 182.64],
//     "1Y": [82, 96, 112, 128, 145, 164, 182.64],
//   },
// },

// BNB: {
//   name: "BNB",
//   symbol: "BNB",
//   price: "$612.37",
//   currenyPair: "BNB / USD",
//   change: "+1.24%",
//   high: "$618.42",
//   low: "$601.18",
//   volume: "$1.9B",
//   chart: {
//     "1H": [607, 609, 608, 611, 610, 612, 612.37],
//     "1D": [601, 604, 606, 603, 608, 610, 612.37],
//     "1W": [578, 586, 581, 594, 600, 607, 612.37],
//     "1M": [542, 555, 568, 559, 580, 598, 612.37],
//     "1Y": [310, 365, 420, 475, 520, 568, 612.37],
//   },
// },

 
// };
    // const currentMarket = marketData[asset]
// console.log(asset)

//  console.log(currentMarket.name)


// const chartData = currentMarket.chart[timeframe].map((price, index) => ({
//   time: index + 1,
//   price: price,
// }));


  return (
    <main className="market-dashboard">

      <header className="market-header">

        <div>
          <p className="market-label">MARKET</p>
          <h1>{currentApiMarket?currentApiMarket.name : 'Loading'}</h1>
        </div>

        <select
           value={asset}
            onChange={(e)=>setAsset(e.target.value)}
         className="asset-select">

            {/* {console.log(asset)} */}
         
          <option value="BTC">Bitcoin (BTC)</option>
          <option value="ETH">Ethereum (ETH)</option>
          <option value="SOL">Solana (SOL)</option>
          <option value="BNB">BNB</option>
        </select>

      </header>

      <section className="market-overview">

        <div className="price-block">
          <p>{currentApiMarket?currentApiMarket.symbol.toLocaleUpperCase() + " " + '/ USD' : 'Loading' }</p>
          <h2>{currentApiMarket
  ? `$${currentApiMarket.current_price.toLocaleString()}`
  : "Loading..."}</h2>

          <span className="price-change">{currentApiMarket?currentApiMarket.atl.toFixed(2):'Loading'}</span>
        </div>

        <div className="market-stats">

          <div>
            <span>24H HIGH</span>
            <strong>{currentApiMarket?currentApiMarket.high_24h:'Loading'}</strong>
          </div>

          <div>
            <span>24H LOW</span>
            <strong>{currentApiMarket?currentApiMarket.low_24h:'Loading'}</strong>
          </div>

          <div>
            <span>24H VOLUME</span>
            <strong>{currentApiMarket?currentApiMarket.total_volume.toLocaleString():'Loading'}</strong>
          </div>

        </div>

      </section>

      <section className="chart-section">

        <div className="chart-header">
          <h2>Price Overview</h2>

            <div className="timeframes">

          <button
            className={timeframe === "1H" ? "active" : ""}
            onClick={() => setTimeframe("1H")}
      >
            1H
          </button>

          <button
            className={timeframe === "1D" ? "active" : ""}
            onClick={() => setTimeframe("1D")}
      >
            1D
          </button>

          <button
            className={timeframe === "1W" ? "active" : ""}
            onClick={() => setTimeframe("1W")}
      >
            1W
          </button>

          <button
            className={timeframe === "1M" ? "active" : ""}
            onClick={() => setTimeframe("1M")}
      >
            1M
          </button>

          <button
            className={timeframe === "1Y" ? "active" : ""}
            onClick={() => setTimeframe("1Y")}
      >
            1Y
          </button>

            </div>
        </div>

<div className="chart-placeholder">
  <ResponsiveContainer width="100%" height={350}>
    <LineChart data={chart}>
      <XAxis dataKey="time" />
      <YAxis domain={["auto", "auto"]} />
      <Tooltip />

      <Line
        type="monotone"
        dataKey="price"
        // stroke="#D6B36A"
          stroke="#22C55E"
        strokeWidth={2}
        dot={false}
      />
    </LineChart>
  </ResponsiveContainer>
</div>

      </section>

    </main>
  );
}

export default MarketDashboard;