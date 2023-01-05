import "./Assets/CSS/Cadastro.css";
import React, { useState } from "react";
import { Button, DatePicker, Form, Input, Select } from "antd";
import locale from "antd/es/date-picker/locale/pt_BR";

function Cadastro() {
  const [componentSize, setComponentSize] = useState("default");
  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };

  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const errors = form.getFieldsError();
  const hasErrors = Object.keys(errors).some((field) => errors[field]);

  return (
    <div className="Cadastro">
      <h1 className="tituloPainel">PAINEL DE CONTROLE</h1>
      <Form
        form={form}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
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
        className={hasErrors ? "ant-form-item-has-error" : ""}
      >
        <Form.Item
          label="Tipo de dado"
          name="tipoDado"
          rules={[
            { required: true, message: "Por favor selecione um tipo de dado!" },
          ]}
        >
          <Select>
            <Select.Option value="entrada">Entrada</Select.Option>
            <Select.Option value="Saída">Saída</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item
          label="Nome"
          name="nome"
          rules={[{ required: true, message: "Por favor insira um nome!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Valor R$"
          name="valor"
          rules={[{ required: true, message: "Por favor insira um valor!" }]}
        >
          <Input
            type="number"
            min="0"
            step="0.01"
            placeholder="Valor em R$(real)"
          />
        </Form.Item>
        <Form.Item
          label="Data"
          name="data"
          rules={[{ required: true, message: "Por favor insira uma data!" }]}
        >
          <DatePicker className="data" format={"DD-MM-YYYY"} locale={locale} />
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            onClick={() => form.validateFields()}
            className="cadastrar"
          >
            Cadastrar
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default Cadastro;
