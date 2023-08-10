import { Link } from "react-router-dom";
import React from 'react'

function page404() {
  return (
    <>
    <h1>Error 404. Page not found.</h1>

    <Link to='/categories'>
        <p>Go Back to Main Page.</p>
    </Link>
    </>
  )
}

export default page404;
