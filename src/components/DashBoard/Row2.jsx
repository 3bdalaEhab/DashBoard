import { Box, Button, Paper, Stack, Typography, useTheme } from "@mui/material";
import Line from "../LineChart/Line";
import { DownloadOutlined } from "@mui/icons-material";
import { Transactions } from "./Data";

export default function Row2() {
    const theme  = useTheme()
  return <>
  <Stack m={"10px 0"} gap={1} flexWrap={"wrap"} justifyContent={"space-between"} direction={"row"}>
<Paper  sx={{p:2 ,width:"65vw",flexGrow:1}}>
  <Stack direction={"row"} justifyContent={"space-between"}>
    <Box>
    <Typography  sx={{color:theme.palette.secondary.main}} variant="h6" gutterBottom>
Recent Transactions      </Typography>
<Typography variant="body2" gutterBottom>
$65,6445,52      </Typography>
    </Box>
    <Box >
          <Button
            sx={{ padding: "6px 8px", textTransform: "capitalize" }}
            variant="contained"
            color="secondary"
          >
            <DownloadOutlined />
          </Button>
        </Box>
  </Stack>
    <Line isDahboard={true}/>
</Paper>


<Box flexGrow={1} sx={{overflow:"auto" ,minWidth:"250px" , height:"400px"}}>
<Paper sx={{padding:"8px 16px"}}>
<Typography  sx={{color:theme.palette.secondary.main}}  variant="h6" gutterBottom>
Recent Transactions      </Typography>
</Paper>





{Transactions.map((item,index)=><>
    <Paper  key={index} sx={{my:1, padding:"8px 16px"}}>
    <Stack direction={"row"} justifyContent={"space-between"}>
<Box>
<Typography    variant="body1" gutterBottom>{item.txId}     </Typography>
<Typography    variant="body2" gutterBottom>{item.user}      </Typography>

</Box>
<Box>
<Typography    variant="body2" gutterBottom> {item.date}      </Typography>

   
</Box>

<Box>
<Button
            sx={{ padding: "6px 8px", textTransform: "capitalize" }}
            variant="contained"
            color="error"
          >
            ${item.cost}
          </Button>
</Box>
    </Stack>
</Paper>
</>)}




</Box>



  </Stack>
  
  
  </>
}
