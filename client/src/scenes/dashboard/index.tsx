import { Box, useMediaQuery, useTheme } from "@mui/material";

const gridTemplateLargeScreens = `
    "a b c"
    "a b c"
    "a b c"
    "a b f"
    "d e f"
    "d e f"
    "d h i"
    "g h i"
    "g h j"
    "g h j"
`;

const gridTemplateSmallScreens = `
"a"
"a"
"a"
"a"
"b"
"b"
"b"
"b"
"c"
"c"
"c"
"d"
"d"
"d"
"e"
"e"
"f"
"f"
"f"
"g"
"g"
"g"
"h"
"h"
"h"
"h"
"i"
"i"
"j"
"j"
`;

const Dashboard = () => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1200px)");
  const { palette } = useTheme();
  return (
    <Box
      width="100%"
      height="100%"
      display="grid"
      gap="1.5rem"
      sx={ 
        isAboveMediumScreens ?  {
        gridTemplateColumns: "repeat(3, minmax(370px, 1fr))",
        gridTemplateRows: "repeat(10, minmax(60px, 1fr))",
        gridTemplateAreas: gridTemplateLargeScreens,
      } : {
        gridAutoColumns: "1fr",
        gridAutoRows: "80px",
        gridTemplateAreas : gridTemplateSmallScreens,
      }
    }
    >
      <Box gridArea="a" bgcolor="#fff">
        Hello
      </Box>
      <Box gridArea="b" bgcolor="#fff">
        Hello
      </Box>
      <Box gridArea="c" bgcolor="#fff">
        Hello
      </Box>
      <Box gridArea="d" bgcolor="#fff">
        Hello
      </Box>
      <Box gridArea="e" bgcolor="#fff">
        Hello
      </Box>
      <Box gridArea="f" bgcolor="#fff">
        Hello
      </Box>
      <Box gridArea="g" bgcolor="#fff">
        Hello
      </Box>
      <Box gridArea="h" bgcolor="#fff">
        Hello
      </Box>
      <Box gridArea="i" bgcolor="#fff">
        Hello
      </Box>
      <Box gridArea="j" bgcolor="#fff">
        Hello
      </Box>
    </Box>
  );
};

export default Dashboard;
