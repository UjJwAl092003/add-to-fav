import { useState } from "react";

import "./App.css";
import Navbar from "./Components/Navbar";
import Card from "./Components/Card";

function App() {
  const data = [
    {
      image:
        "https://plus.unsplash.com/premium_photo-1664302427357-40eb7c8fd3c0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Challenger",
      artist: "Ujjwal",
      added: false,
    },
    {
      image:
        "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c29uZ3xlbnwwfHwwfHx8MA%3D%3D",
      name: "Suniya Suniya",
      artist: "Mika",
      added: false,
    },
    {
      image:
        "https://images.unsplash.com/photo-1565103420311-8cbbc3cd87b8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHNvbmd8ZW58MHx8MHx8fDA%3D",
      name: "One Day",
      artist: "Arijit",
      added: false,
    },
    {
      image:
        "https://images.unsplash.com/photo-1534841224259-c770c7bb6a95?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fHNvbmd8ZW58MHx8MHx8fDA%3D",
      name: "Two lines",
      artist: "Dua Lipa",
      added: false,
    },
    {
      image:
        "https://images.unsplash.com/photo-1497616987741-7fba8102046e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fHNvbmd8ZW58MHx8MHx8fDA%3D",
      name: "One Love",
      artist: "Mix Singh",
      added: false,
    },
  ];
  const [songData, setSongData] = useState(data);

  const handleClick = (index) => {
    setSongData((prev) => {
      return prev.map((item, itemindex) => {
        if (itemindex === index) return { ...item, added: !item.added };
        return item;
      });
    });
  };

  return (
    <>
      <div>
        <Navbar data={songData}></Navbar>
        <div className="px-20 flex gap-10 mt-10 flex-wrap">
          {songData.map((obj, index) => {
            return (
              <Card
                data={obj}
                handleClick={handleClick}
                index={index}
                key={index}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
