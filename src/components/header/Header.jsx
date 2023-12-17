import { Box, Typography, useTheme } from "@mui/material";

export default function Header({ title , subTitle }) {
  const theme = useTheme();
  return (
    <>
      <Box sx={{mb:1}} >
        <Typography
          sx={{ color: theme.palette.info.light, fontWeight: "bold" }}
          variant="h4"
        >
          {title}
        </Typography>
        <Typography
          variant="body2"
        >
          {subTitle}
        </Typography>
      </Box>
    </>
  );
}
