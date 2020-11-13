class Box{
    constructor(x, y, width, height, fill) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y, width, height, fill, options);
        this.width = width;
        this.height = height;
        
        
        World.add(world, this.body);
      }

      score(){
        var score = 0
        if(this.Visiblity<200 && this.Visiblity>0){
            score = score + 100
        }
      }

      display(){

      if(this.body.speed < 20){
        var pos =this.body.position;
      rectMode(CENTER);
      rect(pos.x, pos.y, this.width, this.height);
       }
       else{
         World.remove(world, this.body);
         push();
         this.Visiblity = this.Visiblity - 5;
         tint(255,this.Visiblity);
         pop();
       }
      

      }
}