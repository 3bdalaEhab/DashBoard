import {  Stack, useTheme } from "@mui/material";
import Card from "./Card";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import { data1, data2, data3, data4 } from "./Data";
export default function Row1() {
    const theme = useTheme()
  return <>
  <Stack flexWrap={"wrap"} justifyContent={{xs:"center" , sm:"space-between"}} direction={"row"} gap={1}>

   <Card data={data1} icon={<EmailIcon  sx={{color:theme.palette.secondary.main}} />} title={"Emails Sent"} subTitle={"12,656"} scheme={"nivo"} increase={"+14%"} />
   <Card data={data2} icon={<PointOfSaleIcon sx={{color:theme.palette.secondary.main}} />} title={"Sales obtained"} subTitle={"436,565"} scheme={"accent"} increase={"+21%"} />
   <Card data={data3} icon={<PersonAddIcon sx={{color:theme.palette.secondary.main}} />} title={"New Clients"} subTitle={"35,452"} scheme={"category10"} increase={"+5%"} />
   <Card data={data4} icon={<TrafficIcon sx={{color:theme.palette.secondary.main}} />} title={"Traffic Received"} subTitle={"1,325,154"} scheme={"set2"} increase={"+43"} />
 
  
  </Stack>
  
  
  </>
}
