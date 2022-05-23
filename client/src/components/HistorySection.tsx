import React, { useState, useEffect } from 'react'
import HistoryItem from './HistoryItem';
import { AiFillRobot } from 'react-icons/ai';
import {GiPerson} from 'react-icons/gi';
interface HistoryTypes {
    data: object[]
}

const HistorySection: React.FC<HistoryTypes> = ({data}) => {
    const [history, setHistory] = useState([])
    console.log(history)
    useEffect(() => {
        setHistory([data, ...history])
    }, [data])
  return (
      <>
      
    <section id="history-section">
        <h3><em>Transcript</em></h3>
        <div id="history-box">
        {history.map((exchange) => {
                return (
                    <div className="exchange">
                        <h4>{<GiPerson size={28}/>}{':>'}{exchange.prompt}</h4>
                        <p>{'<:'}{<AiFillRobot size={20}/>}{exchange.response}</p>
                    </div>
                )
        })}
        </div>
    </section>
    </>
  )
}

export default HistorySection;