import { Box, Button, Typography } from "@mui/material";
type SuccessProps = {
  champName: string;
};
const API_URL = "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/";
const Success = ({ champName }: SuccessProps) => {
  return (
    <Box component="div" sx={{ margin: "auto" }}>
      <Typography variant="h6" textAlign="center">
        Acertouuuuuuu
      </Typography>
      <img
        style={{ display: "block", margin: "auto" }}
        src={`${API_URL}${champName}_0.jpg`}
        width={200}
        height={150}
        alt=""
      />
    </Box>
  );
};

export default Success;
