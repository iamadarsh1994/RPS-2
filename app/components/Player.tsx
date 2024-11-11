"use client"

import React, {useState} from 'react'
import confetti from 'canvas-confetti'
function gamePlay(playerChoice: string, setResult: React.Dispatch<React.SetStateAction<string>>, setComputerChoice: React.Dispatch<React.SetStateAction<string>>) {
    
    const Choices =["Rock", "Paper", "Scissors"]
    const computerChoice:string = Choices[Math.floor(Math.random() * 3)];
    
    let result;
    if(playerChoice === computerChoice){
        result = "It's a Tie!"
    } else if ((playerChoice === "Rock" && computerChoice === "Scissors") || (playerChoice === "Paper" && computerChoice === "Rock") || (playerChoice === "Scissors" && computerChoice === "Paper")){
        result = "Player Wins!";

        confetti({particleCount: 100,
        spread: 70,
        origin: {y: 0.6}
        })

    } else {
        result = "Computer Wins!"
    }

    // setResult(`Player Chose: ${playerChoice}, Computer chose: ${computerChoice}. ${result}`)
    setResult(`${result}`)
    setComputerChoice(computerChoice)
}

function Player() {
    const [result, setResult] = useState<string>("");
    const [computerChoice, setComputerChoice] = useState<string>("")

  return (
    <div>
      
      <div className='flex justify-center items-center p-3'><button className='border-b'>Player Choice</button></div>

      <div className="flex justify-center items-center p-2 m-2 gap-2">
      <button className="border px-4 py-1 rounded hover:bg-blue-600 m-2 font-semibold transition duration-150 hover:scale-125" onClick={()=>gamePlay("Rock", setResult, setComputerChoice)} value="Rock">Rock</button>
      <button className="border m-2 px-4 py-1 rounded transition duration-150 hover:scale-125 hover:bg-blue-600 font-semibold" value="Paper" onClick={()=>gamePlay("Paper", setResult, setComputerChoice)}>Paper</button>
      <button className="font-semibold border px-4 py-1 rounded transition duration-150 hover:scale-125 hover:bg-blue-600 m-2 " value="Scissor" onClick={()=>gamePlay("Scissors", setResult, setComputerChoice)}>Scissors</button>
      </div>
     <div className='flex justify-center items-center p-3'><button className='border-b'>Computer Choices</button></div>
     <div className='flex justify-center items-center m-2'><button className='p-3 font-semibold scale-125 px-4 py-1 border rounded m-2 bg-blue-600'>{computerChoice || "Waiting..."}</button> </div>

     <div className='flex justify-center items-center p-3 font-semibold'>Result: {result}</div>
    </div>
  )
}

export default Player