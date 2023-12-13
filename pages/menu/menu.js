import { Button, Stack } from "react-bootstrap";
import imagen1 from "./assets/Portada (1).jpg";
import imagen2 from "./assets/Portada (2).jpg";
import imagen3 from "./assets/Portada (3).jpg";

const Menu = (props) => {
  return (
    <div id="carouselExampleCaptions" class="carousel slide">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
    <img src={imagen1} className="d-block w-100" alt="..." />
      <div class="carousel-caption d-none d-md-block">
        <h5>Michael Jackson, el conocido "rey del pop"</h5>
        <p>falleció el 25 de junio de 2009 a los 50 años de edad. Jackson era un laureado cantante, bailarín, productor, compositor, actor y hasta ícono de la moda para sus</p>
      </div>
    </div>
    <div class="carousel-item">
    <img src={imagen2} className="d-block w-100" alt="..." />
      <div class="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div class="carousel-item">
    <img src={imagen3} className="d-block w-100" alt="..." />
      <div class="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    
  );
};

export default Menu;
