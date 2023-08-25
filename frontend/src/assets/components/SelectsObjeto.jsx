import React from "react";
import "../styles/vistaUsuario.css"
import Select from '@mui/material/Select'
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

import { Controller } from "react-hook-form";
import { MenuItem } from "@mui/material";

const SelectsObjetos = ({ title, name, errors, _data, control }) => {
    return (
        <div
            className="col-2 d-flex justify-content-center"
            style={{ width: "240px", textAlign: "left" }}
            data-aos="zoom-in"
        >
            <FormControl component="fieldset" style={{
                width: "100%",
            }}
                error={!!errors}>
                <FormLabel component="legend" style={{ paddingLeft: "4%" }}>{title}</FormLabel>
                <Controller

                    name={name}
                    control={control}
                    defaultValue=""
                    rules={{ required: "Este campo es requerido" }}
                    error={!!errors}
                    render={({ field }) => (
                        <Select
                            {...field}
                            aria-label={name}
                        >
                            {_data.map((_data) => (
                                <MenuItem key={_data.id} value={_data.value} style={{
                                    fontSize: "14px"
                                }}>{_data.text}</MenuItem>
                            ))}
                        </Select>
                    )}
                />
                {errors && <span className="error" style={{ color: "#C94040", fontSize: "13px", marginLeft: "12px" }}>{errors.message}</span>}
            </FormControl>
        </div>
    )
}

export default SelectsObjetos