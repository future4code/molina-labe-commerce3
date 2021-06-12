import React from 'react';
import {ContainerFiltro, ContainerLabel, Titulo, Label} from "./styled"

class Filtros extends React.Component {
  render() {
    return (
      <ContainerFiltro>
        <Titulo>Filtros selecionados</Titulo>
        <ContainerLabel>
          <Label>Valor mínimo:</Label>
          <input type="number" min="0"  max="5000"/>
        </ContainerLabel>

        <ContainerLabel>
          <Label>Valor máximo:</Label>
          <input type="number" min="1" max="5000"/>
        </ContainerLabel>

        <ContainerLabel>
          <Label>
            Produto:
          </Label>
          <input for ="produto" type="text" value=""/>
        </ContainerLabel>

      </ContainerFiltro>

        
    );
  }
}

export default Filtros;