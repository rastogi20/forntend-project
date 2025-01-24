// Toggle menu visibility
const toggleMenuButton=document.getElementById("toggle-menu");
const menuItems=document.getElementById("menu-items");

toggleMenuButton.addEventListener("click", () => {
  menuItems.style.display=menuItems.style.display==="none"||menuItems.style.display===""
      ? "block"
      : "none";
});

// Adjust page size based on screen width
function adjustPageSize(){
  const screenWidth=window.innerWidth;
  let scale=1;

  if (screenWidth<=600) {
    scale=0.5;
  } else if(screenWidth <= 700) {
    scale=0.75;
  } else if(screenWidth <= 767) {
    scale=0.8;
  } else if (screenWidth <= 1600) {
    scale=0.9;
  }

  document.body.style.transform=`scale(${scale})`;
  document.body.style.transformOrigin="top left";
}

// Call function on load and resize
window.addEventListener("resize", adjustPageSize);
window.addEventListener("load", adjustPageSize);
