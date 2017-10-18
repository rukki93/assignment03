var colorList = ['#e6ff62',
                 '#2ecea9',
                 '#006666',
                 '#ce632e'];

function setup() {
   createCanvas(500,500);

   }
   
function draw() {
   background(colorList[3]);
   noStroke();

         for(var x=0; x<=500; x+=100)
      {
         for(var y=0; y<=500; y+=100)
         {
            fill(color(colorList[0]));
            ellipse(x,y,100);
         }
      }

   for (var h=0; h<=500; h+=100)
   {
      for (var w=0; w<=500; w+=100)
      {
         push();
         translate(h,w);
         rotate(frameCount/15);
         fill(color(colorList[1]));
         ellipse(7.5,0,85);
         pop();
      }
   }
   
   for (var h=0; h<=500; h+=100)
   {
      for (var w=0; w<=500; w+=100)
      {
         push();
         translate(h,w);
         rotate(frameCount/15);
         fill(color(colorList[2]));
         ellipse(-5,0,60);
         pop();
      }
   }
   
   for (var h=0; h<=500; h+=100)
   {
      for (var w=0; w<=500; w+=100)
      {
         push();
         translate(h,w);
         rotate(frameCount/15);
         fill(color(colorList[3]));
         ellipse(7.5,0,35);
         pop();
      }
   }
   
      for (var h=0; h<=500; h+=100)
   {
      for (var w=0; w<=510; w+=100)
      {
         push();
         translate(h,w);
         rotate(frameCount/15);
         fill(color(colorList[0]));
         ellipse(-2.5,0,15);
         pop();
      }
   }

}