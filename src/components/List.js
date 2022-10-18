import React from 'react'

function List(props) {

    const {name, picture} = props

  return (
    <div>

        <p> {name} </p>

        <img  src={picture}  width={100} alt="passed food pic"  />

    </div>
  )
}

export default List