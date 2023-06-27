import { useState } from "react";
import { Link } from "react-router-dom";
import { Box, Typography, useTheme } from "@mui/material";
import FlexBetween from "@/components/FlexBetween";
import PixIcon from "@mui/icons-material/Pix";

const Navbar = () => {
  const { palette } = useTheme();
  const [selected, setSelected] = useState("dashboard");

  return (
    <FlexBetween mb="0.25rem" p="0.5rem 0rem" color={palette.grey[300]}>
      <FlexBetween gap="0.75rem">
        <PixIcon sx={{ fontSize: "32px" }} />
        <Typography variant="h4" fontSize="16px">
          ProfiTrackr
        </Typography>
      </FlexBetween>

      <FlexBetween gap="2rem">
        <Box sx={{ "&:hover": { color: palette.primary[100] } }}>
          <Link to="/" onClick={() => setSelected("dashboard")} style={{
            color : selected === 'dashboard' ? 'inherit' : palette.grey[700],
            textDecoration : 'inherit'
          }}>
            Dashboard
          </Link>
        </Box>
        <Box sx={{ "&:hover": { color: palette.primary[100] } }}>
          <Link to="/predictions" onClick={() => setSelected("prediction")} style={{
            color : selected === 'predictions' ? 'inherit' : palette.grey[700],
            textDecoration : 'inherit'
          }}>
            Predictions
          </Link>
        </Box>
      </FlexBetween>
    </FlexBetween>
  );
};

export default Navbar;
