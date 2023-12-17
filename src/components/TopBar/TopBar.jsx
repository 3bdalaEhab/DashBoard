import { Box, IconButton, Stack, Toolbar, styled, useTheme } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import MuiAppBar from "@mui/material/AppBar";
import MenuIcon from "@mui/icons-material/Menu";
import InputBase from "@mui/material/InputBase";
import "./TopBar.module.css";
import { Brightness2Outlined, LightModeOutlined, NotificationsOutlined, PersonOutline, SettingsOutlined } from "@mui/icons-material";

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));
// ... (your imports)

const SearchContainer = styled("div")(({ theme }) => ({
  border: `1px solid ${theme.palette.primary.main}`,
  borderRadius: theme.shape.borderRadius,
  display: "flex",
  
  alignItems: "center",

}));

const TopBar = ({ handleDrawerOpen, open ,setMode}) => {
  const theme = useTheme()
  return (
    <>
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton>
          
          <SearchContainer style={{background: "rgb(50, 50, 60,0.4)"}}>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </SearchContainer>
            <Box flexGrow={1}/>

            <Stack   direction={"row"}>
            {theme.palette.mode ==="light" ?
            
          
            <IconButton onClick={()=>{
              localStorage.setItem("currentMode",theme.palette.mode ==="dark"?"light":"dark")
               setMode((prevMode) =>
          prevMode === 'light' ? 'dark' : 'light',
        );
            }} color="inherit">
            <LightModeOutlined />
              </IconButton>

          :
          
    <IconButton onClick={()=>{
      localStorage.setItem("currentMode",theme.palette.mode ==="light"?"dark":"light")
       setMode((prevMode) =>
          prevMode === 'light' ? 'dark' : 'light',
        );
    }} color="inherit">
    <Brightness2Outlined />
      </IconButton>
              }


              <IconButton  color="inherit">
            <NotificationsOutlined />
              </IconButton>
              <IconButton  color="inherit">
            <SettingsOutlined />
              </IconButton>
              <IconButton  color="inherit">
            <PersonOutline />
              </IconButton>
            


            </Stack>


        </Toolbar>
      </AppBar>
    </>
  );
};

export default TopBar;
