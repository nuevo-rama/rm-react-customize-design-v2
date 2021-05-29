import React from 'react';
import slider from './imagen_slider_5.jpg'

import HeaderComponent from './components/HeaderComponent';
import CustomizeItem from './components/CustomizeItem';
import FooterComponent from './components/FooterComponent';
import './App.css';

function App() {
  return (
    <div className="App">
    
    <HeaderComponent/>
      <div style= {{backgroundImage: `url(${slider})` , backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}>
        <CustomizeItem
          inicialImage= {'/productImagesCustomize/cap-image-inicial.png'}
          VisorColorBlack= {'/productImagesCustomize/cap-image-visor-color-black.png'}
          VisorColorBlue= {'/productImagesCustomize/cap-image-visor-color-blue.png'}
          VisorColorGrey= {'/productImagesCustomize/cap-image-visor-color-grey.png'}
          VisorColorMagenta= {'/productImagesCustomize/cap-image-visor-color-magenta.png'}
          VisorColorPink= {'/productImagesCustomize/cap-image-visor-color-pink.png'}
          VisorColorYellow= {'/productImagesCustomize/cap-image-visor-color-yellow.png'}
      
          PanelColorBlack= {'/productImagesCustomize/cap-image-panels-color-black.png'}
          PanelColorBlue= {'/productImagesCustomize/cap-image-panels-color-blue.png'}
          PanelColorGrey= {'/productImagesCustomize/cap-image-panels-color-grey.png'}
          PanelColorMagenta= {'/productImagesCustomize/cap-image-panels-color-magenta.png'}
          PanelColorPink= {'/productImagesCustomize/cap-image-panels-color-pink.png'}
          PanelColorYellow= {'/productImagesCustomize/cap-image-panels-color-yellow.png'}
      
          ThreadColorBlack= {'/productImagesCustomize/cap-image-thread-color-black.png'}
          ThreadColorBlue= {'/productImagesCustomize/cap-image-thread-color-blue.png'}
          ThreadColorGrey= {'/productImagesCustomize/cap-image-thread-color-grey.png'}
          ThreadColorMagenta= {'/productImagesCustomize/cap-image-thread-color-magenta.png'}
          ThreadColorPink= {'/productImagesCustomize/cap-image-thread-color-pink.png'}
          ThreadColorYellow= {'/productImagesCustomize/cap-image-thread-color-yellow.png'}
      
          LogoCentralBig= {'/productImagesCustomize/cap-image-logo-central-big.png'}
          LogoCentralSmall= {'/productImagesCustomize/cap-image-logo-central-small.png'}
          LogoClean= {'/productImagesCustomize/cap-image-logo-clean.png'}
          LogoPanelSide= {'/productImagesCustomize/cap-image-logo-panel-side.png'}
          LogoVisor= {'/productImagesCustomize/cap-image-logo-visor.png'}
      
          StickerColorBlack= {'/productImagesCustomize/cap-image-sticker-color-black.png'}
          StickerColorBlue= {'/productImagesCustomize/cap-image-sticker-color-blue.png'}
          StickerColorGrey= {'/productImagesCustomize/cap-image-sticker-color-grey.png'}
          StickerColorMagenta= {'/productImagesCustomize/cap-image-sticker-color-magenta.png'}
          StickerColorPink= {'/productImagesCustomize/cap-image-sticker-color-pink.png'}
          StickerColorYellow= {'/productImagesCustomize/cap-image-sticker-color-yellow.png'}

          resetImage= {'/productImagesCustomize/cap-image-inicial.png'}
        />
      </div>

      <FooterComponent/>
    </div>
  );
}

export default App;
