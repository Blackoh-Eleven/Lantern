import { useState } from "react";
import Logo from "./components/logo.jsx";
import Landing from "./pages/landingpage.jsx";
import MarketDashboard from "./pages/marketdashboard.jsx";

const App = () => {

  const [showMarket,setShowMarket] = useState(false)
  return (
    <>
    {!showMarket && (
       <Landing onOpenMarket={()=>setShowMarket(true)}/>
    )}

    {showMarket && <MarketDashboard/>}

    </>
  );
};

export default App;
