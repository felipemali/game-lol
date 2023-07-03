import { Box, Typography } from "@mui/material";
import { GetRandomChamp } from "../../hooks";
import { ChampsProps } from "../../api/type";
const style = () => {
  return {
    color: "#fff",
    textDecoration: "underline",
    fontSize: "1.3rem",
    fontFamily: "monospace",
    paddingBottom: "2rem",
  };
};
const styleTd = () => {
  return {
    padding: "1rem 0 1rem 0",
    fontSize: "1.2rem",
    color: "#fff",
    border: "1px solid #fff",
  };
};
type ChampionshipsProps = {
  setChamp: (value: ChampsProps) => void;
};

const ChampionDetails = ({ setChamp }: ChampionshipsProps) => {
  const champ = GetRandomChamp();
  setChamp(champ);

  return (
    <Box
      component="div"
      marginTop="2rem"
      sx={{
        "@media (max-width: 600px)": {
          width: "80%",
          margin: "1.4rem auto",
        },
      }}
    >
      <table style={{ width: "100%" }}>
        <thead>
          <tr style={style()}>
            <th>Recurso</th>
            <th>Categoria</th>
          </tr>
        </thead>
        <tbody>
          <tr
            style={{
              textAlign: "center",
            }}
          >
            <td style={styleTd()}>{champ?.partype}</td>
            <td style={styleTd()}>
              {`${champ?.position ? champ?.position : "?"} / ${
                champ?.class ? champ?.class : "?"
              }`}
            </td>
          </tr>
        </tbody>
      </table>
    </Box>
  );
};

export default ChampionDetails;
