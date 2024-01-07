

function Home() {
    return (
        <section >
            <div className="Myintro">
                <br />
                <h3>Hello, I'm </h3>

                <h1 className="myName"> SHARATH S S </h1>
                <h3 className="">Software Developer</h3>
            </div>
            <div className="CV">
                <a download="pdf" href="../assets" className="downloadcv">
                    Download CV
                </a>
            </div>


            <div className="picturesandlink">


                <div className="one">
                    <div className="into_socialmedia">
                        <a href="https://www.facebook.com/" target="blank" className="into__social-link">
                            <i class="bi bi-facebook"></i>
                        </a>
                        <a href="https://github.com/Sharathsharif" target="blank" className="intro__social-link">
                            <i class="bi bi-github"></i>
                        </a>
                        <a href="https://www.instagram.com/" target="blank" className="intro__social-link">
                            <i class="bi bi-instagram"></i>
                        </a>
                    </div>
                </div>

                <div className="two">
                    <img src="/myimage.JPG" alt="" className="cvimage" />
                </div>

                <div className="three">
                    <a href="#about" className="home__scroll">
                        <i class="bi bi-mouse"></i>
                        <span className="home__scroll-name"> Scroll Down </span>
                    </a>
                </div>

            </div >

        </section>






    )
}

export default Home;