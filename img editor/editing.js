var paint_field = document.getElementById('paint');
var paint_img = paint_field.getContext('2d');

paint_img.fillStyle = "black";

var brush_size = 10;

var click = false;



var edit_modes = {1:function()
    {   
        paint_img.fillRect(event.clientX-paint_field.getBoundingClientRect().left-brush_size, event.clientY-paint_field.getBoundingClientRect().top-brush_size, brush_size, brush_size)
    },
    2:function()
    {
        paint_img.strokeRect(event.clientX-paint_field.getBoundingClientRect().left-brush_size, event.clientY-paint_field.getBoundingClientRect().top-brush_size, brush_size, brush_size)
    },

    3:function()
    {
        paint_img.clearRect(event.clientX-paint_field.getBoundingClientRect().left-brush_size, event.clientY-paint_field.getBoundingClientRect().top-brush_size, brush_size, brush_size)
    },

    4:function()
    {
        paint_img.beginPath();
        paint_img.moveTo(event.clientX-paint_field.getBoundingClientRect().left, event.clientY-paint_field.getBoundingClientRect().top);
        paint_img.lineTo(event.clientX-paint_field.getBoundingClientRect().left+20, event.clientY-paint_field.getBoundingClientRect().top-brush_size);
        paint_img.lineTo(event.clientX-paint_field.getBoundingClientRect().left+20, event.clientY-paint_field.getBoundingClientRect().top+(brush_size-(brush_size/2-10)));
        paint_img.fill();

        paint_img.closePath();
        paint_img.stroke();
    }
};
var now_mode = 1;

function paint()
{
    /* for(let q=0; q<paint_field.clientWidth; q+=100) 
    { 
        for(let i = 0; i<paint_field.clientWidth; i+=1)
        {
            paint_img.fillRect(event.clientX-i, 1, 10, 10);
        }
    }*/
    edit_modes[now_mode]();
}

function change_color(color)
{
    paint_img.fillStyle = color.value;
}

paint_field.onmousedown = function(event)
{
    click = true;
    paint();
};

paint_field.onmouseup = function(event)
{
    click = false;
};

paint_field.onmousemove = function(event)
{
    if(click)
    {
        paint();
    }
};

function save_img()
{
    result.src = paint_field.toDataURL("image/png");
}

function clear_img()
{
    paint_img.clearRect(0, 0, 4000, 4000);
}