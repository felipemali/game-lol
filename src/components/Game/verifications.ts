import { GameProps } from ".";
import { useEffect, useState } from "react";
import { ChampsProps } from "../../api/type";

type VerifiquedProps = {
  input: string;
  enteredValues: string[];
  setTotalAttempts: (attempts: (arg: number) => number) => void;
  setHits: (hits: (arg: number) => number) => void;
  setEnteredValues: (enteredValues: string[]) => void;
  champ: ChampsProps;
  hits: number;
  totalAttempts: number;
  setAttempts: (
    atemptt: (arg: number) => number
  ) => void | ((arg: number) => number);
  setStatusHit: (arg: boolean) => void;
};

export const verifiqued = ({
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
}: VerifiquedProps) => {
  if (enteredValues.includes(input)) {
    console.log("esse nome ja foi digitado");
  } else if (input.toLocaleLowerCase() === champ?.name.toLocaleLowerCase()) {
    console.log("acertou");
    setTotalAttempts((oldNum: number) => oldNum + 1);
    setHits((oldNum: number) => oldNum + 1);
    setStatusHit(true);
    localStorage.setItem("attempts", JSON.stringify(totalAttempts + 1));
    localStorage.setItem("hits", JSON.stringify(hits + 1));
  } else {
    console.log("errou");
    setAttempts((oldNum) => (oldNum === 0 ? 0 : oldNum - 1));
    setTotalAttempts((oldNum: number) => oldNum + 1);
    localStorage.setItem("attempts", JSON.stringify(totalAttempts + 1));
  }
  setEnteredValues([...enteredValues, input]);
};
// localStorage.setItem(
//   "favorites",
//   JSON.stringify([...favorites, newAnime])
// );
