import { Link } from "react-router-dom"
import Footer from "../components/Footer"

const Portfolio = () => {
    return (
        <div className="">
            <div className="">
                <div className="d-flex justify-content-center align-items-center py-2 py-md-5" style={{backgroundColor: '#d7b38c', height: '50vh'}}>
                    <div className="text-center" data-aos="fade-up">
                        <span className="display-1">Portfolio</span>
                        <div className="d-flex justify-content-end" data-aos="fade-right" data-aos-delay="300">
                            <p className="m-0">- Designing spaces that tell your story.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <section className="proj-cards-wrapper">
                <div className="proj-card-grid-space">
                    <div className="num">01</div>
                    <a className="proj-card shadow" href="https://codetheweb.blog/2017/10/06/html-syntax/" 
                    style={{backgroundImage: "url(https://images1-focus-opensocial.googleusercontent.com/gadgets/proxy?container=focus&resize_w=1500&url=https://codetheweb.blog/assets/img/posts/html-syntax/cover.jpg)"}}>
                    <div>
                        <h1>HTML Syntax</h1>
                        <p>The syntax of a language is how it works. How to actually write it. Learn HTML syntax…</p>
                        <div className="date">6 Oct 2017</div>
                        <div className="proj-tags">
                        <div className="proj-tag">HTML</div>
                        </div>
                    </div>
                    </a>
                </div>
                <div className="proj-card-grid-space">
                    <div className="num">02</div>
                    <a className="proj-card shadow" href="https://codetheweb.blog/2017/10/09/basic-types-of-html-proj-tags/" 
                    style={{backgroundImage: "url(https://images1-focus-opensocial.googleusercontent.com/gadgets/proxy?container=focus&resize_w=1500&url=https://codetheweb.blog/assets/img/posts/html-syntax/cover.jpg)"}}>
                    <div>
                        <h1>Basic types of HTML proj-tags</h1>
                        <p>Learn about some of the most common HTML proj-tags…</p>
                        <div className="date">9 Oct 2017</div>
                        <div className="proj-tags">
                        <div className="proj-tag">HTML</div>
                        </div>
                    </div>
                    </a>
                </div>
                <div className="proj-card-grid-space">
                    <div className="num">03</div>
                    <a className="proj-card shadow" href="https://codetheweb.blog/2017/10/14/links-images-about-file-paths/"  
                    style={{backgroundImage: "url(https://images1-focus-opensocial.googleusercontent.com/gadgets/proxy?container=focus&resize_w=1500&url=https://codetheweb.blog/assets/img/posts/html-syntax/cover.jpg)"}}>
                    <div>
                        <h1>Links, images and about file paths</h1>
                        <p>Learn how to use links and images along with file paths…</p>
                        <div className="date">14 Oct 2017</div>
                        <div className="proj-tags">
                        <div className="proj-tag">HTML</div>
                        </div>
                    </div>
                    </a>
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