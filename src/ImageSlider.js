import React, { Component } from "react";

class ImageSlider extends Component {
  state = {
    currentSlideIndex: 0
  };

  render() {
    console.log("Image Slider rendered");
    return `I am on slide ${this.state.currentSlideIndex}`;
  }
}

export default ImageSlider;
