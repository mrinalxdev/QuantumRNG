import { Box, useTheme } from "@mui/material";

const gridTemplate = `
    "a b c"
    "a b c"
    "a b c"
    "a b f"
    "d e f"
    "d e f"
    "d g i"
    "g h i"
    "g h j"
    "g h j"




`

const Dashboard = () => {
  const { palette } = useTheme();
  return (
    <Box
      width="100%"
      height="100%"
      display="grid"
      gap="1.5rem"
      sx={{
        gridTemplateColumns : "repeat(3, minmax(370px, 1fr))",
        gridTemplateAreas: gridTemplate,
      }}
    ></Box>
  );
};

export default Dashboard;
