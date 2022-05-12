'use strict';

import React from 'react';

import Carousel from 'react-gallery-carousel';

const images = [
  {
    src: 'img/fotos/carnaval.jpg'
  },
  {
    src: 'img/fotos/protesto.jpg'
  }
];

class PhotoGallery extends React.Component {
  render() {
    return <Carousel images={images} style={{ height: 600, width: 800 }} />;
  }
}

export default PhotoGallery