import { Alert, Box, Button,  Snackbar, Stack, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../header/Header";
const regEmail =
/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const phoneRegExp =
/^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

export default function ProfileForm() {
  const navigate = useNavigate()
  const [open, setOpen] = React.useState(false);
 



  const handleClick = () => {
    setOpen(true);
  };


  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);

  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) =>{
    console.log(data);
    handleClick()
    setTimeout(()=>{

      navigate("/Calendar")
    },4000)
  }
  const currencies = [
    {
      value: "User",
      label: "User",
    },
    {
      value: "Admin",
      label: "Admin",
    },
    {
      value: "Manger",
      label: "Manger",
    },
  ];
  return (
    <>

      <Box
        onSubmit={handleSubmit(onSubmit)}
        component="form"
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 4,
          margin: "auto",
          width: "80%",
          mt: 10,
        }}
        noValidate
        autoComplete="off"
      >
              <Header title={"Profile Form"} subTitle={"Create a New User Profile"}/>

          <Snackbar
        anchorOrigin={{ vertical:"top", horizontal:"right" }}
        open={open} autoHideDuration={3000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="info" sx={{ width: "100%" }}>
          This is a success message!
        </Alert>
      </Snackbar>
    
        <Stack gap={2} direction={"row"}>
          <TextField
            helperText={
              errors.FirstName ? "This is Filed required & min 3 character" : null
            }
            error={errors.FirstName}
            {...register("FirstName", {
              required: true,
              minLength: 3,
              maxLength: 25,
            })}
            sx={{ flex: 1 }}
            label="First Name"
            variant="filled"
          />
          <TextField
            helperText={errors.LastName ? "This is Filed required & min 3 character" : null}
            error={errors.LastName}
            {...register("LastName", {
              required: true,
              minLength: 3,
              maxLength: 25,
            })}
            sx={{ flex: 1 }}
            label="Last Name"
            variant="filled"
          />
        </Stack>
        <TextField
          helperText={errors.Email ? "Please a valid email address" : null}
          error={errors.Email}
          {...register("Email", { required: true, pattern: regEmail })}
          label="Email"
          variant="filled"
        />
        <TextField
          error={errors.ContactNumber}
          helperText={errors.ContactNumber ? "Please a valid Phone Number" : null}
          {...register("ContactNumber", {
            required: true,
            pattern: phoneRegExp,
          })}
          label="Contact Number"
          variant="filled"
        />
        <TextField
          helperText={errors.Address1 ? "Please a valid Address" : null}
          error={errors.Address1}
          {...register("Address1", { required: true, min: 10 })}
          label="Address 1"
          variant="filled"
        />
        <TextField label="Address 2" variant="filled" />
        <TextField
          id="outlined-select-currency-native"
          select
          label="Role"
          defaultValue="EUR"
          SelectProps={{
            native: true,
          }}
        >
          {currencies.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </TextField>
        <Box sx={{ textAlign: "end" }}>
          <Button  type="submit" variant="contained">
            {" "}
            Create New User
          </Button>
        </Box>


        
      </Box>
    
     
    </>
  );
}
