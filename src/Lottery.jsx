import { useState } from "react"
import {genTicket,sum} from "./helper";
import Ticket from "./Ticket";
import Button from "./Button";
export default function Lottery ({winningSum}){
    let [ticket,setTicket] = useState(genTicket(3));

    let updateTicket = ()=>{
        setTicket(genTicket(3));
    }

    let isWinning = sum(ticket) == winningSum;
    return(
        <div>
            <h3>Lottery game</h3>
            <Ticket ticket={ticket}/>
            <br></br>
           <h4 style={{color:"red"}}> {isWinning&& "congratulation you won!!"}</h4>
            <Button arc ={updateTicket}/>
        </div>
    )
}