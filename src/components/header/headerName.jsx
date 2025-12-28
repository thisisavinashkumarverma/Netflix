import './headerName.css'

export default function HeaderName(){
    return (
        <><div className='shade'></div>
            <div className="top">
            <div className=" logo">
                <img src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-12-03/consent/87b6a5c0-0104-4e96-a291-092c11350111/019ae4b5-d8fb-7693-90ba-7a61d24a8837/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="" />
            </div>
            <div className="sign-in">
               
        <div class="btn-group ">
        <button type="button" class="btn btn-danger dropdown-toggle lang" data-bs-toggle="dropdown" aria-expanded="false">
            Language
        </button>
        <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Hindi</a></li>
            <li><a class="dropdown-item" href="#">English</a></li>
            
        </ul>
        </div>
                <button>Sign In</button>
            </div>
        </div>
        
        
        
        </>
    )
}