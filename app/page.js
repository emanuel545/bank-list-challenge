"use client"; 
import { useState, useEffect } from 'react';
import axios from 'axios';
import useStore from './utils/useStore';
import BankList from './components/BankList';
import SearchBar from './components/SearchBar';
import './globals.css';

const IndexPage = () => {
    const { banks, setBanks, removeBank, searchBanks, sortBanks } =
    useStore();
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchBanks = async () => {
      try {
        const response = await axios.get(
          "https://dev.obtenmas.com/catom/api/challenge/banks"
        );
        setBanks(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchBanks();
  }, [setBanks]);

  const handleSearch = (searchTerm) => {
    setSearchTerm(searchTerm);
    searchBanks(searchTerm);
  };

  return (
    <div className="container">
      <h1>Lista de Bancos</h1>
      <SearchBar
        searchTerm={searchTerm}
        handleSearch={handleSearch}
        sortBanks={sortBanks}
      />
      <BankList banks={banks} removeBank={removeBank} />
    </div>
  );
};
export default IndexPage;