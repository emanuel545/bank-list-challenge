"use client";

const BankList = ({ banks, removeBank }) => (
  <ul className="bank-list">
    {banks.map((bank, index) => (
      <li key={index} className="bank-item">
        <h2>{bank.bankName}</h2>
        <p>{bank.description}</p>
        <p>Edad: {bank.age}</p>
        <a href={bank.url} target="_blank" rel="Img">Visitar</a>
        <button onClick={() => removeBank(index)}>Eliminar</button>
      </li>
    ))}
  </ul>
);

export default BankList;