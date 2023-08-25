import React, { useContext } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

import Encabezado from "../../../components/Encabezado";
import preguntas from "../../../data/preguntasAnsiedad";
import RegresarSiguiente from "../../../components/Buttons/RegresarSiguiente";
import { scrollToError } from "../../../functions/StudentsViewFunctions/Functions";
import VistaUserContext from '../../../contexts/VistaUserContext'

import { useForm, Controller } from "react-hook-form";

export default function Ansiedad() {

  let { ansiedad, onSubmitAnsiedad } = useContext(VistaUserContext)

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues: ansiedad });

  const onSubmit = (data) => {
    // Your form submission logic goes here
    onSubmitAnsiedad(data);
  };

  React.useEffect(() => {
    scrollToError();
  }, [errors]);

  return (
    <div className="row">
      <div className="col">
        <form onSubmit={handleSubmit(onSubmit)}>
          <Encabezado />

          <div
            className="col"
            style={{ maxHeight: "600px", overflowY: "auto" }}
          >
            <TableContainer component={Paper} style={{ height: "48vh" }}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>N°</TableCell>
                    <TableCell>Preguntas</TableCell>
                    <TableCell align="right"></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {preguntas.map((pregunta) => (
                    <TableRow key={pregunta.idpregunta}>
                      <TableCell>{pregunta.idpregunta}</TableCell>
                      <TableCell>{pregunta.texto}</TableCell>
                      <TableCell align="right">
                        <FormControl
                          component="fieldset"
                          error={Boolean(errors[pregunta.numeropregunta])}
                        >
                          <Controller
                            name={pregunta.numeropregunta}
                            control={control}
                            defaultValue=""
                            rules={{ required: "Este campo es requerido" }}
                            render={({ field }) => (
                              <RadioGroup row {...field}>
                                <FormControlLabel
                                  value="1"
                                  control={<Radio />}
                                  label="Sí"
                                />
                                <FormControlLabel
                                  value="0"
                                  control={<Radio />}
                                  label="No"
                                />
                              </RadioGroup>
                            )}
                          />
                          {errors[pregunta.numeropregunta] && (
                            <FormLabel className="signalError">
                              {errors[pregunta.numeropregunta].message}
                            </FormLabel>
                          )}
                        </FormControl>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
          <RegresarSiguiente />
        </form>
      </div>
    </div>
  );
}
