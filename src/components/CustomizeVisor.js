import React, {Component} from 'react';

class CustomizeVisor extends Component {  //EL COMPONENTE RECIBE PROPS

constructor (props) {
    super (props);
    this.state = {
        inicialImage: props.inicialImage,
        //changeImage: props.changeImage,
        value: '' , //para el form

        changeImageVisor: props.changeImageVisor,
        changeImagePanel: props.changeImagePanel,
        changeImageLogo: props.changeImageLogo,
        changeImageThread: props.changeImageThread,
        changeImageSticker: props.changeImageSticker,
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
    this.setState ( {changeImageVisor: this.props.VisorColorBlack})
}
VisorColorBlue () {
    this.setState ( {changeImageVisor: this.props.VisorColorBlue})
}
VisorColorGrey () {
    this.setState ( {changeImageVisor: this.props.VisorColorGrey})
}
VisorColorMagenta () {
    this.setState ( {changeImageVisor: this.props.VisorColorMagenta})
}
VisorColorPink () {
    this.setState ( {changeImageVisor: this.props.VisorColorPink})
}
VisorColorYellow () {
    this.setState ( {changeImageVisor: this.props.VisorColorYellow})
}

//PANEL

PanelColorBlack () {
    this.setState ( {changeImagePanel: this.props.PanelColorBlack})
}
PanelColorBlue () {
    this.setState ( {changeImagePanel: this.props.PanelColorBlue})
}
PanelColorGrey () {
    this.setState ( {changeImagePanel: this.props.PanelColorGrey})
}
PanelColorMagenta () {
    this.setState ( {changeImagePanel: this.props.PanelColorMagenta})
}
PanelColorPink () {
    this.setState ( {changeImagePanel: this.props.PanelColorPink})
}
PanelColorYellow () {
    this.setState ( {changeImagePanel: this.props.PanelColorYellow})
}

//LOGO

LogoCentralBig () {
    this.setState ( {changeImageLogo: this.props.LogoCentralBig})
}
LogoCentralSmall () {
    this.setState ( {changeImageLogo: this.props.LogoCentralSmall})
}
LogoClean () {
    this.setState ( {changeImageLogo: this.props.LogoClean})
}
LogoPanelSide () {
    this.setState ( {changeImageLogo: this.props.LogoPanelSide})
}
LogoVisor () {
    this.setState ( {changeImageLogo: this.props.LogoVisor})
}

//THREAD

ThreadColorBlack () {
    this.setState ( {changeImageThread: this.props.ThreadColorBlack})
}
ThreadColorBlue () {
    this.setState ( {changeImageThread: this.props.ThreadColorBlue})
}
ThreadColorGrey () {
    this.setState ( {changeImageThread: this.props.ThreadColorGrey})
}
ThreadColorMagenta () {
    this.setState ( {changeImageThread: this.props.ThreadColorMagenta})
}
ThreadColorPink () {
    this.setState ( {changeImageThread: this.props.ThreadColorPink})
}
ThreadColorYellow () {
    this.setState ( {changeImageThread: this.props.ThreadColorYellow})
}

//STICKER

StickerColorBlack () {
    this.setState ( {changeImageSticker: this.props.StickerColorBlack})
}
StickerColorBlue () {
    this.setState ( {changeImageSticker: this.props.StickerColorBlue})
}
StickerColorGrey () {
    this.setState ( {changeImageSticker: this.props.StickerColorGrey})
}
StickerColorMagenta () {
    this.setState ( {changeImageSticker: this.props.StickerColorMagenta})
}
StickerColorPink () {
    this.setState ( {changeImageSticker: this.props.StickerColorPink})
}
StickerColorYellow () {
    this.setState ( {changeImageSticker: this.props.StickerColorYellow})
}

resetImagen () {
    this.setState ( {inicialImage: this.props.inicialImage})
}

render() {                         //ENVUELVO TODO EN RENDER
return (
    
      <div className= "frame" >
          
          <div className= "frameLeft">
            <img className = "positionFixed" src ={this.state.inicialImage}></img>
            <img className = "positionFixed" src ={this.state.changeImageVisor}></img>
            <img className = "positionFixed" src ={this.state.changeImagePanel}></img>
            <img className = "positionFixed" src ={this.state.changeImageLogo}></img>
            <img className = "positionFixed" src ={this.state.changeImageThread}></img>
            <img className = "positionFixed" src ={this.state.changeImageSticker}></img>
          </div>

          <div className= "frameRight">
            <form onSubmit={this.handleSubmit}>
                
                    <label>Elige un color para la Visera</label><br/>
                    <div className= "container">
                        <div className="checkmarkBlack">
                            <input type="radio" name= "visor" value={this.state.value} onChange= { () => this.VisorColorBlack() }/>
                        </div>
                            <div className="checkmarkBlue">
                                <input type="radio" name= "visor" value={this.state.value} onChange= { () => this.VisorColorBlue() }/>
                            </div>
                                <div className="checkmarkGrey">
                                    <input type="radio" name= "visor" value={this.state.value} onChange= { () => this.VisorColorGrey() }/>
                                </div>
                                    <div className="checkmarkMagenta">
                                        <input type="radio" name= "visor" value={this.state.value} onChange= { () => this.VisorColorMagenta() }/>
                                    </div>
                                <div className="checkmarkPink">
                                    <input type="radio" name= "visor" value={this.state.value} onChange= { () => this.VisorColorPink() }/>
                                </div>
                            <div className="checkmarkYellow">
                                <input type="radio" name= "visor" value={this.state.value} onChange= { () => this.VisorColorYellow() }/>
                            </div>
                        <br/>
                    <label>Elige un color para los Paneles</label><br/>
                        <div className="checkmarkBlack">
                            <input type="radio" name= "panel" value={this.state.value} onChange= { () => this.PanelColorBlack() }/>
                        </div>
                        <div className="checkmarkBlue">
                            <input type="radio" name= "panel" value={this.state.value} onChange= { () => this.PanelColorBlue() }/>
                        </div>
                        <div className="checkmarkGrey">
                            <input type="radio" name= "panel" value={this.state.value} onChange= { () => this.PanelColorGrey() }/>
                        </div>
                        <div className="checkmarkMagenta">
                            <input type="radio" name= "panel" value={this.state.value} onChange= { () => this.PanelColorMagenta() }/>
                        </div>
                        <div className="checkmarkPink">
                            <input type="radio" name= "panel" value={this.state.value} onChange= { () => this.PanelColorPink() }/>
                        </div>
                        <div className="checkmarkYellow">
                            <input type="radio" name= "panel" value={this.state.value} onChange= { () => this.PanelColorYellow() }/>
                        </div>
                    <br/>
                    <label>Elige el tamaño y posición del Logo</label><br/>
                        <div className="checkmarkLogo">
                            <input type="radio" name= "logo" value={this.state.value} onChange= { () => this.LogoCentralBig() }/>
                        </div>
                        <div className="checkmarkLogo">
                            <input type="radio" name= "logo" value={this.state.value} onChange= { () => this.LogoCentralSmall() }/>
                        </div>
                        <div className="checkmarkLogo">
                            <input type="radio" name= "logo" value={this.state.value} onChange= { () => this.LogoClean() }/>
                        </div>
                        <div className="checkmarkLogo">
                            <input type="radio" name= "logo" value={this.state.value} onChange= { () => this.LogoPanelSide() }/>
                        </div>
                        <div className="checkmarkLogo">
                        <input type="radio" name= "logo" value={this.state.value} onChange= { () => this.LogoVisor() }/>
                        </div>
                    <br/>
                    <label>Elige un color para las Costuras</label><br/>
                        <div className="checkmarkBlack">
                            <input type="radio" name= "thread" value={this.state.value} onChange= { () => this.ThreadColorBlack() }/>
                        </div>
                        <div className="checkmarkBlue">
                            <input type="radio" name= "thread" value={this.state.value} onChange= { () => this.ThreadColorBlue() }/>
                        </div>
                        <div className="checkmarkGrey">
                            <input type="radio" name= "thread" value={this.state.value} onChange= { () => this.ThreadColorGrey() }/>
                        </div>
                        <div className="checkmarkMagenta">
                            <input type="radio" name= "thread" value={this.state.value} onChange= { () => this.ThreadColorMagenta() }/>
                        </div>
                        <div className="checkmarkPink">
                            <input type="radio" name= "thread" value={this.state.value} onChange= { () => this.ThreadColorPink() }/>
                        </div>
                        <div className="checkmarkYellow">
                            <input type="radio" name= "thread" value={this.state.value} onChange= { () => this.ThreadColorYellow() }/>
                        </div>
                    <br/>
                    <label>Elige un color para el Sticker</label><br/>
                        <div className="checkmarkBlack">
                            <input type="radio" name= "sticker" value={this.state.value} onChange= { () => this.StickerColorBlack() }/>
                        </div>
                        <div className="checkmarkBlue">
                            <input type="radio" name= "sticker" value={this.state.value} onChange= { () => this.StickerColorBlue() }/>
                        </div>
                        <div className="checkmarkGrey">
                            <input type="radio" name= "sticker" value={this.state.value} onChange= { () => this.StickerColorGrey() }/>
                        </div>
                        <div className="checkmarkMagenta">
                            <input type="radio" name= "sticker" value={this.state.value} onChange= { () => this.StickerColorMagenta() }/>
                        </div>
                        <div className="checkmarkPink">
                            <input type="radio" name= "sticker" value={this.state.value} onChange= { () => this.StickerColorPink() }/>
                        </div>
                        <div className="checkmarkYellow">
                            <input type="radio" name= "sticker" value={this.state.value} onChange= { () => this.StickerColorYellow() }/>
                        </div>
                    <br/>
                    
                    
                    <input type="submit" value="Submit" />
                </div>
            </form>
        </div>

      </div>
      
  )

}}
    
export default CustomizeVisor;