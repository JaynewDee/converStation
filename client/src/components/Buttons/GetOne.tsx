import React, { useState } from 'react'

const GetOne: React.FC = () => {

    const [dialogue, setPair] = useState([])
    console.log(dialogue);


    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(e.target)
            await fetch('/api/completions', {
            method: 'POST'
            })
            .then((result) => result.json())
            .then((data) => setPair(data.data))
            .catch((err) => console.error(err))
    }


  return (
      <>
      
    <input type="button" value="CURIE" onClick={handleSubmit}></input>
    </>
  )
}

export default GetOne;