import React, {Component} from 'react';

class CustomizeLogo extends Component {  //EL COMPONENTE RECIBE PROPS

constructor (props) {
    super (props);
    this.state = {
        inicialImage: props.inicialImage,
        changeImage: props.changeImage,  
    }
}

LogoCentralBig () {
    this.setState ( {changeImage: this.props.LogoCentralBig})
}

LogoCentralSmall () {
    this.setState ( {changeImage: this.props.LogoCentralSmall})
}

LogoClean () {
    this.setState ( {changeImage: this.props.LogoClean})
}

LogoPanelSide () {
    this.setState ( {changeImage: this.props.LogoPanelSide})
}

LogoVisor () {
    this.setState ( {changeImage: this.props.LogoVisor})
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
          
          <button onClick= { () => this.LogoCentralBig() }>Logo Central Grande</button>
          <button onClick= { () => this.LogoCentralSmall() }>Logo Central Mediano</button>

          <button onClick= { () => this.LogoClean() }>Sin logo</button>
          <button onClick= { () => this.LogoPanelSide() }>Logo en Lateral</button>

          <button onClick= { () => this.LogoVisor() }>Logo en Visor</button>
         
          
          <button onClick= { () => this.resetImagen() }>Reset</button>
      </div>
  )

}}
    
export default CustomizeLogo;