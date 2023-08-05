import React from 'react'
import { Link } from "react-router-dom";

function Home() {
  return (
   <div>
    
        <div id="logo">
            <Link to='/'>
                <p>PlanIt</p>
            </Link>
         </div>
    

    <h1>Just plan it!</h1>

    <form>
    <label>
      Username
      <input/>
    </label>
    </form>

    <form>
    <label>
      Password
      <input/>
    </label>
    </form>

    <button>LogIn</button>
    <button>SignUp</button>
    </div> 
  )

}

export default Home