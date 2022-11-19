import React, { useState } from "react";

import { Input, InputNumber, Checkbox, DatePicker, Form, Button, Radio } from "antd";
import "antd/dist/antd.css";


const {Item} = Form
const { TextArea } = Input;
const {Group} = Radio

export const BasicInfo = ({closeModal, handleAddCita}) => {

  const [form] = Form.useForm()
  
  const [value, setValue] = useState()

  const onChange = (e) =>{
    setValue(e.target.value)
  }

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

    form.resetFields()
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
        form={form}
        {...layout}
        >

          <Item 
              label="Nombre de la Cita"
              name='nombreCita'
              rules={[{
                required: true,
                message: 'Por favor ingresar el nombre de la cita'
                }]}>
              <Input/>
          </Item>

          <Item 
              label='Descripcion'
              name='descripcionCita'
              rules={[{
                required: true,
                message: 'Por favor ingresar la descripcion de la cita'
              }]}>
              <TextArea/>
          </Item>
          <hr />
          <br/>

          <Item 
              label='Nombre del producto'
              name='nombreProducto'
              rules={[{
                required: true,
                message: 'Por favor ingresar el nombre del Producto'
                }]}>
              <Input/>
          </Item>

          <Item 
              label='Precio'
              name='precioProducto'
              rules={[{
                  required: true,
                  message: 'Por favor ingresar el precio del Producto'
                  }]}>
              <InputNumber/>
          </Item>  

          <Item label='Tipo de Producto'>
              <Group onChange={onChange} value={value} name='disponibilidad' defaultValue={1}>
                  <Radio value={1}>Servicio</Radio>
                  <Radio value={2}>Material</Radio>
              </Group>
          </Item>

          <Item 
              label='Disponibilidad'
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
          <Button onClick={closeModal} type='primary' htmlType="submit">Agregar</Button>

      </Form>
    </div>
  );
};
