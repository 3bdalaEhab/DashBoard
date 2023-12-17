import { Box, Typography, useTheme } from "@mui/material";

export default function NotFound() {
  const theme = useTheme()

  return (<Box sx={{textAlign:"center " , mt:15}}>
  
  
    <Typography sx={{fontWeight:700, fontSize:"2rem", color:theme.palette.error.main}}>There is no design yat  </Typography>

    <Typography sx={{fontWeight:700, fontSize:"2rem", color:theme.palette.error.main}}>Please try again later...  </Typography>
  </Box>
  )
}
