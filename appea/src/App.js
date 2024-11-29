import React from 'react';

class ClockClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = { arrayclique: [], total: 0 };
  }

  click = () => {
    this.setState((prevState) => ({
      total: prevState.total + 1,
      arrayclique: [
        ...prevState.arrayclique,
        new Date().toLocaleTimeString('en-US', { hour12: true }),
      ],
    }));
  };

  render() {
    return (
      <div style={{ textAlign: 'center', color: 'white' }}>
        <h1>Registros de Cliques</h1>
        <button onClick={this.click}>Clique aqui</button>
        <p>Total De Cliques: {this.state.total}</p>
        <ul>
          {this.state.arrayclique.map((item, index) => (
            <li key={index}>{item}</li>
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
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#282c34',
      }}
    >
      <ClockClass />
    </div>
  );
}
