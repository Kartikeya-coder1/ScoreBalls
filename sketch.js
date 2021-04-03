var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles,t1,t2,t3,t4,t5,t6,t7,t8,t9,t10,t11,x;
var divisions = [];
var plinkos = [];
// var 

var divisionHeight=300;
var score =0;
var count = 0
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    
    
  
    
}
 



function draw() {
  background("black");
  textSize(20)
 
 t1 = text("Score : "+score,20,30);
 t2 = text("500" , 20,530)
//  t2.y = 530
 t3 =text("500", 100,530)
 t4 = text("500" , 180,530)
 t5 = text("500" , 260,530)
 t6 = text("100" , 340,530)
 t7 = text("100" , 420,530)
 t8 = text("100" , 500,530)
 t9 = text("200" , 580,530)
 t10 = text("200" , 660,530)
 t11 = text("200" , 740,530)
  Engine.update(engine);
 
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }

 
  // for (var j = 0; j < particles.length; j++) {
   
  //    particles[j].display();
  //  }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();

     
   }
   
  //  mousePressed();
    console.log(count)

   if(count>=5){
     textSize(50)
     fill("white")
     strokeWeight(5)
     stroke("red")
     text("GAME OVER",300,340)
    
    particles = null
    // score = 0

   }


   ///////////////////////////////////////////////////////////////////////////// 
    if(particles != null){
      particles.display()
      if(particles.body.position.y>760){
        if(particles.body.position.x<0){
          score = score+0
          particles = null
        }
      }
    }

    if(particles != null){
      particles.display()
      if(particles.body.position.y>760){
        if(particles.body.position.x<320){
          score = score+500
          particles = null
        }
      }
    }

    if(particles != null){
      particles.display()
      if(particles.body.position.y>760){
        if(particles.body.position.x<560){
          score = score+100
          particles = null
        }
      }
    }
    if(particles != null){
      particles.display()
      if(particles.body.position.y>760){
        if(particles.body.position.x<800){
          score = score+200
          particles = null
        }
      }
    }
}




function scorer(){
  x = Math.round(random(50,800 % 5===0))
  console.log(x)
}
function mousePressed(){
  particles = new Particle(random(10,790),random(10,70),10)
  count = count+1
  scorer();

}
