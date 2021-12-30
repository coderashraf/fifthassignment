import React from "react";

const PageNotFound = () =>{
  const pathname = window.location.pathname
  return <h2>{pathname}</h2>
}

export default PageNotFound;