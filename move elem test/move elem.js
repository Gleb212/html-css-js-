var elem = document.getElementById('move_elem');

var moving = false;

elem.onmousedown = function(event)
{
    moving = true;
};

document.querySelector('html').onmouseup = function()
{
    moving = false; 
};

document.querySelector('body').parentElement.onmousemove = function(event)
{
    if(moving == true)
    {
        elem.style.marginTop = `${event.clientY}px`;
        elem.style.marginLeft = `${event.clientX}px`;

    }
};