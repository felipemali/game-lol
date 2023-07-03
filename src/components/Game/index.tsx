import logo from "../../assets/logo.webp";
import anotation from "../../assets/anotation.png";
import config from "../../assets/config.png";
import grafics from "../../assets/grafics.png";
import play from "../../assets/play1.png";
import { Search } from "./style";
import { Box, Typography } from "@mui/material";
import ChampionDetails from "../ChampionDetails";
import { ChampsProps } from "../../api/type";
import { useEffect, useState } from "react";
import InputChamps from "./Input";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import "./index.css";

type GameProps = {
  verifiqued: (value: string) => void;
  setChamp: (value: ChampsProps) => void;
  enteredValues: string[];
  hits: number;
  attempts: number;
};

const Game = ({
  verifiqued,
  setChamp,
  enteredValues,
  hits,
  attempts,
}: GameProps) => {
  const [input, setInput] = useState<string>("");
  const [styleStack, setStyleStack] = useState("block");

  useEffect(() => {
    if (enteredValues.includes(input)) {
      setStyleStack("block");
      setTimeout(() => {
        setStyleStack("none");
      }, 3000);
    }
  }, [verifiqued]);

  return (
    <Box component="div" maxWidth="600px">
      <img className="logo" src={logo} alt="" />

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
        }}
        component="div"
      >
        <img className="play" src={anotation} alt="" />
        <img className="play" src={config} alt="" />
        <img className="play" src={grafics} alt="" />
      </Box>
      <Box
        border="2px solid #af9767"
        component="div"
        marginTop="2rem"
        maxWidth="400px"
        textAlign="center"
        paddingBottom="1rem"
        sx={{
          "@media (max-width: 600px)": {
            width: "80%",
            margin: " 1rem auto",
          },
        }}
      >
        <Typography
          variant="h6"
          color="#fff"
          padding="0.5rem 1rem"
          fontFamily="monospace"
        >
          Adivinhe o campeão de League of Legends!
        </Typography>

        <Box
          component="div"
          display="flex"
          justifyContent="space-evenly"
          marginTop="1rem"
        >
          <Typography
            variant="h6"
            color="#fff"
            padding="0.5rem 1rem"
            fontFamily="monospace"
          >
            Tentativas {attempts}
          </Typography>
          <Typography
            variant="h6"
            color="#fff"
            padding="0.5rem 1rem"
            fontFamily="monospace"
          >
            Acertos
            <Typography
              component="span"
              color="green"
              fontFamily="monospace"
              fontSize="1.3rem"
              marginLeft="0.7rem"
            >
              {hits}
            </Typography>
          </Typography>
        </Box>
      </Box>
      <Box
        component="div"
        display="flex"
        sx={{
          "@media (max-width: 600px)": {
            justifyContent: "center",
          },
        }}
      >
        <Search
          sx={{
            "@media (max-width: 600px)": {
              width: "50%",
            },
          }}
        >
          <InputChamps setInput={setInput} />
        </Search>
        <img
          onClick={() => verifiqued(input)}
          className="play"
          src={play}
          alt=""
          width="58px"
          style={{ marginTop: "0.8rem" }}
        />
      </Box>
      {enteredValues.filter((name, index) => {
        return enteredValues.indexOf(name) !== index;
      }).length > 0 && (
        <Stack display={styleStack} sx={{ width: "90%", mt: 1 }} spacing={0}>
          <Alert variant="outlined" severity="error" sx={{ p: 0 }}>
            Esse nome ja foi digitado!!!
          </Alert>
        </Stack>
      )}

      <ChampionDetails setChamp={setChamp} />
    </Box>
  );
};

export default Game;
