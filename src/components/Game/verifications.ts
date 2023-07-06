import { GameProps } from ".";
import { useEffect, useState } from "react";
import { ChampsProps } from "../../api/type";

type VerifiquedProps = {
  input: string;
  enteredValues: string[];
  setAttempts: (attempts: (arg: number) => number) => void;
  setHits: (hits: (arg: number) => number) => void;
  setEnteredValues: (enteredValues: string[]) => void;
  champ: ChampsProps;
  hits: number;
  attempts: number;
};

export const verifiqued = ({
  input,
  enteredValues,
  champ,
  setAttempts,
  attempts,
  setHits,
  hits,
  setEnteredValues,
}: VerifiquedProps) => {
  if (enteredValues.includes(input)) {
    console.log("esse nome ja foi digitado");
  } else if (input.toLocaleLowerCase() === champ?.name.toLocaleLowerCase()) {
    console.log("acertou");
    setAttempts((oldNum: number) => oldNum + 1);
    setHits((oldNum: number) => oldNum + 1);
    localStorage.setItem("attempts", JSON.stringify(attempts + 1));
    localStorage.setItem("hits", JSON.stringify(hits + 1));
  } else {
    console.log("errou");
    setAttempts((oldNum: number) => oldNum + 1);
    localStorage.setItem("attempts", JSON.stringify(attempts + 1));
  }
  setEnteredValues([...enteredValues, input]);
};
// localStorage.setItem(
//   "favorites",
//   JSON.stringify([...favorites, newAnime])
// );
