(function () {
  var frame = document.getElementById('frame'),
      file = 'IMG_8495',
      height = 1080,
      width = 2160,
      index = 0,
      timer = window.setInterval(images, 2);

  function append (file, index) {
    var image = new Image();
    image.src = 'images/' + file + '_' + index + '.jpg';
    frame.appendChild(image);
  }

  function images () {
    if (index >= width) {
      return window.clearInterval(timer);
    } else {
      append(file, index);
      index++;
    }
  }
})();
