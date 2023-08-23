import React from 'react'

export default function Pokemon({pokemon}) {
  return (
    <div>
        {pokemon.map(p=><p>{p}</p>)}
    </div>
  )
}
