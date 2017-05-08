export function next() {
  return { type: 'next' };
}

export function prev() {
  return { type: 'previous' };
}

export function selectImage(idx) {
  return { type: 'select', index: idx };
}

export function fetchImages() {
  return function(dispatch) {
    const IMAGES = [
      'images/comfy.jpg',
      'images/farted.jpg',
      'images/hate.jpg',
      'images/lolcat_airplane.jpg',
      'images/mocked.jpg',
      'images/monorail.jpg',
    ];
    setTimeout(() => dispatch({
      type: 'receive_images',
      images: IMAGES
    }), 1);
  };
}
