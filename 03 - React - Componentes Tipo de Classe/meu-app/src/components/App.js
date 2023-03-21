import React from 'react';

class App extends React.Component{
  render(){
    return (
      <div>
        <p>
          Primeiro parágrafo
        </p>
        <p>
          Segundo parágrafo
        </p>
        <p>
          {new Date().toLocaleDateString('pt-br')}
        </p>
      </div>
    );
  }
}

export default App;
