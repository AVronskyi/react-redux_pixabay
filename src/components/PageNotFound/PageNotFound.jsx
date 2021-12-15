import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <>
      <div className="backLink">
        <Link to='/' className='link'>
          ᐸ Back To All images
        </Link>
      </div>
      <h1>Ooops... Page not found!</h1>
    </>
  );
}

export default PageNotFound;
