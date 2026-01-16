import React, { createContext, useState, useContext } from 'react';

// Definindo o formato de um agendamento
export interface Agendamento {
  id: string;
  tipo: string;
  data: string;
  hora: string;
  modalidade: string;
  campus: string;
}

type AgendamentosContextType = {
  lista: Agendamento[];
  adicionarAgendamento: (novo: Agendamento) => void;
  excluirAgendamento: (id: string) => void;
};

const AgendamentosContext = createContext<AgendamentosContextType | undefined>(undefined);

export const AgendamentosProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lista, setLista] = useState<Agendamento[]>([
    { id: '1', tipo: 'Psicologia', data: '20/05/2024', hora: '14:00', modalidade: 'Presencial', campus: 'Campus Central' },
  ]);

  const adicionarAgendamento = (novo: Agendamento) => {
    setLista((prev) => [novo, ...prev]); // Adiciona o novo no topo da lista
  };

  const excluirAgendamento = (id: string) => {
    setLista((prev) => prev.filter(item => item.id !== id));
  };

  return (
    <AgendamentosContext.Provider value={{ lista, adicionarAgendamento, excluirAgendamento }}>
      {children}
    </AgendamentosContext.Provider>
  );
};

export const useAgendamentos = () => {
  const context = useContext(AgendamentosContext);
  if (!context) throw new Error('useAgendamentos deve ser usado dentro de um AgendamentosProvider');
  return context;
};