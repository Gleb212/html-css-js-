let edit = 0; //0 - это редактирование фона консоли 1 - редактирование шрифта


function console()
{
    edit = 0;
}

function font()
{
    edit = 1;
}

function edit_color(color)
{
    if(edit == 0)
    {
        document.getElementById('code').style.backgroundColor = color;
    }

    if(edit == 1)
    {
        document.getElementById('code').style.color = color;
    }
}