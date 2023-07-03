import { Box } from "@mui/material";
import Game from "../../components/Game";
import "./index.css";
import { useState } from "react";
import { ChampsProps } from "../../api/type";
const Home = () => {
  const [champ, setChamp] = useState<ChampsProps>();
  const [enteredValues, setEnteredValues] = useState<string[]>([]);
  const [hits, setHits] = useState<number>(0);
  const [attempts, setAttempts] = useState<number>(0);

  console.log(enteredValues);
  // JSON.parse(localStorage.getItem("favorites") || "[]"
  const verifiqued = (input: string) => {
    if (enteredValues.includes(input)) {
      console.log("esse nome ja foi digitado");
    } else if (input.toLocaleLowerCase() === champ?.name.toLocaleLowerCase()) {
      console.log("acertou");
      setAttempts((oldNum: number) => oldNum + 1);
      setHits((oldNum: number) => oldNum + 1);
    } else {
      console.log("errou");
      setAttempts((oldNum: number) => oldNum + 1);
    }
    setEnteredValues([...enteredValues, input]);
  };

  return (
    <Box component="div" className="container-home">
      <Game
        enteredValues={enteredValues}
        verifiqued={verifiqued}
        setChamp={setChamp}
        hits={hits}
        attempts={attempts}
      />
    </Box>
  );
};
export default Home;
