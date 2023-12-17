import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { Box,  } from "@mui/material";
import { columns, rows } from "../data/data/contacts";
import Header from "../header/Header";

const Invoices = () => {
  return (
  

      <Box sx={{ height: "75vh", width: "99%", mx: "auto" }}>

<Header title={"Invoices"} subTitle={"List fo invoice Balances"}/>

        <DataGrid slots={{  toolbar: GridToolbar, }}
          checkboxSelection
          disableRowSelectionOnClick
          rows={rows}
          columns={columns}
        />
      </Box>
  );
};

export default Invoices;
