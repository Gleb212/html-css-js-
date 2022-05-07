var visible = false;
var anim_text = {false:"<", true:">"};

function visible_menu()
{
    if(visible)
    {
        menu.style.animation = "close_menu 1s";
    }

    else if(visible == false)
    {
        menu.style.animation = "open_menu 1s";
    }

    menu.style.animationFillMode = 'forwards';

    document.getElementsByClassName('visib')[0].textContent = anim_text[visible];

    visible = Boolean(visible-1);
}

function range_text(elem, elem_edit, index=0)
{
    elem.parentElement.getElementsByClassName(elem_edit)[index].textContent = elem.value;

    brush_size = elem.value;
}

var brushes_visib = false;
var brushes_menu = document.getElementById('brushes');

var brushes_bt = document.getElementById('brushes_view');

function visible_brushes()
{
    if(brushes_visib)
    {
        brushes_menu.style.display = "none";
    }

    else
    {
        brushes_menu.style.display = "block";

        brushes_menu.style.marginTop = `${brushes_bt.getBoundingClientRect().y}px`;
        brushes_menu.style.marginLeft = `${brushes_bt.getBoundingClientRect().x}px`;
    }

    brushes_visib = Boolean(brushes_visib-1);
}