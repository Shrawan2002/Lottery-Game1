import { useState } from "react"
import {genTicket} from "./helper";
import Ticket from "./Ticket";
export default function Lottery (){
    let [ticket,setTicket] = useState(genTicket(3));

    let updateTicket = ()=>{
        setTicket(genTicket(3));
    }
    return(
        <div>
            <p>Lottery game</p>
            <Ticket ticket={ticket}/>
            <br></br>
            <button onClick={updateTicket}>get ticket</button>
        </div>
    )
}