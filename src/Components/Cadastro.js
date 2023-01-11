import "./Assets/CSS/Cadastro.css";
import React, { useState } from "react";
import { Button, DatePicker, Form, Input, Select } from "antd";
import locale from "antd/es/date-picker/locale/pt_BR";

function Cadastro() {
  const [tipoDado, setTipoDado] = useState("");
  const [nome, setNome] = useState("");
  const [valor, setValor] = useState(0);
  const [data, setData] = useState("");

  const [componentSize, setComponentSize] = useState("default");
  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };

  const [form] = Form.useForm();

  const getData = document.getElementById('data');

   const onFinish = async (values) => {
    await fetch("http://localhost:5000/cadastro", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        tipoDado: values.tipoDado,
        nome: values.nome,
        valor: values.valor,
        data: getData.value,
      }),
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const hasErrors = false;

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
          tipoDado: "",
          nome: "",
          valor: "",
          data: "",
        }}
        onValuesChange={onFormLayoutChange}
        size={componentSize}
        className={hasErrors ? "ant-form-item-ant-form-item-has-error" : ""}
      >
        <Form.Item
          label="Tipo de dado"
          name="tipoDado"
          rules={[
            { required: true, message: "Por favor selecione um tipo de dado!" },
          ]}
        >
          <Select value={tipoDado} onChange={(value) => setTipoDado(value)}>
            <Select.Option value="Entrada">Entrada</Select.Option>
            <Select.Option value="Saída">Saída</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item
          label="Nome"
          name="nome"
          rules={[{ required: true, message: "Por favor insira um nome!" }]}
        >
          <Input
            value={nome}
            onChange={(event) => setNome(event.target.value)}
          />
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
            value={valor}
            onChange={(event) => setValor(event.target.value)}
          />
        </Form.Item>
        <Form.Item
          label="Data"
          name="data"
          rules={[{ required: true, message: "Por favor insira uma data!" }]}
        >
          <DatePicker
            className="data"
            format={"DD-MM-YYYY"}
            locale={locale}
            value={data}
            onChange={(value) => setData(value)}
            id="data"
          />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" disabled={hasErrors}>
            Cadastrar
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default Cadastro;
