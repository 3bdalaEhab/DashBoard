import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { grey } from '@mui/material/colors';
import { useTheme } from "@emotion/react";
import { Avatar, Tooltip, Typography, styled } from '@mui/material';
import { ArticleOutlined, BarChartOutlined, CalendarTodayOutlined, ContactsOutlined, HelpOutlineOutlined, HomeOutlined, MapOutlined, PersonOutlineOutlined, PieChartOutlined, SupervisorAccountOutlined, TimelineOutlined } from '@mui/icons-material';
import { useLocation, useNavigate } from 'react-router-dom';
export default function SaidBar({handleDrawerClose ,open}) {
  const navigate = useNavigate()
  const {pathname} = useLocation()
  const theme = useTheme();
  const drawerWidth = 240;

  const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
      width: drawerWidth,
      flexShrink: 0,
      whiteSpace: 'nowrap',
      boxSizing: 'border-box',
      ...(open && {
        ...openedMixin(theme),
        '& .MuiDrawer-paper': openedMixin(theme),
      }),
      ...(!open && {
        ...closedMixin(theme),
        '& .MuiDrawer-paper': closedMixin(theme),
      }),
    }),
  );
  const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
  });
  
  const closedMixin = (theme) => ({
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
      width: `calc(${theme.spacing(8)} + 1px)`,
    },
  });
  const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  }));
 let Array1 =[
    {"text":"Dashboard","path":"/","icon":<HomeOutlined/>},
    {"text":"Manage","path":"/Manage","icon":<SupervisorAccountOutlined/>},
    {"text":"Contacts Information","path":"/Contacts","icon":<ContactsOutlined/>},
    {"text":"Invoices Balances","path":"/Invoices","icon":<ArticleOutlined/>}
  ]
 let Array2 =[
    {"text":"Profile Form","path":"/ProfileForm","icon":<PersonOutlineOutlined/>},
    {"text":"Calendar","path":"/Calendar","icon":<CalendarTodayOutlined/>},
    {"text":"FAQ Page","path":"/FAQPage","icon":<HelpOutlineOutlined/>},
  ]
 let Array3 =[
    {"text":"Bar Chart","path":"/BarChart","icon":<BarChartOutlined/>},
    {"text":"Ple Chart","path":"/PleChart","icon":<PieChartOutlined/>},
    {"text":"Line Chart","path":"/LineChart","icon":<TimelineOutlined/>},
    {"text":"Geography Based","path":"/GeographyBased","icon":<MapOutlined/>},
  ]
  
  return <>
  
  <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />


        <Avatar sx={{  border:"2px solid gray", mb:1, mx:"auto" ,width:open ?100:55,height:open?100:55 , mt:2}}  alt="Remy Sharp" src="../../../src/assets/Abdala.png" />
      {open?<>
      
      
      
        <Typography  align='center'>Abdala Ehab</Typography>
        <Typography sx={{fontWeight:"600" ,mb:1,color: theme.palette.info.main }} align='center'>Admin</Typography>

      </>:""}


        <Divider />
        <List>
          {Array1.map((item) => (
            <ListItem key={item.text} disablePadding sx={{ display: 'block' }}>
              <ListItemButton
              onClick={()=>{
                navigate(item.path)
              }}
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                  background:pathname===item.path?theme.palette.mode==="dark"?grey[800]:grey[400]:""
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  <Tooltip title={open?null:item.text}>
  <IconButton>
                  {item.icon}
  </IconButton>
</Tooltip>
                </ListItemIcon>

                <ListItemText primary={item.text} sx={{ opacity: open ? 1 : 0 }} />

              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />

        <List>
          {Array2.map((item) => (
            <ListItem key={item.text} disablePadding sx={{ display: 'block' }}>
              <ListItemButton
              onClick={()=>{
                navigate(item.path)
              }}
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                  background:pathname===item.path?theme.palette.mode==="dark"?grey[800]:grey[400]:""

                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
               <Tooltip title={open?null:item.text}>
  <IconButton>
                  {item.icon}
  </IconButton>
</Tooltip>                </ListItemIcon>
                <ListItemText primary={item.text} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />

        <List>
          {Array3.map((item) => (
            <ListItem key={item.text} disablePadding sx={{ display: 'block' }}>
              <ListItemButton
              onClick={()=>{
                navigate(item.path)
              }}
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                  background:pathname===item.path?theme.palette.mode==="dark"?grey[800]:grey[400]:""

                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
               <Tooltip title={open?null:item.text}>
  <IconButton>
                  {item.icon}
  </IconButton>
</Tooltip>                </ListItemIcon>
                <ListItemText primary={item.text} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
  
  </>
}
