import React from 'react'


function Caloun() {
    return (
        <div>
<div class="container">
  <div class="mySlides">
    <div class="numbertext">1 / 6</div>
    <img src="IMG_4276.JPG" style={{width:'100%'}} />
  </div>

  <div class="mySlides">
    <div class="numbertext">2 / 6</div>
    <img src="IMG_4285.JPG" style={{width:'100%'}} />
  </div>

    
  <a class="prev" onclick="plusSlides(-1)">❮</a>
  <a class="next" onclick="plusSlides(1)">❯</a>

  <div class="caption-container">
    <p id="caption"></p>
  </div>

  <div class="row">
    <div class="column">
      <img class="demo cursor" src="IMG_4276.JPG" style={{width:'100%'}} onclick="currentSlide(1)" alt="The Woods" />
    </div>
    <div class="column">
      <img class="demo cursor" src="IMG_4285.JPG" style={{width:'100%'}} onclick="currentSlide(2)" alt="Cinque Terre" />
    </div>
</div>
</div>
            </div>
            
    )
}

export default Caloun
