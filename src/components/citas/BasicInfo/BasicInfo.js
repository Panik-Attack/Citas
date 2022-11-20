import React from "react";
// import React, { useEffect, useReducer } from "react";
import { Input, InputNumber, Checkbox, DatePicker, Form, Button } from "antd";
// import { useForm } from "../../../hooks/useForm";
// import { citaReducer } from "../../disponibilidad/CitaReducer";
import "antd/dist/antd.css";


const {Item} = Form
const { TextArea } = Input;

// const init = () =>{
//   return JSON.parse(localStorage.getItem('todos'))|| []
// }

export const BasicInfo = ({closeModal, handleAddCita}) => {
  // const [citas, dispatch] = useReducer(citaReducer, [], init);

  // useEffect(() => {
  //   localStorage.setItem('citas', JSON.stringify( citas ))
  // }, [citas])

  // const [
  //   {
  //     nombreCita,
  //     nombreProducto,
  //     precioProducto,
  //     description,
  //     date,
  //     confirm,
  //     cancel,
  //   },
  //   reset,
  // ] = useForm({
  //   nombreCita: "",
  //   nombreProducto: "",
  //   precioProducto: "",
  //   description: "",
  //   date: "",
  //   confirm: "",
  //   cancel: "",
  // });

  // const handleAddCita = (newCita) => {

  //   dispatch({
  //     type: "add",
  //     payload: newCita,
  //   });

  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   if (description.trim().length <= 1) {
  //     return;
  //   }

  //   const newCita = {
  //     id: new Date().getTime(),
  //     nombreCita: nombreCita,
  //     nombreProducto: nombreProducto,
  //     precioProducto: precioProducto,
  //     description: description,
  //     date: date,
  //     confirm: confirm,
  //     cancel: cancel,
  //   };

  //   handleAddCita(newCita);
  //   reset();
  // };

  const layout={
    labelCol:{
      span: 8,
    },
    wrapperCol:{
      span: 16,
    }
  }

  const formSuccess=(datos)=>{
    console.log('Formulario enviado',datos)

    const newCita = {
      id: new Date().getTime(),
      done: false,
      ...datos
    }

    console.log(newCita.id)

    handleAddCita(newCita)

  }
  
  const formFailed = (error) =>{
    console.log('Error', error)
  }

  return (
    <div className="container_form">
      <Form
        name="formulario" 
        initialValues={{
          confirm: true,
          cancel: true
        }}
        onFinish={formSuccess}
        onFinishFailed={formFailed} 
        {...layout}
        >

          <Item 
              label="Nombre de la Cita"
              name='nombreCita'
              rules={[{
                required: true,
                message: 'Por favor ingresar el nombre de la cita'
                }]}>
              <Input
              placeholder="ej.. Psiquiatria, Carpinteria"
              />
          </Item>

          <Item 
              label='Descripcion'
              name='descripcionCita'
              rules={[{
                required: true,
                message: 'Por favor ingresar la descripcion de la cita'
              }]}>
              <TextArea
              placeholder="ej... Ofrecemos Servicios de ..."

              />
          </Item>
          <hr />
          <br/>
          {/* Buttom Section */}

          <Item 
              label='Nombre del producto'
              name='nombreProducto'
              rules={[{
                required: true,
                message: 'Por favor ingresar el nombre del Producto'
                }]}>
              <Input
                 placeholder="ej... Consulta medica, Mesa de madera ..."

              />
          </Item>

          <Item 
              label='Precio'
              name='precioProducto'
              rules={[{
                  required: true,
                  message: 'Por favor ingresar el precio del Producto'
                  }]}>
              <InputNumber
                 placeholder="ej..$150.00"

              />
          </Item>  

          <Item 
              label='Fecha y Hora'
              name="date"
              >
              <DatePicker/>
          </Item>

          <Item name='confirm' valuePropName="checked">
            <Checkbox>Requiere Confirmacion?</Checkbox>
          </Item>

          <Item name='cancel' valuePropName="checked">
            <Checkbox>Puede Cancelar?</Checkbox>
          </Item>

          <hr/>     
          <br/>   

          <Button onClick={closeModal}>Cancelar</Button>
          <Button type='primary' htmlType="submit">Agregar</Button>

      </Form>
    </div>
  );
};
