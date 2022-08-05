import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeCurrentPage } from "../redux/actions";

export const Pagination = ({ games, gamesPerPage }) => {

    const dispatch = useDispatch();
    const currentPage = useSelector(state => state.currentPage)

    
    const pageNumber = [];
    for(let i = 1; i <= Math.ceil(games / gamesPerPage); i++) { // itera hasta llegar a la cant. de pag q necesito
        pageNumber.push(i)
    }

    const handlePage = num => {
        if (currentPage !== num) dispatch(changeCurrentPage(num))
    }

    return (
        <nav>
            <ul>
                {
                    pageNumber?.map(num => (
                        <li key={num}>
                            <button onClick={() =>handlePage(num)}>{num}</button>
                        </li>
                    ))
                }
            </ul>
        </nav>
    )
};