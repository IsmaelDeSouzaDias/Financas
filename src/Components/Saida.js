import "./Assets/CSS/Saida.css";
import React from "react";
import { Table } from "antd";

function Saida() {
  const columns = [
    {
      title: "ID",
      dataIndex: "id",
    },
    {
      title: "Dado",
      dataIndex: "dado",
    },
    {
      title: "Nome",
      dataIndex: "nome",
    },
    {
      title: "Valor em R$(real)",
      dataIndex: "valor",
    },
    {
      title: "Data",
      dataIndex: "data",
    },
  ];
  const data = [
    {
      id: "2",
      dado: "Saída",
      nome: "Faculdade",
      valor: "400,00",
      data: "05-01-2023",
    },
  ];
  const onChange = (pagination, filters, sorter, extra) => {
    console.log("params", pagination, filters, sorter, extra);
  };

  return (
    <div className="Saida">
      <Table columns={columns} dataSource={data} onChange={onChange} />
      <h4 className="total">
        <span>Total:</span> R$ 400,00
      </h4>
    </div>
  );
}

export default Saida;
