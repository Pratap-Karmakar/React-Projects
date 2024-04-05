import React, { useCallback, useEffect, useState } from 'react'

const Pass = () => {

  const [length, setLength] = useState('8');
  const [password, setPassword] = useState('');
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [characterAllowed, setCharacterAllowed] = useState(false);

  const passworodGenerator = useCallback(()=>{
    let abc = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    let pass = '';

    if(numberAllowed){
      abc += '1234567890'
    }
    if(characterAllowed){
      abc += '!@#$%^&*()-_+'
    }


    for(let i = 0; i <= length; i++){
      let randomNumber = Math.floor(Math.random()*abc.length+1)

      pass += abc.charAt(randomNumber)
      console.log(pass);
    }

    setPassword(pass)

  },[length, numberAllowed, characterAllowed, setPassword])


  useEffect(()=>{
    passworodGenerator()
  },[length, numberAllowed, characterAllowed, setPassword])

  const copyPass=()=>{
    window.navigator.clipboard.writeText(password)
  }

  return (
    <div>
      <input type="text" value={password}/>
      <button onClick={copyPass}>Copy</button>

      <input type="range" onChange={(e)=>{
        setLength(e.target.value)
      }}/>
      <label>Range:{length}</label>

      <input type="checkbox" onChange={()=>{
        setNumberAllowed((prev)=>{
          return !prev
        })
      }}/>
      <label >Number</label>
      <input type="checkbox" onChange={()=>{
        setCharacterAllowed((prev)=>{
          return !prev
        })
      }}/>
      <label >Character</label>
    </div>
  )
}

export default Pass