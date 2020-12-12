class stone{
    constructor(x,y,r){
        var options = {
            isStatic: false,
            'friction':1.0,
            'restitution':0,
            'density':1.2
            
        }

        
        this.image = loadImage("imgs/stone.png");
        this.x = x;
        this.y = y;
        this.r = r;
        this.body = Bodies.circle(this.x, this.y, this.r, options);
        
        World.add(world,this.body);
    }
display(){
    var pos = this.body.position;
    var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        //ellipseMode(CENTER);
        //ellipse(this.x, this.y, this.r, this.r)
        imageMode(CENTER);
        image(this.image, 0, 0, this.r, this.r);
        pop();

}
}