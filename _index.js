const defaultSidebarWidth = "5%"
const expandedSidebarWidth = "25%"
import {Pokedex} from "./pokedata.js"
console.log(Pokedex)


window.toggle_sidebar = function (){
    if (document.getElementById("sidebar").style.width === defaultSidebarWidth){
        document.getElementById("sidebar").style.width = expandedSidebarWidth;
        document.getElementById("entries").style.marginLeft = expandedSidebarWidth;
        document.getElementById("entries").style.width = "75%";
    }else{
        document.getElementById("sidebar").style.width = defaultSidebarWidth;
        document.getElementById("entries").style.marginLeft = defaultSidebarWidth;
        document.getElementById("entries").style.width = "95%";
    }
}


function creatEntry(name,dex){
    name = name.toLowerCase()
    let html = (
        "<div class = \"entry\">\n" +
            "    <span class=\"link\"></span>"+
        "        <img src=\"https://img.pokemondb.net/sprites/sword-shield/icon/"+name.replaceAll("’","").replaceAll(" ", "-").replaceAll(".", "").replace("basculin-white-striped", "basculin-red-striped").replaceAll("\u0301", "e")+".png\" alt=\""+name+"\" class = \"pokemon_image\">\n" +
        "        <h1 class = \"pokemon_title\">"+(name.charAt(0).toUpperCase()+name.slice(1))+"</h1>\n" +"" +
        "        <h2 class=\"pokemon_dexno\">#"+dex+"</h2>" +
        "    </div>"
    )
    const template = document.createElement("template");
    template.innerHTML = html.trim();
    document.getElementById("entries").appendChild(template.content.firstElementChild)
}



Object.values(Pokedex).forEach((item)=>{
    creatEntry(item.name, item.num)
})



