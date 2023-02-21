class Overworld {
  constructor(config) {
    this.element = config.element;
    this.canvas = $(this.element).find('.game-canvas')[0];
    this.ctx = this.canvas.getContext('2d');
  }

  init() {
    const image = new Image();
    
    image.src = '/images/maps/DemoLower.png';
    image.onload = () => {
      this.ctx.drawImage(image, 0, 0);
    };
  }


}