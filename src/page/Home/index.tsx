import { Box } from "@mui/material";
import Game from "../../components/Game";
import "./index.css";
import { useState } from "react";
import { ChampsProps } from "../../api/type";
const Home = () => {
  const [champ, setChamp] = useState<ChampsProps>({
    name: "",
    class: "",
    position: "",
    partype: "",
  });
  const [enteredValues, setEnteredValues] = useState<string[]>([]);
  const [hits, setHits] = useState<number>(
    JSON.parse(localStorage.getItem("hits") || "0")
  );
  const [totalAttempts, setTotalAttempts] = useState<number>(
    JSON.parse(localStorage.getItem("attempts") || "0")
  );
  const [attempts, setAttempts] = useState<number>(10);

  return (
    <Box component="div" className="container-home">
      <Game
        enteredValues={enteredValues}
        setEnteredValues={setEnteredValues}
        champ={champ}
        setChamp={setChamp}
        hits={hits}
        setHits={setHits}
        totalAttempts={totalAttempts}
        setTotalAttempts={setTotalAttempts}
        setAttempts={setAttempts}
        attempts={attempts}
      />
    </Box>
  );
};
export default Home;
