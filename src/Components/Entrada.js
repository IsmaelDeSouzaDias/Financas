import "./Assets/CSS/Entrada.css";
import React, { useState, useEffect } from "react";
import { Table } from "antd";

function Entrada() {
  const [data, setData] = useState([]);
  const [total, setTotal] = useState(0);
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
    fetch("http://localhost:5000/entrada")
      .then((response) => response.json())
      .then((res) => {
        let newData = [];
        let totalValue = 0; 
        for (let i = 0; i < res.length; i++) {
          const dataAPI = {
            id: res[i].id,
            dado: res[i].tipoDado,
            nome: res[i].nome,
            valor: res[i].valor,
            data: res[i].data,
          };
          newData.push(dataAPI);
          totalValue += parseFloat(res[i].valor); 
        }
        setData(newData);
        setTotal(totalValue);
      })
      .catch((error) => console.error(error));
  }, []);

  const onChange = (pagination, filters, sorter, extra) => {
    console.log("params", pagination, filters, sorter, extra);
  };

  return (
    <div className="Entrada">
      <h1 className="titulo">ENTRADA</h1>
      <Table columns={columns} dataSource={data} onChange={onChange} />
      <h4 className="total">
        <span>Total:</span> R$ {total.toLocaleString()}
      </h4>
    </div>
  );
}

export default Entrada;
