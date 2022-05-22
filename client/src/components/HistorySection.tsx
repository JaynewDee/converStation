import React, { useState, useEffect } from 'react'
import HistoryItem from './HistoryItem';

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
                        <h4>{exchange.prompt}</h4>
                        <p>{exchange.response}</p>
                    </div>
                )
        })}
        </div>
    </section>
    </>
  )
}

export default HistorySection;