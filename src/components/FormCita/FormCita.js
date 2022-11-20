import React, { useState } from "react";
import { Input, InputNumber, Checkbox, DatePicker, Form, Button, Radio } from "antd";

import './formCita.scss'
import "antd/dist/antd.css";


const { Item } = Form
const { TextArea } = Input;
const { Group } = Radio

export const FormCita = ({ closeModal, handleAddCita }) => {

  const [form] = Form.useForm()

  const [value, setValue] = useState()

  const onChange = (e) => {
    setValue(e.target.value)
  }

  const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    }
  }

  const formSuccess = (datos) => {

    const newCita = {
      id: new Date().getTime(),
      done: false,
      ...datos
    }

    handleAddCita(newCita)

    form.resetFields()

    closeModal()
  }

  const formFailed = (error) => {

    console.log(error)

  }

  return (
    <div>
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
          <Input
            placeholder="Psiquiatria, Carpinteria"
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
            placeholder="Ofrecemos Servicios de ..."

          />
        </Item>
        <hr />
        <br />

        <Item
          label='Nombre del producto'
          name='nombreProducto'
          rules={[{
            required: true,
            message: 'Por favor ingresar el nombre del Producto'
          }]}>
          <Input
            placeholder="Consulta medica, Mesa de madera ..."

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
            placeholder="$150.00"

          />
        </Item>

        <Item label='Tipo de Producto'>
          <Group onChange={onChange} value={value} name='disponibilidad' defaultValue={1}>
            <Radio value={1}>Servicio</Radio>
            <Radio value={2}>Material</Radio>
          </Group>
        </Item>

        {
        (value === 1
          ?
          <Item
              label='Disponibilidad'
              name="date"
          >
            <DatePicker />
          </Item>
          :
          <Item
              label='Disponibilidad'
              name='cantidadProducto'
          >
          <InputNumber
            placeholder="1, 2, 3, ..."
          />
          </Item>
            )
        }
        

        <Item name='confirm' valuePropName="checked">
          <Checkbox>Requiere Confirmacion?</Checkbox>
        </Item>

        <Item name='cancel' valuePropName="checked">
          <Checkbox>Puede Cancelar?</Checkbox>
        </Item>

        <br />
        <div className="btnContainer">  
          <Button onClick={closeModal} danger>Cancelar</Button>
          <Button type='primary' htmlType="submit">Agregar</Button>
        </div>   
      </Form>
    </div>
  );
};