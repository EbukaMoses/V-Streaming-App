import { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Feed from "./components/pages/Feed";
import VideoDetail from "./components/pages/VideoDetail";
import ChannelDetail from "./components/pages/ChannelDetail";
import SearchFeed from "./components/pages/SearchFeed";
import Navbar from "./components/common/Navbar";

function App() {
  const [count, setCount] = useState(0);

  return <>
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/video/:id" element={<VideoDetail />} />
        <Route path="/channel/:id" element={<ChannelDetail />} />
        <Route path="/search/:searchTeam" element={<SearchFeed />} />
      </Routes>
    </BrowserRouter>
  </>;
}

export default App;
