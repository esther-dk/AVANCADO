import React from 'react';

class TarefaApp extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         titulo: '',
         status: 'no prazo',
         tarefas: [],
      };
   }

   handleChangeTitulo = (event) => {
      this.setState({ titulo: event.target.value });
   };

   handleChangeStatus = (event) => {
      this.setState({ status: event.target.value });
   };

   adicionarTarefa = () => {
      const { titulo, status, tarefas } = this.state;

      if (titulo.trim() === '') {
         alert('O campo de título não pode estar vazio!');
         return;
      }

      const novaTarefa = {
         titulo,
         status,
         id: tarefas.length + 1,
      };

      this.setState({
         tarefas: [...tarefas, novaTarefa],
         titulo: '',
         status: 'no prazo',
      });
   };

   render() {
      const { titulo, status, tarefas } = this.state;

      return (
         <div style={{ textAlign: 'center', width: '100%' }}>
            <h1>Lista de Tarefas</h1>

            <div style={{ marginBottom: '20px' }}>
               <label>
                  <strong>Título da Tarefa:</strong>
                  <input
                     type="text"
                     value={titulo}
                     onChange={this.handleChangeTitulo}

                  />
               </label>
            </div>

            <div style={{ marginBottom: '20px' }}>
               <label>
                  <strong>Status da Tarefa:</strong>
                  <select
                     value={status}
                     onChange={this.handleChangeStatus}
                     style={{
                        backgroundColor: '#282A36',
                        color: 'white',
                     }}
                  >
                     <option value="atrasada">Atrasada</option>
                     <option value="no prazo">No Prazo</option>
                     <option value="próximo ao prazo">Próximo ao Prazo</option>
                  </select>
               </label>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
               <button
                  onClick={this.adicionarTarefa}

               >
                  Adicionar Tarefa
               </button>
            </div>


            <ul style={{ margin: '20px auto', maxWidth: '300px' }}>
               {tarefas.map((tarefa) => (
                  <li
                     key={tarefa.id}

                  >
                     <b>Título: </b>{tarefa.titulo} , <b>Status: </b>{tarefa.status}
                  </li>
               ))}
            </ul>
         </div>
      );
   }
}

export default function App() {
   return (
      <div
         style={{
            backgroundColor: '#282A36',
            minHeight: '100vh',
            padding: '20px',
            color: 'white',
            display: 'flex',

            justifyContent: 'center',
            alignItems: 'center',
         }}
      >
         <TarefaApp />
      </div>
   );
}
