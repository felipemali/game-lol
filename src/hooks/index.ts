import { useEffect, useState } from "react";
import { GetChamps } from "../api";
import { ChampsProps } from "../api/type";

export type nameChampsProps = {
  label: string;
  year: number;
};

export const GetRandomChamp = (refresh: boolean) => {
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
  }, [champs, refresh]);

  return champ;
};

export const GetNameChamps = (champs: ChampsProps[]) => {
  const [nameChamps, setNameChamps] = useState<nameChampsProps[]>([]);

  useEffect(() => {
    const newChamps = champs.map((e: any, index: number) => {
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

  useEffect(() => {
    if (champs.length > 0) {
      setNameChamps([]);
    }
  }, [champs.length]);

  return nameChamps;
};
