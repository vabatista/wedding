'use strict';

import React from 'react';

import ImageGallery from 'react-image-gallery';

const images = [
  {
    original: 'img/fotos/carnaval_s.jpg',
	thumbnail: 'img/fotos/carnaval_tn.jpg'
  },
  {
    original: 'img/fotos/protesto_s.jpg',
	thumbnail: 'img/fotos/protesto_tn.jpg'
  }
];

class Photos extends React.Component {
  render() {
    return <ImageGallery items={images}/>;
  }
}

export default Photos