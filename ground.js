class grounds{
    constructor(x,y,w,h){
        var options = {
            isStatic: true,
            'friction':1.0,
            'restitution':1.0,
            'density':1.0
            
        }

        this.body = Bodies.rectangle(this.x, this.y, this.w, this.h, options);
       
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;

        World.add(world,this.body);
    }
display(){
    var pos = this.body.position;
    var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill(0, 255, 0);
        rect(this.x, this.y, this.w, this.h)
        
        pop();

}
}