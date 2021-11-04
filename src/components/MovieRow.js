import React, { useState } from "react";
import './MovieRow.css'

export default function MovieRow({ title, items }) {
    const [scrollX, setScroolX] = useState(0)
    const voltaObagui = () => {
        let x = scrollX + Math.round(window.innerWidth / 2)
        if (x > 0) {
            x = 0
        }
        setScroolX(x)
    }
    const avacaObaqui = () => {
        let x = scrollX - Math.round(window.innerWidth / 2)
        //largura total da lista
        let listW = items.results.length*150
        if((window.innerWidth - listW) - x){
            x = (window.innerWidth - listW ) - 60
        }
        setScroolX(x)
        
    }



    return (

        <div className="movieRow">
            <h2>{title}</h2>
            <div className="movieRow--left" style={{ fontSize: 30 }} onClick={voltaObagui}>
                B
            </div>
            <div className="movieRow--rigth" style={{ fontSize: 30 }} onClick={avacaObaqui}>
                N
            </div>

            <div className="movieRow--listarea">
                <div className="movieRow--list" style={{
                    marginLeft: scrollX,
                    width: items.results.length * 150
                }}>
                    {items.results.length > 0 && items.results.map((item, key) => (
                        <div key={key} className="movieRow--item">
                            <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} key={key} alt={item.original_title} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )



}














