
import React, { useEffect } from 'react'

function login() {
  console.log("Workin")
  
}


export default function MaiarAppLogin() {
  useEffect(() => {
    login()

    return () => {
    }
  }, [])

  return (
    <div>MaiarAppLogin</div>
  )
}
