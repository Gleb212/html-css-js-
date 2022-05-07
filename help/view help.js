var help_name = "t";
var a;

function add_help()
{
    a = document.getElementById(help_name);
}

function view()
{
    // let a = document.getElementById('t');
    
    a.style.marginLeft = `${event.clientX-7}px`;
    a.style.marginTop = `${event.clientY}px`;
    
    a.style.visibility = "visible";
}

function hide()
{
    a.style.visibility = "hidden";
}