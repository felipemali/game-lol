import { TextField, Autocomplete, Box } from "@mui/material/";
import { GetChamps } from "../../../api";
import { GetNameChamps, nameChampsProps } from "../../../hooks";
import "./index.css";
import img from "../../../assets/play1.png";

type InputChampsProps = {
  setInput: (arg: string) => void;
};
const API_URL = "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/";

const InputChamps = ({ setInput }: InputChampsProps) => {
  const champs = GetChamps();
  const nameChamps = GetNameChamps(champs);

  const handleChampChange = (event: any, value: nameChampsProps | null) => {
    if (value) {
      const selectedOption = nameChamps.find(
        (option) => option.label === value.label
      );
      if (selectedOption) {
        setInput(value.label);
      }
    }
  };

  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={GetNameChamps(champs)}
      sx={{
        width: "100%",
        outline: 0,
      }}
      renderOption={(props, option) => (
        <Box
          component="li"
          sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
          {...props}
        >
          <img
            loading="lazy"
            width="60"
            src={`${API_URL}${option.label}_0.jpg`}
            style={{ borderRadius: "3px" }}
            alt="splash art dos campeões"
          />
          {option.label}
        </Box>
      )}
      renderInput={(params) => <TextField {...params} label="Campeão" />}
      onChange={handleChampChange}
    />
  );
};

export default InputChamps;
