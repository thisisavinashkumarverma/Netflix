import './footer.css'

export default function Footer(){

    return(
        <>
        <div className='footerContainer'>
        <div className="question">Question? call <a href="tel:000-800-919-1743">000-800-919-1743</a></div>

        <div className="anchorCont">
            <span className="contItem">
                <a href="">FAQ</a>
                <a href="">Invester Relation</a>
                <a href="">Privacy</a>
                <a href="">Speed Test</a>
            </span>
            <span className="contItem">
                <a href="">Help Centre</a>
            <a href="">Jobs</a>
            <a href="">Cookie Preferences</a>
            <a href="">Legal Notices</a>
            </span>
            <span className="contItem">
                <a href="">Account</a>
                <a href="">Way to Watch</a>
                <a href="">Corporate Information</a>
                <a href="">Only on Netflix</a>
            </span>
            <span className="contItem">
                <a href="">Media Centre</a>
                <a href="">Term of Use</a>
                <a href="">Contact Us</a>
                <a href="">Get In Touch</a>
            </span>
        </div>

        <div class="btn-group ">
        <button type="button" class="btn btn-danger dropdown-toggle lang" data-bs-toggle="dropdown" aria-expanded="false">
            Language
        </button>
        <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Hindi</a></li>
            <li><a class="dropdown-item" href="#">English</a></li>
            
        </ul>
        </div>

        <div className='net'>Netflix India</div>

        <div className='readmore'><h6>This page is protected by Google reCAPTCHA to ensure you're not a bot. <a href="">Learn more</a></h6></div>
        </div>
        </>
    )
}