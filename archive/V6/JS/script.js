var zoomer = function (){
    document.getElementById('img-zoomer-box')
      .addEventListener('mousemove', function(e) {
  
      var original = document.getElementById('img1'),
          magnified = document.getElementById('img2'),
          style = magnified.style,
          x = e.pageX - this.offsetLeft,
          y = e.pageY - this.offsetTop,
          imgWidth = original.width,
          imgHeight = original.height,
          xperc = ((x/imgWidth) * 10),
          yperc = ((y/imgHeight) * 10);
  
      if(x > (.01 * imgWidth)) {
        xperc += (.15 * xperc);
      };//lets user scroll past right edge of image
  
      if(y >= (.01 * imgHeight)) {
        yperc += (.15 * yperc);
      };//lets user scroll past bottom edge of image
  
      style.backgroundPositionX = (xperc - 9) + '%';
      style.backgroundPositionY = (yperc - 9) + '%';
  
      style.left = (x - 180) + 'px';
      style.top = (y - 180) + 'px';
  
    }, false);
  }();
  



  var zoomer = function (){
    document.getElementById('img-zoomer-box-p2')
      .addEventListener('mousemove', function(e) {
  
      var original = document.getElementById('img1-p2'),
          magnified = document.getElementById('img2-p2'),
          style = magnified.style,
          x = e.pageX - this.offsetLeft,
          y = e.pageY - this.offsetTop,
          imgWidth = original.width,
          imgHeight = original.height,
          xperc = ((x/imgWidth) * 10),
          yperc = ((y/imgHeight) * 10);
  
      if(x > (.01 * imgWidth)) {
        xperc += (.15 * xperc);
      };//lets user scroll past right edge of image
  
      if(y >= (.01 * imgHeight)) {
        yperc += (.15 * yperc);
      };//lets user scroll past bottom edge of image
  
      style.backgroundPositionX = (xperc - 9) + '%';
      style.backgroundPositionY = (yperc - 9) + '%';
  
      style.left = (x - 180) + 'px';
      style.top = (y - 180) + 'px';
  
    }, false);
  }();
  