import React, {Component} from 'react';

class CustomizeVisor extends Component {  //EL COMPONENTE RECIBE PROPS

constructor (props) {
    super (props);
    this.state = {
        inicialImage: props.inicialImage,
        changeImage: props.changeImage,  
    }
}

VisorColorBlack () {
    this.setState ( {changeImage: this.props.VisorColorBlack})
}

VisorColorBlue () {
    this.setState ( {changeImage: this.props.VisorColorBlue})
}

VisorColorGrey () {
    this.setState ( {changeImage: this.props.VisorColorGrey})
}

VisorColorMagenta () {
    this.setState ( {changeImage: this.props.VisorColorMagenta})
}

VisorColorPink () {
    this.setState ( {changeImage: this.props.VisorColorPink})
}

VisorColorYellow () {
    this.setState ( {changeImage: this.props.VisorColorYellow})
}

resetImagen () {
    this.setState ( {inicialImage: this.props.inicialImage})
}

render() {                         //ENVUELVO TODO EN RENDER
return (
      <div className= "frame" >
          <div className= "frameLeft">
            <img className = "positionFixed" src ={this.state.inicialImage}></img>
            <img className = "positionFixed" src ={this.state.changeImage}></img>
          </div>
          <div className= "frameRight">
          <button id = "black" onClick= { () => this.VisorColorBlack() }>Negro</button>
          <button id = "blue" onClick= { () => this.VisorColorBlue() }>Azul</button>

          <button id = "grey" onClick= { () => this.VisorColorGrey() }>Gris</button>
          <button id = "magenta" onClick= { () => this.VisorColorMagenta() }>Magenta</button>

          <button id = "pink" onClick= { () => this.VisorColorPink() }>Rosa</button>
          <button id = "yellow" onClick= { () => this.VisorColorYellow() }>Amarillo</button>
          
          <button id = "reset" onClick= { () => this.resetImagen() }>Reset</button>
      </div>
      </div>
  )

}}
    
export default CustomizeVisor;