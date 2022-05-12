import React from 'react'
import { Linked } from '../sass/styled/Styled.styled'

function SocialButton() {
  return (
    <div className="social">
      <Linked className="social-facebook" to="">
        <i className="fa-solid fa-phone"></i>
      </Linked>
      <Linked className="social-facebook" to="">
        <i className="fa-brands fa-facebook-f"></i>      
      </Linked>
    </div>
  )
}

export default SocialButton