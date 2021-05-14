import React, {Component} from 'react';

class CustomizeThread extends Component {  //EL COMPONENTE RECIBE PROPS

constructor (props) {
    super (props);
    this.state = {
        inicialImage: props.inicialImage,
        changeImage: props.changeImage,  
    }
}

ThreadColorBlack () {
    this.setState ( {changeImage: this.props.ThreadColorBlack})
}

ThreadColorBlue () {
    this.setState ( {changeImage: this.props.ThreadColorBlue})
}

ThreadColorGrey () {
    this.setState ( {changeImage: this.props.ThreadColorGrey})
}

ThreadColorMagenta () {
    this.setState ( {changeImage: this.props.ThreadColorMagenta})
}

ThreadColorPink () {
    this.setState ( {changeImage: this.props.ThreadColorPink})
}

ThreadColorYellow () {
    this.setState ( {changeImage: this.props.ThreadColorYellow})
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
          <button onClick= { () => this.ThreadColorBlack() }>Negro</button>
          <button onClick= { () => this.ThreadColorBlue() }>Azul</button>

          <button onClick= { () => this.ThreadColorGrey() }>Gris</button>
          <button onClick= { () => this.ThreadColorMagenta() }>Magenta</button>

          <button onClick= { () => this.ThreadColorPink() }>Rosa</button>
          <button onClick= { () => this.ThreadColorYellow() }>Amarillo</button>
          
          <button onClick= { () => this.resetImagen() }>Reset</button>
      </div>
      </div>
  )

}}
    
export default CustomizeThread;