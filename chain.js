class Chain {
    constructor(bodyA , pointB , length , stiffness){
    
        var options={
            
    bodyA:bodyA,
    pointB:pointB,
    length:length,
    stiffness:stiffness,
    
        }
    this.chain = Constraint.create(options)
    this.pointB = pointB

    
    World.add(world , this.chain);
    
    }
    display(){
        
        if(this.chain.bodyA){
    var posA = this.chain.bodyA.position;
    var posb = this.pointB
    strokeWeight(3)
    stroke(48,23,8)
    line(posA.x , posA.y,posb.x , posb.y)
    
            }
    }
    fly(){
    this.chain.bodyA = null
    
    }
    attach(body){
        this.chain.bodyA=body 
       
     }
    }