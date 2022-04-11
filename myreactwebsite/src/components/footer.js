import React from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../components/footer.css';
//import '../../node_modules/ionicons/dist/ionicons.js'




export default function footer(){

    return(
        <div className="footer-dark">
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-sm-6 col-md-3 item">
                        <h3>Services</h3>
                        <ul>
                            <li><a href="#">Web design</a></li>
                            <li><a href="#">Development</a></li>
                            <li><a href="#">Hosting</a></li>
                        </ul>
                    </div>
                    <div className="col-sm-6 col-md-3 item">
                        <h3>About</h3>
                        <ul>
                            <li><a href="#">Company</a></li>
                            <li><a href="#">Team</a></li>
                            <li><a href="#">Careers</a></li>
                        </ul>
                    </div>
                    <div className="col-md-6 item text">
                        <h3>Company Name</h3>                       
                        <p>Praesent sed lobortis mi. Suspendisse vel placerat ligula. Vivamus ac sem lacus. Ut vehicula rhoncus elementum. Etiam quis tristique lectus. Aliquam in arcu eget velit pulvinar dictum vel in justo.</p>
                    </div>
                    <div className="col item social"><a href="#"><i><ion-icon name="logo-twitter"></ion-icon></i></a><a href="#"><i><ion-icon name="logo-twitch"></ion-icon></i></a><a href="#"><i><ion-icon name="logo-tumblr"></ion-icon></i></a><a href="#"><i> <ion-icon name="logo-tux"></ion-icon></i></a></div>
                </div>
                <p className="copyright">Company Name © 2018</p>
            </div>
           
        </footer>
        
       
    </div>


    )
}