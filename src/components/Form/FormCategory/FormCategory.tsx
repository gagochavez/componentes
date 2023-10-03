import { useState, useEffect, useMemo } from "react";

import { Box, FormControl, TextField, Typography } from "@mui/material";
import { Button } from "../../../utils/Button/Button";
import { colorresCSS } from "../../../utils/CustomTheme/variables";
import { cyan } from "@mui/material/colors";

import {
  valTitle,
  valColor,
  valDescription,
  valCodeSegurity,
} from "../validacion";
import { TableCategory } from "./TableCategory";

import { helpHttp } from "../../../Services/helpers/helpHttp";
import { Categories } from "../../../models/dbModels";
import { v4 as uuidv4 } from "uuid";
import { Message } from "../../../utils/Message";

export const FormCategory = () => {
  const initialForm: Categories = useMemo(
    () => ({
      id: null,
      name: "",
      color: "#2cbed1",
      description: "",
      user: "",
      code: "",
    }),
    []
  );

  const [form, setForm] = useState(initialForm);
  const [toEdit, setToEdit] = useState<null | Categories>(null);
  const [db, setDb] = useState<Categories[] | null>(null);

  const [title, setTitle] = useState("");
  const [color, setColor] = useState("#cccccc");
  const [description, setDescription] = useState("");
  const [securityCode, setSecurityCode] = useState("");

  const [errorTitle, setErrorTitle] = useState<null | boolean>(null);
  const [errorColor, setErrorColor] = useState<null | boolean>(null);
  const [errorDescription, setErrorDescription] = useState<null | boolean>(
    null
  );
  const [errorSecurityCode, setErrorSecurityCode] = useState<null | boolean>(
    null
  );
  const [message, setMessage] = useState(false);

  const url = "https://6508a0ba56db83a34d9c94b4.mockapi.io/categories";
  const api = useMemo(() => helpHttp(), []);

  useEffect(() => {
    helpHttp()
      .get(url)
      .then((res) => {
        if (!res.err) {
          setDb(res);
        } else {
          setDb(null);
        }
      });
  }, []);

  useEffect(() => {
    if (toEdit) {
      setForm(toEdit);
    } else setForm(initialForm);
  }, [initialForm, toEdit]);

  useEffect(() => {
    if (toEdit) {
      setTitle(toEdit?.name);
      setColor(toEdit?.color);
      setDescription(toEdit?.description);
      setSecurityCode(toEdit?.code);
    }
  }, [toEdit]);

  const createData = (data: Categories) => {
    data.id = uuidv4();
    api
      .post(url, {
        body: JSON.stringify(data),
        headers: { "content-type": "application/json" },
      })
      .then((res) => {
        if (!res.err) {
          if (db) setDb([...db, res]);
        }
      });
  };

  const updateData = (data: Categories) => {
    const endPoint = `${url}/${data.id}`;
    api
      .put(endPoint, {
        body: JSON.stringify(data),
        headers: { "content-type": "application/json" },
      })
      .then((res) => {
        if (!res.err) {
          const newData = db?.map((el) => (el.id === data.id ? data : el));
          newData && setDb(newData);
        }
      })
      .finally(() => handleClear());
  };
  const deleteData = (id: number | null | string) => {
    api
      .del(`${url}/${id}`, {
        headers: { "content-type": "application/json" },
      })
      .then((res) => {
        if (!res.err) {
          const newData = db?.filter((el) => el.id !== id);
          newData && setDb(newData);
        }
      });
  };

  const handleChange = (
    evento: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    seter: React.Dispatch<React.SetStateAction<string>>
  ) => {
    const value = evento.target.value;
    setForm({ ...form, [evento.target.name]: value });
    seter(value);
  };

  const handleClear = () => {
    setTitle("");
    setColor("#f5f5f5");
    setDescription("");
    setSecurityCode("");
    setForm(initialForm);
    setToEdit(null);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (errorTitle && errorColor && errorDescription && errorSecurityCode) {
      if (form.id === null) createData(form);
      else updateData(form);
      setMessage(false);
    } else setMessage(true);
  };

  const personalData = [
    {
      label: "TItulo",
      variant: "outlined",
      type: "text",
      name: "name",
      valid: errorTitle,
      value: title,
      helperText: "completa el campo, debe tener al menos 2 caracteres.",
      onchange: handleChange,
      validator: valTitle,
      seter: setTitle,
      setValid: setErrorTitle,
    },
    {
      label: "Color",
      variant: "outlined",
      type: "color",
      name: "color",
      valid: errorColor,
      value: color,
      helperText: "Elija un color.",
      onchange: handleChange,
      validator: valColor,
      seter: setColor,
      setValid: setErrorColor,
    },
    {
      label: "Descripcion",
      variant: "outlined",
      name: "description",
      type: "text",
      multiline: true,
      valid: errorDescription,
      value: description,
      helperText: "completa el campo, debe contener menos de 300 caracteres.",
      onchange: handleChange,
      validator: valDescription,
      seter: setDescription,
      setValid: setErrorDescription,
    },
    {
      label: "Codigo de Seguridad",
      variant: "outlined",
      type: "text",
      name: "code",
      valid: errorSecurityCode,
      value: securityCode,
      helperText: "introduzca un codigo de 5 degitos.",
      onchange: handleChange,
      validator: valCodeSegurity,
      seter: setSecurityCode,
      setValid: setErrorSecurityCode,
    },
  ];

  return (
    <div
      style={{
        minHeight: "85vh",
        backgroundColor: `${colorresCSS.gray.gray_three}`,
      }}
    >
      <Box
        component={"form"}
        autoComplete="off"
        onSubmit={(e) => handleSubmit(e)}
      >
        <Typography
          variant="h3"
          fontWeight={400}
          component="h2"
          color={cyan[400]}
          textAlign={"center"}
          paddingTop={3}
        >
          {toEdit === null ? "Nueva" : "Editar"} Categoria
        </Typography>
        <FormControl
          fullWidth
          sx={{
            alignItems: "center",
            padding: "2rem 0",
            display: "flex",
            flexDirection: "column",
            gap: "1.2rem",
          }}
        >
          {personalData.map((data) => {
            const {
              name,
              label,
              type,
              multiline,
              helperText,
              valid,
              value,
              onchange,
              validator,
              seter,
              setValid,
            } = data;
            return (
              <TextField
                key={name}
                name={name}
                sx={{ width: "60%" }}
                multiline={multiline ? true : false}
                label={label}
                value={value}
                variant={"filled"}
                type={type}
                error={valid === false}
                helperText={valid === false && helperText}
                onChange={(e) => {
                  onchange(e, seter);
                }}
                onBlur={(e) => {
                  const valor = e.target.value;
                  const valido = validator(valor);
                  setValid(valido);
                }}
              />
            );
          })}
        </FormControl>

        {message && (
          <Message data="Error al enviar el formulario, intentelo de nuevo" />
        )}
        <FormControl
          fullWidth
          sx={{
            paddingBottom: "2rem",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            gap: ".7rem",
          }}
        >
          <Button
            typeButton="submit"
            content="Guardar"
            color={colorresCSS.primary}
            padding="1rem 2rem"
          />
          <div onClick={() => handleClear()}>
            <Button
              typeButton="button"
              content="Limpiar"
              color={colorresCSS.gray.gray_one}
              padding="1rem 2rem"
            />
          </div>
        </FormControl>
      </Box>
      {db && window.screen.width >= 768 && (
        <TableCategory
          dataDb={db}
          setToEdit={setToEdit}
          deleteData={deleteData}
        />
      )}
    </div>
  );
};
