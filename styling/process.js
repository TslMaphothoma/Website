function hide(id)
{
    document.getElementById(id).style.display = "none";
}
function show(id)
{
    document.getElementById(id).style.display = "block";
}
hide("bt");
hide("connect");
document.getElementById("cv").onclick = function()
{
    hide("aboutMe");
    hide("connect");
    document.getElementById("about").style.backgroundColor = 'rgb(255,255,255)';
    document.getElementById("about").style.color = 'rgb(0,0,0)';
    document.getElementById("contact").style.backgroundColor = 'rgb(255,255,255)';
    document.getElementById("contact").style.color = 'rgb(0,0,0)';

    show("bt");
    document.getElementById("cv").style.backgroundColor = 'rgb(0, 183, 255)';
    document.getElementById("cv").style.color = 'rgb(255,255,255)';
}
document.getElementById("contact").onclick = function()
{
    hide("aboutMe");
    hide("bt");
    document.getElementById("about").style.backgroundColor = 'rgb(255,255,255)';
    document.getElementById("about").style.color = 'rgb(0,0,0)';
    document.getElementById("cv").style.backgroundColor = 'rgb(255,255,255)';
    document.getElementById("cv").style.color = 'rgb(0,0,0)';

    show("connect");
    document.getElementById("contact").style.backgroundColor = 'rgb(0, 183, 255)';
    document.getElementById("contact").style.color = 'rgb(255,255,255)';
}
document.getElementById("about").onclick = function()
{
    location.reload();
}
