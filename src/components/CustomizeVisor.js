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
          <section className= "mainImage">
            <img className = "positionFixed" src ={this.state.inicialImage}></img>
            <img className = "positionFixed" src ={this.state.changeImage}></img>
          </section>
          
          <button onClick= { () => this.VisorColorBlack() }>Negro</button>
          <button onClick= { () => this.VisorColorBlue() }>Azul</button>

          <button onClick= { () => this.VisorColorGrey() }>Gris</button>
          <button onClick= { () => this.VisorColorMagenta() }>Magenta</button>

          <button onClick= { () => this.VisorColorPink() }>Rosa</button>
          <button onClick= { () => this.VisorColorYellow() }>Amarillo</button>
          
          <button onClick= { () => this.resetImagen() }>Reset</button>
      </div>
  )

}}
    
export default CustomizeVisor;