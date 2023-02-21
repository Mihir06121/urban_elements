const Footer = () => {
    return (
        <div style={{backgroundColor: '#d7b38c', textAlign: "center"}}  className="p-3 p-md-5">
            <div className="display-1">
                FOOTER
            </div>
            <hr className="mx-5" style={{backgroundColor: '#664229'}}/>
            <div className="row py-3 py-md-4">
                <div className="col">
                    Location
                </div>
                <div className="col">
                    Social Media Links
                </div>
            </div>
            <hr className="mx-5" style={{backgroundColor: '#664229'}}/>
            <div >
                <span>Copyright © 2023 urban elements</span>
            </div>
        </div>
    )
}

export default Footer