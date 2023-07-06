import axios from "axios";
import { useEffect, useState } from "react";
import { Teste, ChampsProps } from "./type";

const API_URL =
  "https://ddragon.leagueoflegends.com/cdn/13.13.1/data/pt_BR/champion.json";

export const GetChamps = () => {
  const [champs, setChamps] = useState<ChampsProps[]>([]);

  useEffect(() => {
    axios.get(API_URL).then((response) => {
      const data = response.data.data;
      const champArray = Object.values(data);

      const result = champArray.map((anime: any) => {
        return {
          name: anime.name,
          class:
            anime.tags[0] === "Fighter"
              ? "Lutador"
              : anime.tags[0] === "Marksman"
              ? "Atirador"
              : anime.tags[0] === "Mage"
              ? "Mago"
              : anime.tags[0] === "Support"
              ? "Suporte"
              : anime.tags[0] === "Marksman"
              ? "Atirador"
              : anime.tags[0] === "Assassin"
              ? "Assassino"
              : anime.tags[0] === "Tank"
              ? "Tanque"
              : anime.tags[0],
          position:
            anime.tags[1] === "Fighter"
              ? "Lutador"
              : anime.tags[1] === "Marksman"
              ? "Atirador"
              : anime.tags[1] === "Mage"
              ? "Mago"
              : anime.tags[1] === "Support"
              ? "Suporte"
              : anime.tags[1] === "Marksman"
              ? "Atirador"
              : anime.tags[1] === "Assassin"
              ? "Assassino"
              : anime.tags[1] === "Tank"
              ? "Tanque"
              : anime.tags[1],
          partype: anime.partype,
        };
      });

      setChamps(result);
    });
  }, []);
  return champs;
};
