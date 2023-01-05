import "./Assets/CSS/Cadastro.css";
import React, { useState } from "react";
import { Button, DatePicker, Form, Input, Select } from "antd";
import locale from "antd/es/date-picker/locale/pt_BR";

function Cadastro() {
  const [componentSize, setComponentSize] = useState("default");
  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };

  return (
    <div className="Cadastro">
      <h1 className="tituloPainel">PAINEL DE CONTROLE</h1>
      <Form
        labelCol={{
          span: 5,
        }}
        wrapperCol={{
          span: 14,
        }}
        initialValues={{
          size: componentSize,
        }}
        onValuesChange={onFormLayoutChange}
        size={componentSize}
      >
        <Form.Item label="Tipo de dado">
          <Select>
            <Select.Option value="entrada">Entrada</Select.Option>
            <Select.Option value="Saída">Saída</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="Nome">
          <Input />
        </Form.Item>
        <Form.Item label="Valor R$">
          <Input
            type="number"
            min="0"
            step="0.01"
            placeholder="Valor em R$(real)"
          />
        </Form.Item>
        <Form.Item label="Data">
          <DatePicker className="data" format={"DD-MM-YYYY"} locale={locale} />
        </Form.Item>
        <Form.Item>
          <Button>Cadastrar</Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default Cadastro;
