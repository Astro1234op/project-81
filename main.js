canvas = document.getElementById("myCanvas");
ctx= canvas.getContext("2d");

color = "red";

ctx.beginPath();
ctx.strokeStyle = "grey";
ctx.lineWidth = 4;
ctx.rect(90,120,430,200);
ctx.stroke();


ctx.beginPath();
ctx.strokeStyle = "blue";
ctx.lineWidth = 4;
ctx.arc(200, 210, 40, 0, 2*Math.PI);
ctx.stroke()

ctx.beginPath();
ctx.strokeStyle = "black";
ctx.lineWidth = 4;
ctx.arc(300, 210, 40, 0, 2*Math.PI);
ctx.stroke()

ctx.beginPath();
ctx.strokeStyle = "red";
ctx.lineWidth = 4;
ctx.arc(400, 210, 40, 0, 2*Math.PI);
ctx.stroke()

ctx.beginPath();
ctx.strokeStyle = "yellow";
ctx.lineWidth = 4;
ctx.arc(250, 250, 40, 0, 2*Math.PI);
ctx.stroke()

ctx.beginPath();
ctx.strokeStyle = "green";
ctx.lineWidth = 4;
ctx.arc(350, 250, 40, 0, 2*Math.PI);
ctx.stroke()

//canvas.addEventlistener("mousedown", my_mousedown);

//function my_mousedown(e)
{
      color = document.getElementById("color").value;
      console.log(color);


      mouse_x = e.cilentX - canvas.offersetLeft;
      mouse_y = e.cilentY - canvas.offersetTop;

      console.log("X = " + mouse_x +" , Y = " + mouse_y);
      circle(mouse_x, mouse_y);


}

//function cirlce(mouse_x, mouse_y)
{
    ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 5;
ctx.arc(250, 210, 40, 0, 2*Math.PI);
ctx.stroke()


}

//function clearArea()
{
    ctx.clearRect(0,0, canvas.width, canvas.height);
}