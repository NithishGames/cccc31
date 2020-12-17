class Plinkos {
    constructor(x,y,radius){
        var options = {
            isStatic: true
        }
        this.body = Bodies.circle(x,y,radius = 10 , options)
    }
    display(){
        var pos = this.body.position
        rectMode(CENTER);
        fill("brown");
        rect(pos.x,pos.y,this.radius);
    }
}