import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Games = () => {
    const gameStore = useSelector(store=>store.game)
    const game = gameStore.game
    const player = gameStore.player

    const dispatch = useDispatch()

    const [gamename, setGame] = useState('')
    const [playername, setPlayer] = useState('')

  return (
    <>
        Game: {game}
        <input type={'text'} 
        onChange={(e)=>{
            return setGame(e.target.value)
        }}/>

        <button
        onClick={()=>{
            dispatch({type:"UPDATE_GAME", 
            payload:gamename})
        }}
        >Update Game</button>

        <br/>
        Player: {player}
        <input type={'text'} onChange={e=>setPlayer(e.target.value)}/>
        <button onClick={()=>dispatch({type: "UPDATE_PLAYER",payload:playername})}>Update Player</button>

    </>
  )
}

export default Games