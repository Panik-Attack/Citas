import React, { useReducer } from "react";
import { Input, Checkbox, DatePicker, Form } from "antd";
import { useForm } from "../../../hooks/useForm";
import { todoReducer as citaReducer } from "../../disponibilidad/CitaReducer";
import "antd/dist/antd.css";


const {Item} = Form
const { TextArea } = Input;

export const BasicInfo = () => {
  const [dispatch] = useReducer(citaReducer, []);

  const [
    {
      nombreCita,
      nombreProducto,
      precioProducto,
      description,
      date,
      confirm,
      cancel,
    },
    handleInputChange,
    handleCheckChange,
    reset,
  ] = useForm({
    nombreCita: "",
    nombreProducto: "",
    precioProducto: "",
    description: "",
    date: "",
    confirm: "",
    cancel: "",
  });

  const handleAddCita = (newCita) => {
    dispatch({
      type: "add",
      payload: newCita,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (description.trim().length <= 1) {
      return;
    }

    const newCita = {
      id: new Date().getTime(),
      nombreCita: nombreCita,
      nombreProducto: nombreProducto,
      precioProducto: precioProducto,
      description: description,
      date: date,
      confirm: confirm,
      cancel: cancel,
    };

    handleAddCita(newCita);
    reset();
  };

  const layout={
    labelCol:{
      span: 8,
    },
    wrapperCol:{
      span: 16,
    }
  }
  return (
    <div className="container_form">


      <Form {...layout}>

          <Item label="Nombre de la Cita">
            <Input
              placeholder="ej.. Psiquiatria, Carpineria .."
              type="text"
              name="nombreCita"
              autoComplete="off"
              onChange={handleInputChange}
            />
          </Item>
          <Item label='Descripcion'>
            <TextArea
              placeholder="ej.. Brindamos servicios de ..."
              type="text"
              name="description"
              autoComplete="off"
              onChange={handleInputChange}
            />
          </Item>
          <hr />
          <br/>
          {/* Buttom Section */}
          <Item label='Nombre del Producto'>
            <Input
              placeholder="ej.. Consulta, Mesa de madera ..."
              type="text"
              name="nombreProducto"
              onChange={handleInputChange}
            />
          </Item>

          <Item label='Precio'>
            <Input
              placeholder="$ 100.00 "
              type="number"
              name="precioProducto"
              onChange={handleInputChange}
            />
          </Item>  

          <Item label='Fecha y Hora'>
            <DatePicker
              renderExtraFooter={() => "extra footer"}
              showTime
              name="date"
              // onChange={handleInputChange}
            />
          </Item>

          <Item label='Requiere Confirmacion?'>
            <Checkbox
              name="confirm"
              onChange={handleCheckChange}
            />
          </Item>

          <Item label='Puede Cancelar?'>
            <Checkbox
              name="cancel"
              onChange={handleCheckChange}
            />
          </Item>

      </Form>
    </div>
  );
};
