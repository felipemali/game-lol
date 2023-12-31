import logo from "../../assets/logo.webp";
import anotation from "../../assets/anotation.png";
import config from "../../assets/config.png";
import grafics from "../../assets/grafics.png";
import play from "../../assets/play1.png";
import { Search } from "./style";
import { Box, Button, Typography } from "@mui/material";
import ChampionDetails from "../ChampionDetails";
import { ChampsProps } from "../../api/type";
import { useEffect, useState } from "react";
import InputChamps from "./Input";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import "./index.css";
import { verifiqued } from "./verifications";
import { GetRandomChamp } from "../../hooks";
import Success from "../Success";

export type GameProps = {
  setChamp: (value: ChampsProps) => void;
  enteredValues: string[];
  hits: number;
  totalAttempts: number;
  champ: ChampsProps;
  setHits: (hits: (arg: number) => number) => void;
  setTotalAttempts: (attempts: (arg: number) => number) => void;
  setEnteredValues: (enteredValues: string[]) => void;
  attempts: number;
  setAttempts: (
    atemptt: (arg: number) => number
  ) => void | ((arg: number) => number);
};

const Game = ({
  setChamp,
  enteredValues,
  hits,
  totalAttempts,
  champ,
  setHits,
  setTotalAttempts,
  setEnteredValues,
  attempts,
  setAttempts,
}: GameProps) => {
  const [input, setInput] = useState<string>("");
  const [displayStack, setDisplayStack] = useState("block");
  const [statusHit, setStatusHit] = useState(false);
  const [refresh, setRefresh] = useState(false);
  const nextChamp = () => {
    console.log("caiu no next");
    setChamp({
      name: "",
      class: "",
      position: "",
      partype: "",
    });

    setStatusHit(false);
    setRefresh(!refresh);
  };

  const verificationChamp =
    input.toLocaleLowerCase() === champ?.name.toLocaleLowerCase();
  const sendData = () => {
    if (enteredValues.includes(input)) {
      setDisplayStack("block");
      setTimeout(() => {
        setDisplayStack("none");
      }, 3000);
    }
    verifiqued({
      input,
      enteredValues,
      champ,
      setTotalAttempts,
      totalAttempts,
      setHits,
      hits,
      setEnteredValues,
      setAttempts,
      setStatusHit,
    });

    // statusHit ? setStatusHit(false) : setStatusHit(true);
  };

  return (
    <Box component="div" maxWidth="600px">
      <img className="logo" src={logo} alt="logo" />

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
        }}
        component="div"
      >
        <img className="play" src={anotation} alt="anotation" />
        <img className="play" src={config} alt="config" />
        <img className="play" src={grafics} alt="grafics" />
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
            Tentativas {totalAttempts}
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
          onClick={sendData}
          className="play"
          src={play}
          alt="play"
          width="58px"
          style={{ marginTop: "0.8rem" }}
        />
      </Box>
      {enteredValues.filter((name, index) => {
        return enteredValues.indexOf(name) !== index;
      }).length > 0 ? (
        <Stack display={displayStack} sx={{ width: "90%", mt: 1 }} spacing={0}>
          <Alert variant="outlined" severity="error" sx={{ p: 0 }}>
            Esse nome ja foi digitado!!!
          </Alert>
        </Stack>
      ) : null}

      {attempts > 0 && (
        <Typography
          color="#fff"
          variant="body1"
          margin="3rem 0 0 3rem"
          sx={{
            display: verificationChamp ? "none" : "inline-block",
          }}
        >
          Poderá pular daqui{" "}
          <Typography component="span" color="green">
            {attempts}
          </Typography>{" "}
          tentativas
        </Typography>
      )}

      {attempts === 0 && (
        <Button
          onClick={() => {
            nextChamp();
            setAttempts((oldNum) => 10);
          }}
          color="success"
          variant="outlined"
          sx={{
            margin: "2rem 0 0 5rem",
          }}
        >
          Próximo
        </Button>
      )}
      <ChampionDetails setChamp={setChamp} refresh={refresh} />
      {statusHit && verificationChamp ? (
        <>
          <Box component="div" style={{ color: "#fff" }}>
            <Success champName={champ.name} />
            <Button
              onClick={nextChamp}
              color="success"
              variant="outlined"
              sx={{ display: "block", margin: " 2rem auto" }}
            >
              Próximo
            </Button>
          </Box>
        </>
      ) : null}
    </Box>
  );
};

export default Game;
