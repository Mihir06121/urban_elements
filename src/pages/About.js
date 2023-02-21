import { Link } from "react-router-dom"
import Footer from "../components/Footer"

const About = () => {
    return (
        <div className="">
            <div className="">
                <div className="d-flex justify-content-center align-items-center py-2 py-md-5" 
                data-aos="fade-in" data-aos-duration="2000" style={{backgroundColor: '#d7b38c', height: '50vh'}}>
                    <div className="text-center" data-aos="fade-up" data-aos-delay="200">
                        <span className="display-1">ABOUT US</span>
                        <div className="d-flex justify-content-end" data-aos="fade-right" data-aos-delay="500">
                            <p className="m-0">- Designing spaces that tell your story.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="py-3 py-md-5">
                    <div className="mx-auto col-10 col-md-6" data-aos="fade-up" data-aos-delay="500">
                        <p className="fs-4">
                            Our goal is to achieve the sub par standard of living and making our home as beautiful 
                            as our soul. We ensure that you get all the things that you ask for starting from your 
                            wall paint till your furniture. We expertise in designing modern residents, commercial 
                            sites and hospitality. 
                        </p>
                    </div>
                </div>
            </div>
            <div>
                <div className="">
                    <p className="fs-3 text-center">OUR TEAM</p>
                </div>
                <div className="py-3 py-md-5">
                  <div className="d-flex justify-content-center row row-cols-1 row-cols-md-3 g-4">
                    <div className="col">
                      <div className="card h-100 border-0 rounded-lg p-2" style={{boxShadow: '0px 10px 20px #664229'}}>
                        <img src="..." className="card-img-top" alt="Avinash Dhavan"/>
                        <div className="card-body">
                          <h3 className="card-title fs-2 text-center"><b>Avinash Dhavan</b></h3>
                          <span className="card-text fs-4">Starting up as an interior designer has it own perks. 
                          You get to meet various people with their creativity and which helps us with the 
                          growth, we believe in quality over quantity so that our customer satisfaction 
                          is 100% this way we know how we manage our projects and help our clients transform 
                          their houses to beautiful homes. </span>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="card h-100 border-0 rounded-lg p-2" style={{boxShadow: '0px 10px 20px #664229'}}>
                        <img src="..." className="card-img-top" alt="Khyati Shah"/>
                        <div className="card-body">
                          <h3 className="card-title fs-2 text-center"><b>Khyati Shah</b></h3>
                          <span className="card-text fs-4 text-justify">Managing and handling project is a part of work which eventually 
                          leads to getting in clients and more references. Our office environment is such that no 
                          employee has to worry about their leaves, any emergencies and their problems because we 
                          are here to help them all.</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            <div>
                <Footer/>
            </div>
        </div>
    )
}

export default About