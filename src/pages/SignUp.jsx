import React from 'react'
import { Link } from "react-router-dom";

function SignUp() {
  return (
    <div>
        <div id="logo">
            <Link to='/'>
                <p>PlanIt</p>
            </Link>
         </div>

        <h2>SignUp</h2>

        <form>
    <label>
      E-Mail
      <input/>
    </label>
    </form>

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

    <button>SignUp</button>
        
    </div>
  )
}

export default SignUp