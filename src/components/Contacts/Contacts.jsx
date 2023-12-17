import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { Box,  } from "@mui/material";
import { columns, rows } from "../data/data/contacts";
import Header from "../header/Header";

const Contacts = () => {
  return (
  

      <Box sx={{ height: "75vh", width: "99%", mx: "auto" }}>
          <Header title={"Contacts"} subTitle={"List of Contacts for Future Reference"}/>

        <DataGrid slots={{  toolbar: GridToolbar, }}
          rows={rows}
          columns={columns}
        />
      </Box>
  );
};

export default Contacts;
