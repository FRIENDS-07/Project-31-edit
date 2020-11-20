class Division{

    constructor(x){

        this.body = Bodies.rectangle(x,570,10,200,{isStatic:true});
        this.width = 10;
        this.height = 200;
        World.add(world,this.body);

    }

    display(){
        rectMode(CENTER);
        fill(180,100,30);
        rect(this.body.position.x,this.body.position.y,this.width,this.height);
    }

}