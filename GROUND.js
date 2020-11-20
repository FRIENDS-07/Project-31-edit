class Ground{

    constructor(){

        this.body = Bodies.rectangle(240,680,460,20,{isStatic:true});
        this.width = 460;
        this.height = 20;
        World.add(world,this.body);

    }

    display(){
        rectMode(CENTER);
        fill(180,100,30);
        rect(this.body.position.x,this.body.position.y,this.width,this.height);
    }

}