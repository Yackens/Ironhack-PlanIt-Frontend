import React from 'react'

function Home() {
  return (
   <div>
    <h1>Just plan it!</h1>

    <form>
    <label>
      Username:
      <input/>
    </label>
    </form>

    <form>
    <label>
      Password:
      <input/>
    </label>
    </form>

    <button>LogIn</button>
    <button>SignUp</button>
    </div> 
  )

}

export default Home