import React from "react";

export function Paginado({paginado, allGames, gamesPerPage}) {

    const pageNumber = [];
    for(let i = 1; i <= Math.ceil(allGames / gamesPerPage); i++) { // itera hasta llegar a la cant. de pag q necesito
        pageNumber.push(i)
    }
    return (
        <nav>
            <ul>
                {
                    pageNumber?.map(num => (
                        <li key={num}>
                            <button onClick={() => paginado(num)}>{num}</button>
                        </li>
                    ))
                }
            </ul>
        </nav>
    )
};