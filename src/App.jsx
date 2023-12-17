import * as React from "react";
import { ThemeProvider, createTheme, styled } from "@mui/material/styles";
import Box from "@mui/material/Box";

import CssBaseline from "@mui/material/CssBaseline";
import TopBar from "./components/TopBar/TopBar";
import SaidBar from "./components/SaidBar/SaidBar";
import { getDesignTokens } from "./theme";
import { Outlet } from "react-router-dom";

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

export default function MiniDrawer() {
  
  const [mode, setMode] = React.useState((localStorage.getItem("currentMode"))||"light");
  const [open, setOpen] = React.useState(false);
 
  

  
  
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);
  return (
    <ThemeProvider theme={theme}>

    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <TopBar setMode={setMode} open={open} handleDrawerOpen={handleDrawerOpen} />

      <SaidBar open={open} handleDrawerClose={handleDrawerClose} />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
       <Outlet/>
      </Box>
    </Box>
    </ThemeProvider>
  );
}
