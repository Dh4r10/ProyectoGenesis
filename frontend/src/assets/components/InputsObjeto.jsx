import React from "react";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { Controller } from "react-hook-form";
import TextField from "@mui/material/TextField";

function DatosPersonalesObjetos({title, name, errors, type, control}) {
  return (
    <div className={name} data-aos="zoom-in" style={{ textAlign: "left" }}>
      <FormControl variant="outlined" error={!!errors}>
        <FormLabel component="legend" style={{ paddingLeft: "4%" }}>{title}</FormLabel>
        <Controller
          name={name}
          control={control}
          defaultValue=""
          rules={{ required: "Este campo es requerido" }}
          render={({ field }) => (
            <TextField
              {...field}
              variant="outlined"
              type={type}
              error={!!errors}
              helperText={errors ? errors.message : null}
              style={{ width: "240px" }}
            />
          )}
        />
      </FormControl>
    </div>
  );
}

export default DatosPersonalesObjetos;
