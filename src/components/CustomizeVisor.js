import React, {Component} from 'react';

class CustomizeVisor extends Component {  //EL COMPONENTE RECIBE PROPS

constructor (props) {
    super (props);
    this.state = {
        inicialImage: props.inicialImage,
        changeImage: props.changeImage,
        value: ''  //para el form
    };

    this.handleChange = this.handleChange.bind(this); //para el form
    this.handleSubmit = this.handleSubmit.bind(this); //para el form
}

handleChange(event) { //para el form
    this.setState({value: event.target.value});
  }

  handleSubmit(event) { //para el form
    //alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  //VISOR

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

//PANEL

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

//LOGO

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

//THREAD

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

//STICKER

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
    
      <div className= "frame" >
          
          <div className= "frameLeft">
            <img className = "positionFixed" src ={this.state.inicialImage}></img>
            <img className = "positionFixed" src ={this.state.changeImage}></img>
          </div>

          <div className= "frameRight">
            <form onSubmit={this.handleSubmit}>
                <label>Elige un color para la Visera</label>
                <input type="radio" id = "black" name= "visor" value={this.state.value} onChange= { () => this.VisorColorBlack() }/>
                <input type="radio" id = "blue" name= "visor" value={this.state.value} onChange= { () => this.VisorColorBlue() }/>
                <input type="radio" id = "grey" name= "visor" value={this.state.value} onChange= { () => this.VisorColorGrey() }/>
                <input type="radio" id = "magenta" name= "visor" value={this.state.value} onChange= { () => this.VisorColorMagenta() }/>
                <input type="radio" id = "pink" name= "visor" value={this.state.value} onChange= { () => this.VisorColorPink() }/>
                <input type="radio" id = "yellow" name= "visor" value={this.state.value} onChange= { () => this.VisorColorYellow() }/>

                <label>Elige un color para los Paneles</label>
                <input type="radio" id = "black" name= "panel" value={this.state.value} onChange= { () => this.PanelColorBlack() }/>
                <input type="radio" id = "blue" name= "panel" value={this.state.value} onChange= { () => this.PanelColorBlue() }/>
                <input type="radio" id = "grey" name= "panel" value={this.state.value} onChange= { () => this.PanelColorGrey() }/>
                <input type="radio" id = "magenta" name= "panel" value={this.state.value} onChange= { () => this.PanelColorMagenta() }/>
                <input type="radio" id = "pink" name= "panel" value={this.state.value} onChange= { () => this.PanelColorPink() }/>
                <input type="radio" id = "yellow" name= "panel" value={this.state.value} onChange= { () => this.PanelColorYellow() }/>

                <label>Elige el tamaño y posición del Logo</label>
                <input type="radio" id = "logoSelect" name= "logo" value={this.state.value} onChange= { () => this.LogoCentralBig() }/>
                <input type="radio" id = "logoSelect" name= "logo" value={this.state.value} onChange= { () => this.LogoCentralSmall() }/>
                <input type="radio" id = "logoSelect" name= "logo" value={this.state.value} onChange= { () => this.LogoClean() }/>
                <input type="radio" id = "logoSelect" name= "logo" value={this.state.value} onChange= { () => this.LogoPanelSide() }/>
                <input type="radio" id = "logoSelect" name= "logo" value={this.state.value} onChange= { () => this.LogoVisor() }/>

                <label>Elige un color para las Costuras</label>
                <input type="radio" id = "black" name= "thread" value={this.state.value} onChange= { () => this.ThreadColorBlack() }/>
                <input type="radio" id = "blue" name= "thread" value={this.state.value} onChange= { () => this.ThreadColorBlue() }/>
                <input type="radio" id = "grey" name= "thread" value={this.state.value} onChange= { () => this.ThreadColorGrey() }/>
                <input type="radio" id = "magenta" name= "thread" value={this.state.value} onChange= { () => this.ThreadColorMagenta() }/>
                <input type="radio" id = "pink" name= "thread" value={this.state.value} onChange= { () => this.ThreadColorPink() }/>
                <input type="radio" id = "yellow" name= "thread" value={this.state.value} onChange= { () => this.ThreadColorYellow() }/>

                <label>Elige un color para el Sticker</label>
                <input type="radio" id = "black" name= "sticker" value={this.state.value} onChange= { () => this.StickerColorBlack() }/>
                <input type="radio" id = "blue" name= "sticker" value={this.state.value} onChange= { () => this.StickerColorBlue() }/>
                <input type="radio" id = "grey" name= "sticker" value={this.state.value} onChange= { () => this.StickerColorGrey() }/>
                <input type="radio" id = "magenta" name= "sticker" value={this.state.value} onChange= { () => this.StickerColorMagenta() }/>
                <input type="radio" id = "pink" name= "sticker" value={this.state.value} onChange= { () => this.StickerColorPink() }/>
                <input type="radio" id = "yellow" name= "sticker" value={this.state.value} onChange= { () => this.StickerColorYellow() }/>
                
                
                <input type="submit" value="Submit" />
            </form>
        </div>

      </div>
      
  )

}}
    
export default CustomizeVisor;