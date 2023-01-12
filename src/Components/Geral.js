import "./Assets/CSS/Geral.css";
import React, { useState, useEffect } from "react";
import { Table } from "antd";

function Geral() {
  const [dataEntrada, setDataEntrada] = useState([]);
  const [totalEntrada, setTotalEntrada] = useState(0);
  const [dataSaida, setDataSaida] = useState([]);
  const [totalSaida, setTotalSaida] = useState(0);
  const [dataGeral, setDataGeral] = useState([]);
  const [totalGeral, setTotalGeral] = useState(0);
  const [total, setTotal] = useState(0);
  const columns = [    {      title: "ID",      dataIndex: "id",    },    {      title: "Dado",      dataIndex: "dado",    },    {      title: "Nome",      dataIndex: "nome",    },    {      title: "Valor em R$(real)",      dataIndex: "valor",    },    {      title: "Data",      dataIndex: "data",    },  ];

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
        setDataEntrada(newData);
        setTotalEntrada(totalValue);
      })
      .catch((error) => console.error(error));

    fetch("http://localhost:5000/saida")
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
        setDataSaida(newData);
        setTotalSaida(totalValue);
      })
      .catch((error) => console.error(error));

      fetch("http://localhost:5000/geral")
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
        setDataGeral(newData);
        setTotalGeral(totalValue); 
      })
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    setTotal(totalEntrada - totalSaida);
  }, [totalEntrada, totalSaida]);

  const onChange = (pagination, filters, sorter, extra) => {
    console.log("params", pagination, filters, sorter, extra);
  };

  return (
    <div className="Geral">
      <h1 className="titulo">GERAL</h1>
      <Table columns={columns} dataSource={dataGeral} onChange={onChange} />
      <h4 className="total">
        <span>Total:</span> R$ {total.toLocaleString()}
      </h4>
    </div>
  );
}

export default Geral;

