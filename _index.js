const defaultSidebarWidth = "5%"
const expandedSidebarWidth = "25%"


function toggle_sidebar(){
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


function w3_open() {
    document.getElementById("main").style.marginLeft = "25%";
    document.getElementById("mySidebar").style.width = "25%";
    document.getElementById("mySidebar").style.display = "block";
    document.getElementById("openNav").style.display = 'none';
}
function w3_close() {
    document.getElementById("main").style.marginLeft = "0%";
    document.getElementById("mySidebar").style.display = "none";
    document.getElementById("openNav").style.display = "inline-block";
}