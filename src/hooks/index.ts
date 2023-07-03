import { useEffect, useState } from "react";
import { GetChamps } from "../api";
import { ChampsProps } from "../api/type";

type nameChampsProps = {
  label: string;
  year: number;
};

export const GetRandomChamp = () => {
  const [champ, setChamp] = useState<ChampsProps>({
    name: "",
    position: "",
    class: "",
    partype: "",
  });
  const champs = GetChamps();
  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * champs.length);
    const randomObject = champs[randomIndex];

    setChamp(randomObject);
    console.log(randomObject);
  }, [champs]);

  return champ;
};

export const GetNameChamps = (champs: any) => {
  const [nameChamps, setNameChamps] = useState<nameChampsProps[]>([]);

  useEffect(() => {
    const newChamps = champs.map((e: any, index: number) => {
      console.log(e.name);
      return {
        year: e.id || index,
        label: e.name,
      };
    });
    setNameChamps((prevChamps: nameChampsProps[]) => [
      ...prevChamps,
      ...newChamps,
    ]);
  }, [champs]);
  console.log(nameChamps);
  return nameChamps;
};
