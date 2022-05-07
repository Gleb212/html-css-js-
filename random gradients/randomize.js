colors = ["IndianRed", "LightCoral", "Salmon", "DarkSalmon", "LightSalmon", "Crimson", "Red", "FireBrick", "DarkRed", "Pink", "LightPink", "HotPink", "DeepPink", "MediumVioletRed", "PaleVioletRed", "LightSalmon", "Coral", "Tomato", "OrangeRed", "DarkOrange", "Orange", "Gold", "Yellow", "LightYellow", "LemonChiffon", "LightGoldenrodYellow", "PapayaWhip", "Moccasin", "PeachPuff", "PaleGoldenrod", "Khaki", "DarkKhaki", "Lavender", "Thistle", "Plum", "Violet", "Orchid", "Fuchsia", "Magenta", "MediumOrchid", "MediumPurple", "RebeccaPurple", "BlueViolet", "DarkViolet", "DarkOrchid", "DarkMagenta", "Purple", "Indigo", "SlateBlue", "DarkSlateBlue", "MediumSlateBlue", "GreenYellow", "Chartreuse", "LawnGreen", "Lime", "LimeGreen", "PaleGreen", "LightGreen", "MediumSpringGreen", "SpringGreen", "MediumSeaGreen", "SeaGreen", "ForestGreen", "Green", "DarkGreen", "YellowGreen", "OliveDrab", "Olive", "DarkOliveGreen", "MediumAquamarine", "DarkSeaGreen", "LightSeaGreen", "DarkCyan", "Teal", "Aqua", "Cyan", "LightCyan", "PaleTurquoise", "Aquamarine", "Turquoise", "MediumTurquoise", "DarkTurquoise", "CadetBlue", "SteelBlue", "LightSteelBlue", "PowderBlue", "LightBlue", "SkyBlue", "LightSkyBlue", "DeepSkyBlue", "DodgerBlue", "CornflowerBlue", "Blue", "Brown", "White", "Gray"];


max_colors = {2:["50%", "100%"],
3:["33%", "66%", "100%"],
4:["25%", "50%", "75%", "100%"]
};

function r(min, max) 
{
	return Math.floor(Math.random() * (max - min + 1)) + min;
}
function grid_colors()
{
    for(let i of document.getElementsByClassName('rand_gradient'))
    {
        let tmp = "";
        let r_int = r(2, 4);
        

        for(let q = 0; q < r_int; q++)
        {
            tmp += `${colors[r(0, colors.length)]} ${max_colors[r_int][q]}`;

            if(r_int-q != 1)
            {
                tmp += ", ";
            }
        }
        
        
        i.style = "background-image: linear-gradient(to right, " + tmp + ");";
    }
}