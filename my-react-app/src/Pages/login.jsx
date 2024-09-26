import React from 'react'

import Authlayout from '../Components/Layouts/Authlayout'
import Formlogin from '../Components/Fragments/Formlogin'


function Login() {
  return (
    <div>
      <Authlayout children="Page Login" type="login">
        <Formlogin />
      </Authlayout>
    </div>
  )
}

export default Login
