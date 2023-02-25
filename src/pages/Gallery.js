import Footer from "../components/Footer"

const Gallery = () => {
    return (
        <div className="" id="gallery">
            <div className="">
                <div className="d-flex justify-content-center align-items-center py-2 py-md-5 bg_body" data-aos="fade-down" data-aos-delay="200">
                    <div className="text-center" data-aos="fade-down" data-aos-delay="400" data-aos-duration="200" >
                        <span className="display-1"><b>Gallery</b></span>
                        <div className="d-flex justify-content-end" data-aos="fade-right" data-aos-delay="500">
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="py-3 py-md-5">
                    {/* <div className="mx-auto col-10 col-md-6" data-aos="fade-up" data-aos-delay="400">
                        <p className="fs-4">
                            Our goal is to achieve the sub par standard of living and making our home as beautiful 
                            as our soul. We ensure that you get all the things that you ask for starting from your 
                            wall paint till your furniture. We expertise in designing modern residents, commercial 
                            sites and hospitality. 
                        </p>
                    </div> */}
                </div>
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    )
}

export default Gallery