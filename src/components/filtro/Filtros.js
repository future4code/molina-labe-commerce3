import React from 'react';
import {ContainerFiltro} from "./styled"

class Filtros extends React.Component {
  render() {
    return (
      <ContainerFiltro>
        <h3>Filtros selecionados</h3>
        <br/>
        <label>
          Valor mínimo:
        </label>
        <br/>
        <input type="number" value=""/>
        <br/>
        <label>
          Valor máximo:
        </label>
        <br/>
        <input type="number" value="50"/>
        <br/>
        <label>
          Produto:
        </label>
        <br/>
        <input type="text" value=""/>

      </ContainerFiltro>

        
    );
  }
}

export default Filtros;