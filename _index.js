const defaultSidebarWidth = "5%"
const expandedSidebarWidth = "25%"
import {Pokedex} from "./pokedata.js"
console.log(Pokedex)

console.log(Pokedex.avalugg.name)

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
