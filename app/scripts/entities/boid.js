var letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"

PixiGame.PBoid = function(index) {
    this.index = index;
    PIXI.Graphics.call(this);
    this.setup();

};
PixiGame.PBoid.constructor = PixiGame.PBoid;
PixiGame.PBoid.prototype = Object.create(PIXI.Graphics.prototype);

PixiGame.PBoid.prototype.setup = function() {
    //console.info('PBoid ' +this.index+ ' setup');
    //this.beginFill(0xFFFFFF);
    //this.drawCircle(0, 0, 2);
    //this.endFill();
    this.addChild(new PIXI.Text(letters[this.index % letters.length], {
        font: '20px Arial',
        fill: 0xff1010,
        align: 'center'
    }));
}

PixiGame.PBoid.prototype.update = function(time) {
    //console.info('PBoid ' +this.index+ ' update');	
}

PixiGame.PBoid.prototype.setPosition = function(pos) {
    this.position.x = pos.x;
    this.position.y = pos.y;
};

PixiGame.PBoid.prototype.destroy = function() {
    this.removeChildren();
}


var rand = function(min, max) {
    return Math.floor(Math.random() * max) + min;
}
