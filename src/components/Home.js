import './Home.css'
import '../App.css'
import pdf from '../assets/pdf/Sharath.pdf'


function Home() {
    return (
        <section >
            <div className="Myintro">
                <br />
                <br />
                <br />
                <h3>Hello, I'm </h3>

                <div className='Title'><h1 className="myName"> SHARATH S S </h1></div>
                <h3 className="">Software Developer</h3>
            </div>
            <div className="CV">
                <a download="Sharath.pdf" href= {pdf} className="downloadcv">
                    Download CV
                </a>
            </div>


            <div className="picturesandlink">


                <div className="one">
                    <div className="into_socialmedia">
                        <a href="mailto:sharathsharif@gmail.com" target="blank" className="into__social-link">
                        <i className="bi bi-envelope"></i>
                        </a>
                        <a href="https://github.com/Sharathsharif" target="blank" className="into__social-link">
                            <i className="bi bi-github"></i>
                        </a>
                        <a href="https://wa.me/qr/PLDCHPWKPYPPF1" target="blank" className="into__social-link">
                        <i className="bi bi-whatsapp"></i>
                        </a>
                    </div>
                </div>

                <div className="two">
                    <img src="/myimage.JPG" alt="" className="cvimage" />
                </div>

                <div className="three">
                    <a href="#About" className="home__scroll">
                        <i className="bi bi-mouse"> Scroll Down </i>
                        {/* <span className="home__scroll-name">  Scroll Down </span> */}
                    </a>
                </div>

            </div >

        </section>






    )
}

export default Home;