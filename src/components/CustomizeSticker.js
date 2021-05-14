import React, {Component} from 'react';

class CustomizeSticker extends Component {  //EL COMPONENTE RECIBE PROPS

constructor (props) {
    super (props);
    this.state = {
        inicialImage: props.inicialImage,
        changeImage: props.changeImage,  
    }
}

StickerColorBlack () {
    this.setState ( {changeImage: this.props.StickerColorBlack})
}

StickerColorBlue () {
    this.setState ( {changeImage: this.props.StickerColorBlue})
}

StickerColorGrey () {
    this.setState ( {changeImage: this.props.StickerColorGrey})
}

StickerColorMagenta () {
    this.setState ( {changeImage: this.props.StickerColorMagenta})
}

StickerColorPink () {
    this.setState ( {changeImage: this.props.StickerColorPink})
}

StickerColorYellow () {
    this.setState ( {changeImage: this.props.StickerColorYellow})
}

resetImagen () {
    this.setState ( {inicialImage: this.props.inicialImage})
}

render() {                         //ENVUELVO TODO EN RENDER
return (
    <div className= "frame">
      <div className= "frameLeft" >
          
            <img className = "positionFixed" src ={this.state.inicialImage}></img>
            <img className = "positionFixed" src ={this.state.changeImage}></img>
        
        </div>
         <div className= "frameRight" > 
          <button onClick= { () => this.StickerColorBlack() }>Negro</button>
          <button onClick= { () => this.StickerColorBlue() }>Azul</button>

          <button onClick= { () => this.StickerColorGrey() }>Gris</button>
          <button onClick= { () => this.StickerColorMagenta() }>Magenta</button>

          <button onClick= { () => this.StickerColorPink() }>Rosa</button>
          <button onClick= { () => this.StickerColorYellow() }>Amarillo</button>
          
          <button onClick= { () => this.resetImagen() }>Reset</button>
      </div>
      </div>
  )

}}
    
export default CustomizeSticker;