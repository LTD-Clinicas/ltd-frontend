"use client" 

import React, { useState, useEffect } from 'react';

interface Item {
  nome: string;
  descricao: string;
}

const App: React.FC = () => {
  const [nome, setNome] = useState('');
  const [descricao, setDescricao] = useState('');
  const [dados, setDados] = useState<Item[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState<Item[]>([]);

  // Funçao validar campo antes de registrar
  const validarCampos = (): string => {
    return nome && descricao;
  };

  // Funçao registrar novo item
  const handleCadastrar = () => {
    if (validarCampos()) {
      const novoItem: Item = { nome, descricao };
      setDados([...dados, novoItem]);
      setNome('');
      setDescricao('');
    } else {
      alert('Preencha todos os campos!');
    }
  };

  // Funçao de pesquisa
  const handleSearch = () => {
    const nomeConsulta = searchTerm.toLowerCase();
    const dadosFiltrados: Item[] = dados.filter((item) =>
      item.nome.toLowerCase().includes(nomeConsulta)
    );
    setSearchResults(dadosFiltrados);
  };

  // Funçao limpar pesquisa
  const clearSearchResults = () => {
    setSearchTerm('');
    setSearchResults([]);
  };

  // Carregar dados iniciais (exemplo de dados de exemplo)
  useEffect(() => {
    const dadosIniciais: Item[] = [
      { nome: 'Exemplo 1', descricao: 'Descrição do Exemplo 1' },
      { nome: 'Exemplo 2', descricao: 'Descrição do Exemplo 2' },
      // ... Add more items here
    ];
    setDados(dadosIniciais);
  }, []);

  return (
    <div>
      <h1>Cadastro de Clinicas</h1>

      <form>
        <label>Nome:</label>
        <input
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />

        <label>Descrição:</label>
        <textarea
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
        />

        <button type="button" onClick={handleCadastrar}>
          Cadastrar
        </button>
      </form>

      <div>
        <input
          type="text"
          placeholder="Digite o nome para consulta"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={handleSearch}>Consultar</button>
        <button onClick={clearSearchResults}>Limpar</button>

        {searchResults.length > 0 && (
          <ul>
            {searchResults.map((item) => (
              <li key={item.nome}>
                <h2>{item.nome}</h2>
                <p>{item.descricao}</p>
              </li>
            ))}
          </ul>
        )}
      </div>

      <ul>
        {dados.map((item) => (
          <li key={item.nome}>
            <h2>{item.nome}</h2>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
