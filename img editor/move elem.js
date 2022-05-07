var moving = false;

var menu = document.getElementById('menu');

for(var elem of document.getElementsByClassName('move_card'))
{
    elem.onmousedown = function(event)
    {
        moving = true;
    };

    document.querySelector('html').onmouseup = function()
    {
        moving = false; 
    };
    
    document.querySelector('html').onmousemove = function(event)
    {
        elem.childNodes[1].onmousemove = function(e)
        {
            moving = false;
        };
    

        if(moving == true)
        {
            
            elem.style.marginLeft = `${event.clientX-elem.clientWidth-4}px`;

            if(Number(elem.style.marginLeft.replace('px', '')) > menu.clientWidth-5)
            {
                document.querySelector('body').append(elem);

                elem.style.marginTop = `${event.clientY-elem.clientHeight/2-330}px`;
            }

            else if(Number(elem.style.marginLeft.replace('px', '')) < menu.clientWidth-5)
            {
                menu.append(elem);

                elem.style.marginTop = `${event.clientY-elem.clientHeight+5}px`;
            }

            
        }
    };
    
}