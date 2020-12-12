class mangoes{
    constructor(x,y,radius){
        var options = {
            isStatic: true,
            'friction':1.0,
            'restitution':0,
            
            
        }

        
        this.image = loadImage("imgs/mango.png");
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.body = Bodies.circle(this.x, this.y, this.radius, options);

        World.add(world,this.body);
    }
display(){
    var pos = this.body.position;
    var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        //ellipseMode(CENTER);
        //ellipse(this.x, this.y, this.radius, this.radius)
        imageMode(CENTER);
        image(this.image, 0, 0, this.radius, this.radius);
        pop();

}
}