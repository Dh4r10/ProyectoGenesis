import React, { useContext, useState } from "react";
import "../../../styles/vistaUsuario.css"
import Select from '@mui/material/Select'
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { MenuItem } from "@mui/material";

import { useForm, Controller } from "react-hook-form";

import InputsObjeto from "../../../components/InputsObjeto";
import SelectObjeto from '../../../components/SelectsObjeto'

import Encabezado from "../../../components/Encabezado";
import Siguiente from "../../../components/Buttons/Siguiente";
import { _facultad } from '../../../data/facultades'
import { _sexo, _estadoCivil, _beneficios, _gradoInstruccion, _viveCon } from '../../../data/datosPersonalesSelect'

import VistaUserContext from '../../../contexts/VistaUserContext'

export default function FormDatosPersonales() {

  let { datosPersonales, onSubmitDatosPersonales, facu, setFacu } = useContext(VistaUserContext)

  const {
    control,
    handleSubmit: guardarDatosPersonales,
    formState: { errors },
  } = useForm({
    defaultValues: datosPersonales,
  });

  const handleChange = (e, field) => {
    field.onChange(e.target.value)
    setFacu(e.target.value)
  }

  const _datosPersonales = Object.values(datosPersonales)
  console.log(_datosPersonales)

  console.log("MMMM", facu)

  return (
    <div className="row">
      <div className="col">
        <form id="datosPerForm" onSubmit={guardarDatosPersonales(onSubmitDatosPersonales)}>
          <Encabezado />

          <div className="row overflow-auto" style={{ marginTop: "2%" }}>
            <div className="col">
              <div className="cardInputs col d-flex flex-wrap gap-5 mb-3 justify-content-center rounded shadow-sm">
                {/* Nombre Completo */}
                <InputsObjeto
                  title="Nombre completo:"
                  name="nombre"
                  errors={errors.nombre}
                  type="text"
                  control={control}
                />

                {/* Sexo */}
                <SelectObjeto
                  title="Sexo:"
                  name="sexo"
                  errors={errors.sexo}
                  _data={_sexo}
                  control={control}
                />

                {/* Estado Civil */}
                <SelectObjeto
                  title="Estado civil:"
                  name="estadocivil"
                  errors={errors.estadocivil}
                  _data={_estadoCivil}
                  control={control}
                />

                {/* Fecha de nacimiento */}
                <InputsObjeto
                  title="Fecha de nacimiento:"
                  name="fechanacimiento"
                  errors={errors.fechanacimiento}
                  type="date"
                  control={control}
                />

                {/* Beneficios */}
                <SelectObjeto
                  title="Beneficios:"
                  name="beneficios"
                  errors={errors.beneficios}
                  _data={_beneficios}
                  control={control}
                />

                {/* Codigo */}
                <InputsObjeto
                  title="Código:"
                  name="codigo"
                  errors={errors.codigo}
                  type="number"
                  control={control}
                />

                {/* Grado de instrucción */}
                <SelectObjeto
                  title="Grado de instrucción:"
                  name="gradoinstruccion"
                  errors={errors.gradoinstruccion}
                  _data={_gradoInstruccion}
                  control={control}
                />

                {/* Ocupación */}
                <InputsObjeto
                  title="Ocupación:"
                  name="ocupacion"
                  errors={errors.ocupacion}
                  type="text"
                  control={control}
                />

                {/* Año de ingreso */}
                <InputsObjeto
                  title="Año de ingreso:"
                  name="anodeingreso"
                  errors={errors.anodeingreso}
                  type="number"
                  control={control}
                />

                {/* Facultad */}
                <div
                  className="col-2 d-flex justify-content-center"
                  style={{ width: "240px", textAlign: "left" }}
                  data-aos="zoom-in"
                >
                  <FormControl component="fieldset" style={{
                    width: "100%",
                  }}
                    error={!!errors.facultad}>
                    <FormLabel component="legend" style={{ paddingLeft: "4%" }}>Facultad:</FormLabel>
                    <Controller

                      name="facultad"
                      control={control}
                      defaultValue=""
                      rules={{ required: "Este campo es requerido" }}
                      error={!!errors.facultad}
                      render={({ field }) => (
                        <Select
                          {...field}
                          aria-label="facultad"
                          onChange={(e) => handleChange(e, field)}
                        >
                          {_facultad.map((_facultad) => (
                            <MenuItem key={_facultad.id} value={_facultad.value} style={{
                              fontSize: "14.5px"
                            }}>{_facultad.text}</MenuItem>
                          ))}
                        </Select>
                      )}
                    />
                    {errors.facultad && <span className="error" style={{ color: "#C94040", fontSize: "13px", marginLeft: "12px" }}>{errors.facultad.message}</span>}
                  </FormControl>
                </div>

                {/* Escuela */}
                <div
                  className="col-2 d-flex justify-content-center"
                  style={{ width: "240px", textAlign: "left" }}
                  data-aos="zoom-in"
                >
                  <FormControl component="fieldset" style={{
                    width: "100%",
                  }}
                    error={!!errors.escuela}>
                    <FormLabel component="legend" style={{ paddingLeft: "4%" }}>Escuela:</FormLabel>
                    <Controller

                      name="escuela"
                      control={control}
                      defaultValue=""
                      rules={{ required: "Este campo es requerido" }}
                      error={!!errors.escuela}
                      render={({ field }) => (
                        <Select
                          {...field}
                          aria-label="escuela"
                        >

                          {(facu == "") ?
                            (
                              <div className=" d-flex justify-content-center">
                                <p style={{ fontSize: "14.5px", position: "relative", top: 8 }}>Por favor seleccione una facultad</p>
                              </div>
                            ) :
                            (
                              _facultad.map((facultad) => (
                                (facu == facultad.value) &&
                                (_facultad[facultad.id - 1].escuelas.map((escuela) => (
                                  <MenuItem
                                    key={escuela.id}
                                    value={escuela.value}
                                    style={{ fontSize: "15px" }}
                                  >
                                    {escuela.text}
                                  </MenuItem>
                                )
                                ))
                              ))
                            )
                          }

                        </Select>
                      )}
                    />
                    {errors.escuela && <span className="error" style={{ color: "#C94040", fontSize: "13px", marginLeft: "12px" }}>{errors.escuela.message}</span>}
                  </FormControl>
                </div>

                {/* Dirección */}
                <InputsObjeto
                  title="Dirección:"
                  name="direccionactual"
                  errors={errors.direccionactual}
                  type="text"
                  control={control}
                />

                {/* Teléfono */}
                <InputsObjeto
                  title="Teléfono:"
                  name="numerocel"
                  errors={errors.numerocel}
                  type="text"
                  control={control}
                />

                {/* Vive con */}
                <SelectObjeto
                  title="Vive con:"
                  name="vivecon"
                  errors={errors.vivecon}
                  _data={_viveCon}
                  control={control}
                />

                {/* Número de Hermanos */}
                <InputsObjeto
                  title="Número de hermanos:"
                  name="numerohermanos"
                  errors={errors.numerohermanos}
                  type="number"
                  control={control}
                />

                {/* Familiar responsable */}
                <InputsObjeto
                  title="Nombre del apoderado:"
                  name="familiarresponsable"
                  errors={errors.familiarresponsable}
                  type="text"
                  control={control}
                />

                {/* Número Celular Responsable */}
                <InputsObjeto
                  title="Teléfono del apoderado:"
                  name="numerocelresponsable"
                  errors={errors.numerocelresponsable}
                  type="text"
                  control={control}
                />

                {/* Religión */}
                <InputsObjeto
                  title="Religión:"
                  name="religion"
                  errors={errors.religion}
                  type="text"
                  control={control}
                />

              </div>
            </div>
            <Siguiente />
          </div>
        </form>
      </div>
    </div>
  );
}
