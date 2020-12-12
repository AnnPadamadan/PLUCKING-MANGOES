class band{
    constructor(pointA, bodyB){
        var options = {
            pointA: pointA,
            bodyB: bodyB,
            stiffness: 0.004,
            length: 15
            
        }

        this.pointA = pointA;
        this.band = Constraint.create(options);
       
        World.add(world,this.band);
    }
    fly(){
        this.band.bodyB = null;
    }
display(){
    if(this.band.bodyB){
        var pointB = this.band.bodyB.position;
        var pointA = this.pointA;
        strokeWeight(4);

        line(pointA.x, pointA.y, pointB.x, pointB.y);
    }

}
}