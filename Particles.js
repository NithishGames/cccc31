class Particles {
    constructor(x,y,radius){
        var options = {
            'restitution': 1,
            'friction':0.1,
            'density': 1.0
            
        }
        this.body = Bodies.circle(x,y,this.radius,options);
        this.color = color (random(0,255),random(0,255),random(0,255));
        this.radius = radius

        World.add(world,this.body);
        
        
    }
    display(){  
        var pos = this.body.position
        rectMode(CENTER)
        rect(pos.x,pos.y,this.radius)
    }
}