import React from 'react';
import {ContainerFiltro, ContainerLabel, Titulo, Label} from "./styled"

class Filtros extends React.Component {
  render() {
    return (
      <ContainerFiltro>
        <Titulo>Filtros selecionados</Titulo>
        <ContainerLabel>
          <Label>
            Valor mínimo:
          </Label>
          <input for ="valor minimo" min="50" type="number" maxvalue=""/>
        </ContainerLabel>

        <ContainerLabel>
          <Label>
            Valor máximo:
          </Label>
          <input for="valor maximo" min="50" type="number" value="50"/>
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