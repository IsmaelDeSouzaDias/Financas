import "./Assets/CSS/Geral.css";
import React, { useState, useEffect } from "react";
import { Table } from "antd";

function Geral() {
  const [data, setData] = useState([]);
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

  useEffect(() => {
    fetch("http://localhost:5000/geral")
    .then(response => response.json())
    .then(res => {
      let newData = []
      for (let i = 0; i < res.length; i++) {
        const dataAPI = 
          {
            id: res[i].id,
            dado: res[i].tipoDado,
            nome: res[i].nome,
            valor: res[i].valor,
            data: res[i].data,
          }
          newData.push(dataAPI)
      }
      setData(newData)
    })
    .catch(error => console.error(error));
  }, []);

  const onChange = (pagination, filters, sorter, extra) => {
    console.log("params", pagination, filters, sorter, extra);
  };

  return (
    <div className="Geral">
      <h1 className="titulo">GERAL</h1>
      <Table columns={columns} dataSource={data} onChange={onChange} />
      <h4 className="total">
        <span>Total:</span> R$ 1760,00
      </h4>
    </div>
  );
}

export default Geral;