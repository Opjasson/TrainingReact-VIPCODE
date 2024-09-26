import React from 'react'
import Formlogin from '../Fragments/Formlogin'
import { Link } from 'react-router-dom'

function Authlayout(props) {
    const { children, type } = props
  return (
    <div>
      <div className="flex justify-center items-center bg-blue-500 min-h-screen">
            <div className="w-80 bg-slate-100 rounded">
                <h1>{children}</h1>
                {type === "login" ? "Don't have a account?"
                : "Already have a account? "}
                {type === "login" && 
                  <Link to="/registrasi">Registrasi Disini!</Link>}
                {type === "registrasi" && 
                  <Link to="/login">Login Disini!</Link>}
            </div>
        </div>
    </div>
  )
}

export default Authlayout
