import {useState} from "react";

import RoulettePro from "react-roulette-pro";
import "./Home.css";
import background from "../images/background.jpg";
import top1 from "../images/top/1.bmp";
import top2 from "../images/top/2.bmp";
import top3 from "../images/top/3.bmp";
import top4 from "../images/top/4.bmp";
import top5 from "../images/top/5.png";
import pants1 from "../images/pants/1.bmp";
import pants2 from "../images/pants/2.bmp";
import pants3 from "../images/pants/3.bmp";
import pants4 from "../images/pants/4.bmp";
import accessory1 from "../images/accessory/1.jpg";
import accessory2 from "../images/accessory/2.bmp";
import accessory3 from "../images/accessory/3.bmp";
import accessory4 from "../images/accessory/4.bmp";
import accessory5 from "../images/accessory/5.bmp";
import accessory6 from "../images/accessory/6.bmp";
import accessory7 from "../images/accessory/7.jpg";
const prizes = [
  {
    image: top1,
  },
  {
    image: top2,
  },
  {
    image: top3,
  },
  {
    image: top4,
  },
  {
    image: top5,
  },
];

const pants = [
  {
    image: pants1,
  },
  {
    image: pants2,
  },
  {
    image: pants3,
  },
  {
    image: pants4,
  },
];

const accessory = [
  {
    image: accessory1,
  },
  {
    image: accessory2,
  },
  {
    image: accessory3,
  },
  {
    image: accessory4,
  },
  {
    image: accessory5,
  },
  {
    image: accessory6,
  },
  {
    image: accessory7,
  },
];
const reproductionArray = (array = [], length = 0) => [
  ...Array(length)
    .fill("_")
    .map(() => array[Math.floor(Math.random() * array.length)]),
];

const reproducedPrizeList = [
  ...prizes,
  ...reproductionArray(prizes, prizes.length * 3),
  ...prizes,
  ...reproductionArray(prizes, prizes.length),
];

const reproducedPantsList = [
  ...pants,
  ...reproductionArray(pants, pants.length * 3),
  ...pants,
  ...reproductionArray(pants, pants.length),
];

const reproducedAccessoryList = [
  ...accessory,
  ...reproductionArray(accessory, accessory.length * 3),
  ...accessory,
  ...reproductionArray(accessory, accessory.length),
];

const generateId = () =>
  `${Date.now().toString(36)}-${Math.random().toString(36).substring(2)}`;

const prizeList = reproducedPrizeList.map((prize) => ({
  ...prize,
  id: generateId(),
}));

const pantsList = reproducedPantsList.map((pants) => ({
  ...pants,
  id: generateId(),
}));

const accessoryList = reproducedAccessoryList.map((accessory) => ({
  ...accessory,
  id: generateId(),
}));

const Home = () => {
  const [start, setStart] = useState(false);

  const winPrizeIndex = Math.floor(Math.random() * 5);
  const winPantsIndex = Math.floor(Math.random() * 4);
  const winAccessoryIndex = Math.floor(Math.random() * 7);

  const topIndex = prizes.length * 4 + winPrizeIndex;
  const pantsIndex = pants.length * 4 + winPantsIndex;
  const accessoryIndex = accessory.length * 4 + winAccessoryIndex;

  console.log("topIndex", topIndex);
  console.log("pantsIndex", pantsIndex);
  console.log("accessoryIndex", accessoryIndex);

  const handleStart = () => {
    setStart(!start);
  };

  const handlePrizeDefined = (item) => {
    console.log("🥳 Prize defined! 🥳", item);
  };

  return (
    <div style={{backgroundColor: "black", width: "100%", height: "100vh"}}>
      <div
        style={{
          height: 800,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            // backgroundColor: "#999",
            width: "90%",
            height: "80%",
          }}
        >
          <div style={{position: "relative"}}>
            {" "}
            <img src={background} alt="background" style={{}} />
            <div
              style={{
                position: "absolute",
                top: "45%",
                left: "10%",
                // backgroundColor: "black",
                width: "22.5%",
                height: "40%",
              }}
            >
              <div style={{height: 180, width: "100%", overflowY: "hidden"}}>
                <RoulettePro
                  type={"vertical"}
                  prizes={prizeList}
                  prizeIndex={topIndex}
                  spinningTime={2}
                  start={start}
                  onPrizeDefined={handlePrizeDefined}
                />
              </div>
            </div>
            {/*  */}
            <div
              style={{
                position: "absolute",
                top: "45%",
                left: "39%",
                // backgroundColor: "black",
                width: "22.5%",
                height: "40%",
              }}
            >
              <div style={{height: 180, width: "100%", overflowY: "hidden"}}>
                <RoulettePro
                  type={"vertical"}
                  prizes={pantsList}
                  prizeIndex={pantsIndex}
                  spinningTime={2}
                  start={start}
                  onPrizeDefined={handlePrizeDefined}
                />
              </div>
            </div>
            {/*  */}
            <div
              style={{
                position: "absolute",
                top: "45%",
                left: "68%",
                // backgroundColor: "black",
                width: "22.5%",
                height: "40%",
              }}
            >
              <div style={{height: 180, width: "100%", overflowY: "hidden"}}>
                <RoulettePro
                  type={"vertical"}
                  prizes={accessoryList}
                  prizeIndex={accessoryIndex}
                  spinningTime={2}
                  start={start}
                  onPrizeDefined={handlePrizeDefined}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div style={{display: "flex", justifyContent: "center"}}>
        <button
          onClick={handleStart}
          style={{
            width: "20%",
            height: 60,
            backgroundColor: "white",
            color: "black",
          }}
        >
          Start
        </button>
      </div>
    </div>
  );
};

export default Home;
