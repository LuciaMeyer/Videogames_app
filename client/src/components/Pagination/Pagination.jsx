import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeCurrentPage } from "../../redux/actions";
import './Pagination.css'

export const Pagination = ({ games, gamesPerPage }) => {

    const dispatch = useDispatch();
    const currentPage = useSelector(state => state.currentPage)

    const pageNumber = [];

    for(let i = 1; i <= Math.ceil(games / gamesPerPage); i++) { 
        pageNumber.push(i)
    }

    const handlePage = num => {
        if (currentPage !== num) dispatch(changeCurrentPage(num))
    }

    return (
            <ul className="pagul">
                {
                    pageNumber?.map(num => 
                        <li className={'pagli' + (currentPage === num ? ' active' : '')} key={num} onClick={() =>handlePage(num)}>
                            <span className="pagspan">{num}</span>
                        </li>
                    )
                }
            </ul>
    )
};