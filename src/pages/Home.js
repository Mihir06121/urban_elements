import home_banner_logo from "../assets/ue_logo_sm.png"
import home_banner_1 from "../assets/UE_12.jpg"
import Footer from "../components/Footer";

const Home = () => {

  return (
    <div>
      <div className="home_banner_div" data-aos="fade-in" data-aos-delay="">
        <div className="home_banner_text">
          <div className="text-center" data-aos="fade-up" data-aos-delay="800">
            <img className="rounded-circle" src={home_banner_logo} alt="Urban Elements Logo" style={{ height: '25vh'}} />
          <h1 className="display-1 text-center" data-aos="fade-up" data-aos-delay="1000">
            <strong style={{color: '#d7b38c',  textShadow: '0px 2px 50px #000000'}}>Urban Elements</strong>
          </h1>
          </div>
        </div>
      </div>
      <div className="py-3 py-md-5">
        <div className="mx-auto col-10 text-center">
          <span className="display-2">
            <span data-aos="fade-in" data-aos-delay="300">Your </span>
            <span data-aos="fade-in" data-aos-delay="500">vision, </span>
            <span data-aos="fade-in" data-aos-delay="700">our </span>
            <span data-aos="fade-in" data-aos-delay="900">design </span><br/>
            </span><span className="display-4 text-thin" data-aos="fade-up" data-aos-delay="1200">- a perfect match.</span>
        </div>
      </div>
      <div data-aos="flip-left">
        <hr className="mx-auto col-6" style={{padding: '0.1rem'}}/>
      </div>
      <div className="py-3 py-md-5">
        <div className="" data-aos="fade-up" data-aos-delay="500">
          <h1 className="display-2 text-center">
            Picture of One Design
          </h1>
        </div>
        <div className="mx-auto d-flex justify-content-center align-items-center">
          <div className="p-md-5 p-3 row container-fluid d-flex justify-content-center align-items-center">
            <div className="col-md-4">
              <div className="floating" data-aos="fade-up" data-aos-delay="700">
                <img className="img-fluid img_ani p-2 shadow" src={home_banner_1} alt="Urban Elements Logo" style={{ border: '2px solid #d7b38c',  height: '50vh'}} />
              </div>
            </div>
            <div className="col-md-4 py-5" data-aos="fade-right" data-aos-delay="300">
              <h5 className="text-center">
                Ubarn elements comes from urbanisation of your home with better quality and better standard of living. 
                To Recreate the art and shaping cities and towns by giving them form and character. 
                We are a simple unit and we look forward to be combined into more complex whole o an urban quarter or city. 
                We make sure to give the best cost with the best quality of furniture, beautiful designs that are breathetaking to look at and the best premium lifestyle. 
              </h5>
            </div>
          </div>
        </div>
        {/* <div className="col-12">
          <div className="parallax">
          <div className="parallax-group">
            <div className="layer dumm"></div>
            <img className="layer dumm m-5 img-fluid img_ani p-2" 
            src={home_banner_1} alt="Urban Elements Logo" style={{ 
              border: '2px solid #d7b38c !important', 
              objectFit: "contain", 
              height: '100%'}} />
            <div className="layer dumm"></div>
          </div>
        </div>
        </div> */}
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  );
}

export default Home;