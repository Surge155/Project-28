class stone{        
    consructor(bodyA,pointB){
        var options = {    
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB;
        this.Stone = Constraint.create(options);
        World.add(world,this.Stone);
        this.image = loadImage("images/stone.png");
    }


    display(){
        image(this.image,200,500);

    }


}