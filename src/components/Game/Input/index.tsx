import { TextField, Autocomplete } from "@mui/material/";
import { GetChamps } from "../../../api";
import { GetNameChamps } from "../../../hooks";
import "./index.css";
type InputChampsProps = {
  setInput: (arg: string) => void;
};
const InputChamps = ({ setInput }: InputChampsProps) => {
  const champs = GetChamps();

  const handleChampChange = (event: any, value: any) => {
    if (value) {
      setInput(value.label);
      console.log(value.label);
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
      renderInput={(params) => <TextField {...params} label="Campeão" />}
      onChange={handleChampChange}
    />
  );
};

export default InputChamps;
