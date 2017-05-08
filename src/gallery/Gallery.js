import React from 'react';
import * as ReactRedux from 'react-redux';
import * as actions from './Gallery.actions';

class Gallery extends React.Component {
  componentDidMount() {
    this.props.fetchImages();
  }
  select(idx) {
    this.props.selectImage(idx);
  }
  render() {
    let currentImage = this.props.images[this.props.currentIndex];
    let next = this.props.next;
    let prev = this.props.prev;
    return (
      <div>
        <button onClick={prev}>
          Previous
        </button>
        <button onClick={next}>
          Next
        </button>
        <br/>
          <img src={currentImage} key={currentImage}
            alt={currentImage}/>
        <div>
          {this.props.images.map((imageUrl, idx) =>
            <img key={idx}
              src={imageUrl} height="60"
              onClick={() => this.select(idx)}
              alt={imageUrl}/>
          )}
        </div>
      </div>
    );
  }
}

const GalleryContainer = ReactRedux.connect(
  state => ({
    images: state.galleryInfo.images,
    currentIndex: state.galleryInfo.currentIndex
  }),
  actions
)(Gallery);

export default GalleryContainer;
