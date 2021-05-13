import React, {Component} from 'react';



class CustomizePanel extends Component {  //EL COMPONENTE RECIBE PROPS

constructor (props) {
    super (props);
    this.state = {
        inicialImage: props.inicialImage,
        changeImage: props.changeImage,
        
    }
}

PanelColorBlack () {
    this.setState ( {changeImage: this.props.PanelColorBlack})
}

PanelColorBlue () {
    this.setState ( {changeImage: this.props.PanelColorBlue})
}

PanelColorGrey () {
    this.setState ( {changeImage: this.props.PanelColorGrey})
}

PanelColorMagenta () {
    this.setState ( {changeImage: this.props.PanelColorMagenta})
}

PanelColorPink () {
    this.setState ( {changeImage: this.props.PanelColorPink})
}

PanelColorYellow () {
    this.setState ( {changeImage: this.props.PanelColorYellow})
}



resetImagen () {
    this.setState ( {inicialImage: this.props.inicialImage})
}


    
render() {                         //ENVUELVO TODO EN RENDER
return (
      <div className= "frame" >
          <section className= "mainImage">
            <img className = "positionFixed" src ={this.state.inicialImage}></img>
            <img className = "positionFixed" src ={this.state.changeImage}></img>
          </section>
          
          <button onClick= { () => this.PanelColorBlack() }>Negro</button>
          <button onClick= { () => this.PanelColorBlue() }>Azul</button>

          <button onClick= { () => this.PanelColorGrey() }>Gris</button>
          <button onClick= { () => this.PanelColorMagenta() }>Magenta</button>

          <button onClick= { () => this.PanelColorPink() }>Rosa</button>
          <button onClick= { () => this.PanelColorYellow() }>Amarillo</button>
          
          

          <button onClick= { () => this.resetImagen() }>Reset</button>
      </div>
  )

}}
    

export default CustomizePanel;