PixiGame.GameScene = function() {
    this.w = window.innerWidth;
    this.h = window.innerHeight;
    this.time = 0;
    this.mouse = new Boid(); //https://www.npmjs.com/package/boid
    this.NUM_BOIDS = 0;
    this.START_BOIDS = 15;
    this.flockers = []; //Pboids
    this.boids = []; //Boids


    PIXI.Graphics.call(this);
    this.setup();
};

PixiGame.GameScene.constructor = PixiGame.GameScene;
PixiGame.GameScene.prototype = Object.create(PIXI.Graphics.prototype);

PixiGame.GameScene.prototype.setup = function() {
    for (var i = 0; i < this.START_BOIDS; i++) {
        this.addBoid();
    };
}
PixiGame.GameScene.prototype.addBoid = function() {
    var index = this.NUM_BOIDS;
    this.boids[index] = new Boid(); //create new BOID
    this.boids[index].setBounds(this.w, this.h);
    this.boids[index].position.x = this.w * Math.random();
    this.boids[index].position.y = this.h * Math.random();
    this.boids[index].velocity.x = 20 * Math.random() - 10;
    this.boids[index].velocity.y = 20 * Math.random() - 10;
    this.flockers[index] = new PixiGame.PBoid(index); //Graph representation
    this.addChild(this.flockers[index]); //to be rendered
    this.NUM_BOIDS++;
}


PixiGame.GameScene.prototype.update = function() {
    this.time += 0.1;
    for (var i = 0; i < this.NUM_BOIDS; i++) {
        if (i == 0) {
            this.boids[0].position.x = document.posx;
            this.boids[0].position.y = document.posy;
        } else {
            this.boids[i].pursue(this.boids[0]);
        }
        this.boids[i].flock(this.boids); //set the flock        
        this.boids[i].update(); //calculate new position
        this.flockers[i].setPosition(this.boids[i].position); //copy position from boid to Pboid        
        this.flockers[i].update(this.time); //update
    };
}

PixiGame.GameScene.prototype.destroy = function() {
    this.removeChildren();
}



$(document).mousemove(function(e) {
    document.posx = e.pageX;
    document.posy = e.pageY;
})
