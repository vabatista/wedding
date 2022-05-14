'use strict';

import React from 'react';

import ImageGallery from 'react-image-gallery';

const images = [
  {
    original: 'img/fotos/carnaval.jpg',
	thumbnail: 'img/fotos/carnaval_tn.jpg'
  },
  {
    original: 'img/fotos/parque.jpg',
	thumbnail: 'img/fotos/parque_tn.jpg'
  },
  {
    original: 'img/fotos/protesto.jpg',
	thumbnail: 'img/fotos/protesto_tn.jpg'
  },
  {
    original: 'img/fotos/brinde.jpg',
	thumbnail: 'img/fotos/brinde_tn.jpg'
  },
  {
    original: 'img/fotos/desfile.jpg',
	thumbnail: 'img/fotos/desfile_tn.jpg'
  },
  {
    original: 'img/fotos/fantasia.jpg',
	thumbnail: 'img/fotos/fantasia_tn.jpg'
  },
  {
    original: 'img/fotos/farol.jpg',
	thumbnail: 'img/fotos/farol_tn.jpg'
  },
  {
    original: 'img/fotos/filosofos.jpg',
	thumbnail: 'img/fotos/filosofos_tn.jpg'
  },
  {
    original: 'img/fotos/lapa.jpg',
	thumbnail: 'img/fotos/lapa_tn.jpg'
  },
  {
    original: 'img/fotos/natal.jpg',
	thumbnail: 'img/fotos/natal_tn.jpg'
  }
];

class Photos extends React.Component {
  render() {
    return <ImageGallery items={images}/>;
  }
}

export default Photos