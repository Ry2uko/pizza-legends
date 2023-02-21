class Overworld {
  constructor(config) {
    this.element = config.element;
    this.canvas = $(this.element).find('.game-canvas')[0];
    this.ctx = this.canvas.getContext('2d');
  }

  init() {
    console.log('Hello, Overworld!', this);
  }
}