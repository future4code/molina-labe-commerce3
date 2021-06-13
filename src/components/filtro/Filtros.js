import React from 'react';
import {ContainerFiltro, ContainerLabel, Titulo, Label, ContainerCheckBox} from "./styled"

class Filtros extends React.Component {
  render() {
    return (
      <ContainerFiltro>
        <Titulo>Filtros selecionados</Titulo>
        <ContainerCheckBox>
          <input type="checkbox" value=""/>
          <Label>Menos de R$ 30</Label>
        </ContainerCheckBox>

        <ContainerCheckBox>
          <input type="checkbox" value=''/>
          <Label>R$ 30 - R$ 50</Label>
        </ContainerCheckBox>

        <ContainerCheckBox>
          <input type="checkbox" value=''/>
          <Label>Mais de R$ 50</Label>  
        </ContainerCheckBox>

        <ContainerLabel>
          <Label>Produto:</Label>
          <input for ="produto" type="text" value=""/>
        </ContainerLabel>

      </ContainerFiltro>

        
    );
  }
}

export default Filtros;