import React from 'react'
import Authlayout from '../Components/Layouts/Authlayout'
import Formregis from '../Components/Fragments/Formregis'

function Regis() {
  return (
    <div>
      <Authlayout children="Page Register" type="registrasi">
        <Formregis />
      </Authlayout>
    </div>
  )
}

export default Regis
