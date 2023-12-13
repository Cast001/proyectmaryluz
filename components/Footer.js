import React from 'react'

const Footer = () => {
    return (
        <>
            <div className="Footer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-lg-5 col-12 ft-1">
                            <h3><span>DESCRITO</span>COMO:</h3>
                            <p>Michael Jackson era bondadoso, frágil, sensible, emotivo y vulnerable. Así le describen sus familiares y amigos en la película 'Michael Jackson: la vida de un ídolo' y que ofrece un recorrido por la vida del 'rey del pop' desde sus inicios en los Jackson 5 hasta su muerte en 2009.</p>
                            <div className="footer-icons">
                                <i class="fa-brands fa-facebook"></i>
                                <i class="fa-brands fa-twitter"></i>
                                <i class="fa-brands fa-instagram"></i>
                                <i class="fa-brands fa-linkedin-in"></i>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 col-12 ft-2">
                            <h5>CONCIDERADO</h5>
                            <ul>
                                <li className="nav-item">
                                    <a className="" href="/">Cantante</a>
                                </li>
                                <li className="nav-item">
                                    <a className="" href="/">Bailarion</a>
                                </li>
                                <li className="nav-item">
                                    <a className="" href="/">Productor</a>
                                </li>
                                <li className="nav-item">
                                    <a className="" href="/">Icono Pop</a>
                                </li>
                                <li className="nav-item">
                                    <a className="" href="/">Compocitor</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-6 col-lg-4 col-12 ft-3">
                            <h5>Albunes Importantes</h5>
                            <p><i class="fa-solid fa-phone-volume"></i> Off the Wall (1979)</p>
                            <p><i class="fa-solid fa-envelope"></i> Thriller (1982)</p>
                            <p><i class="fa-solid fa-paper-plane"></i>The Very Best of The Jacksons. </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='Last-footer'>
                <p>Fallecio un 25 de junio de 2009, Holmby Hills, Los Ángeles, California, Estados Unidos</p>
            </div>
        </>
    )
}

export default Footer
