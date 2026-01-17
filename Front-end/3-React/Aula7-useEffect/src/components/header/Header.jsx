import React, { useEffect } from 'react'

const Header = () => {

    useEffect(()=>{
    alert("Aula de useEffect")

  }, [])
  return (
    <header>
      EU SOU O HEADER
    </header>
  )
}

export default Header
