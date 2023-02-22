import { Link } from "react-router-dom"
import Footer from "../components/Footer"
import proj_1_1 from "../assets/proj_1/proj_1_1.jpg"
const Portfolio = () => {
    return (
        <div className="">
            <div className="">
                <div className="d-flex justify-content-center align-items-center py-2 py-md-5" style={{backgroundColor: '#d7b38c', height: '50vh'}}>
                    <div className="text-center" data-aos="fade-up">
                        <span className="display-1">Portfolio</span>
                        <div className="d-flex justify-content-end" data-aos="fade-right" data-aos-delay="300">
                            {/* <p className="m-0">- Designing spaces that tell your story.</p> */}
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <section className="proj-cards-wrapper">
                <div className="proj-card-grid-space">
                    <div className="num">01</div>
                    <Link className="proj-card shadow" to="/gallery" 
                    style={{backgroundImage: `url(${proj_1_1})`}}>
                    <div>
                        <h1 className="project_head">Luxurious Brown</h1>
                        <p></p>
                        <div className="proj-tags">
                        {/* <div className="proj-tag">HTML</div> */}
                        </div>
                    </div>
                    </Link>
                </div>
                </section>
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    )
}

export default Portfolio