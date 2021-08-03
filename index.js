function setPanels(){
let windowWidth = window.innerWidth;
if(windowWidth < 800) {
    document.getElementById("header-img").src="images/mobile/image-header.jpg";
    document.getElementById('egg-img').src="images/mobile/image-transform.jpg";
    document.getElementById('stand-out-img').src="images/mobile/image-stand-out.jpg";
    document.getElementById('cherry-img').src="images/mobile/image-graphic-design.jpg";
    document.getElementById('photo-img').src="images/mobile/image-photography.jpg";
    document.getElementById('milk-img').src="images/mobile/image-gallery-milkbottles.jpg";
    document.getElementById('orange-img').src="images/mobile/image-gallery-orange.jpg";
    document.getElementById('cone-img').src="images/mobile/image-gallery-cone.jpg";
    document.getElementById('sugar-img').src="images/mobile/image-gallery-sugar-cubes.jpg";
  } else {
    document.getElementById("header-img").src="images/desktop/image-header.jpg";
    document.getElementById("egg-img").src="images/desktop/image-transform.jpg";
    document.getElementById("stand-out-img").src="images/desktop/image-stand-out.jpg";
    document.getElementById("cherry-img").src="images/desktop/image-graphic-design.jpg";
    document.getElementById("photo-img").src="images/desktop/image-photography.jpg";
    document.getElementById("milk-img").src="images/desktop/image-gallery-milkbottles.jpg";
    document.getElementById("orange-img").src="images/desktop/image-gallery-orange.jpg";
    document.getElementById("cone-img").src="images/desktop/image-gallery-cone.jpg";
    document.getElementById("sugar-img").src="images/desktop/image-gallery-sugarcubes.jpg";
  }}