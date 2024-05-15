export default function LandingPage(){
    return(
        <section style={{height: "100vh", backgroundImage: `url(${require('../components/AdministratorManagement/img/img11.jpg')})`, backgroundSize: "cover", backgroundPosition: "center"}}>
            <div style={{height: "100%"}} className="container-fluid d-flex justify-content-center align-items-center">
                <div>
                    <a href='/Dashboard'>
                        <div className="pt-1 mb-4">
                            <button className="btn btn-outline-danger btn-lg btn-block" type="submit">AdminLogin</button>
                        </div>
                    </a>
                </div>
            </div>
        </section>
    )
}


