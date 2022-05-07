var elems = document.body.childNodes;
var tmp = 0;

function load_elems()
{
	try
	{
		if(elems[tmp] != "[object HTMLScriptElement]" & elems[tmp].id != "reg")
		{
			elems[tmp].style.display = "block";
		}
	}
	catch{}

	tmp += 1;

	if(elems.length > tmp)
	{
		setTimeout(load_elems, 100);
	}
	else
	{
		return;
	}
}