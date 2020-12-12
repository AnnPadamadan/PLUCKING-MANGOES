class trees{
    constructor(x,y,w,h){
        var options = {
            isStatic: true,
            'friction':1.0,
            'restitution':1.0,
            'density':1.0
            
        }

        
        this.image = loadImage("imgs/tree.png");
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.body = Bodies.rectangle(this.x, this.y, this.w, this.h, options);
       
    }
display(){
    var pos = this.body.position;
    var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        //rectMode(CENTER);
        //rect(this.x, this.y, this.w, this.h)
        imageMode(CENTER);
        image(this.image, 0, 0, this.w, this.h);
        pop();

}
}