import React from 'react';

const images = [
  { id: 0, src: 'images/001.png' },
  { id: 1, src: 'images/004.png' },
  { id: 2, src: 'images/007.png' },
  { id: 3, src: 'images/025.png' },
  { id: 4, src: 'images/039.png' }
];

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.handleLeftStep = this.handleLeftStep.bind(this);
    this.handleRightStep = this.handleRightStep.bind(this);
    this.handleCircleClick = this.handleCircleClick.bind(this);
    this.state = {
      currentImageId: 0,
      secondsOnTimer: 0
    };
  }

  handleRightStep() {
    this.setState({ secondsOnTimer: 0 });
    (this.state.currentImageId === images.length - 1)
      ? this.setState({ currentImageId: 0 })
      : this.setState({ currentImageId: this.state.currentImageId + 1 });
  }

  handleLeftStep() {
    this.setState({ secondsOnTimer: 0 });
    (this.state.currentImageId === 0)
      ? this.setState({ currentImageId: images.length - 1 })
      : this.setState({ currentImageId: this.state.currentImageId - 1 });
  }

  handleCircleClick(e) {
    this.setState({ currentImageId: parseInt(e.target.id) });
    this.setState({ secondsOnTimer: 0 });
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => {
        this.setState({ secondsOnTimer: this.state.secondsOnTimer + 1 });
        if (this.state.secondsOnTimer === 3) {
          this.handleRightStep();
          this.setState({ secondsOnTimer: 0 });
        }
      },
      1000
    );
  }

  render() {
    return (
      <div className="container">
        <div className="box margin-top-6">
          <div className="row center">
            <div className="col-tenth">
              <i onClick={this.handleLeftStep} id="left" className="fas fa-chevron-left center"></i>
            </div>
            <div className="col-four-fifths">
              <img src={ images[this.state.currentImageId].src} className="center" data-view="1" />
            </div>
            <div className="col-tenth">
              <i onClick={this.handleRightStep} id="right" className="fas fa-chevron-right center"></i>
            </div>
          </div>
          <div className="row center">
            <div id="circlesContainer" className="flex margin-top-2">
              {images.map(image => {
                return (
                  (this.state.currentImageId === image.id)
                    ? <div id={image.id} key={image.id} onClick={this.handleCircleClick} className="black circle"/>
                    : <div id={image.id} key={image.id} onClick={this.handleCircleClick} className="circle"/>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Carousel;
