import React from 'react';
import { 
  ContainerFiltro,
  ContainerLabel,
  Titulo,
  Label,
  ContainerCheckBox
} from "./styled"

class Filtros extends React.Component {
  render() {
    return (
      <ContainerFiltro>
        <Titulo>Filtros selecionados</Titulo>
        <ContainerCheckBox>
          <input type="checkbox" />
          <Label>Menos de R$ 30</Label>
        </ContainerCheckBox>
        <ContainerCheckBox>
          <input type="checkbox" />
          <Label>R$ 30 - R$ 50</Label>
        </ContainerCheckBox>
        <ContainerCheckBox>
          <input type="checkbox"/>
          <Label>Mais de R$ 50</Label>  
        </ContainerCheckBox>
        <ContainerLabel>
          <Label>Produto:</Label>
          <input 
            type="text" 
            onChange={this.props.onChangeBusca}
            onKeyPress={this.props.onKeyPressBusca}
          />
        </ContainerLabel>
      </ContainerFiltro>        
    );
  }
}

export default Filtros;