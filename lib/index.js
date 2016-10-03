'use strict';

module.exports = function () {
  return function posthtmlWebP (tree) {
    tree.match({ tag: 'img' }, function (img) {
      if(img.skip) return img;
      return getPicture(img);
    });

    return tree;
  }
};

function getPicture(img) {
  img.skip = true;
  return {
    tag: 'picture',
    content: [
      {
        tag: 'source',
        attrs: {
          type: 'image/webp',
          srcset: img.attrs.src + '.webp'
        }
      },
      img
    ]
  };
}