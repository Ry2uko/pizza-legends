class Overworld {
  constructor(config) {
    this.element = config.element;
    this.canvas = $(this.element).find('.game-canvas')[0];
    this.ctx = this.canvas.getContext('2d');
  }

  init() {
    // Render Map
    const map = new Image();
    map.onload = () => {
      this.ctx.drawImage(map, 0, 0);
    };
    map.src = '/images/maps/DemoLower.png';

    let x = 5; 
    let y = 6;

    // Draw shadow
    const shadow = new Image();
    shadow.onload = () => {
      this.ctx.drawImage(
        shadow, 
        0,  // left cut
        0,  // top cut
        32, // cut width
        32, // cut height
        x * 16 - 8, 
        y * 16 - 18,
        32,
        32
      );
    };
    shadow.src = '/images/characters/shadow.png';

    // Draw hero
    const hero = new Image();
    hero.onload = () => {
      this.ctx.drawImage(
        hero, 
        0,  // left cut
        0,  // top cut
        32, // cut width
        32, // cut height
        x * 16 - 8, 
        y * 16 - 18,
        32,
        32
      );
    }
    hero.src = '/images/characters/people/hero.png';
  }


}