import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeCurrentPage } from '../../redux/actions';
import './Pagination.css'

export const Pagination = ({ games, gamesPerPage }) => {

    const dispatch = useDispatch();
    let currentPage = useSelector(state => state.currentPage)
    
    const pageNumber = [];
    const pages = Math.ceil(games / gamesPerPage)

    for(let i = 1; i <= pages; i++) { 
        pageNumber.push(i)
    }

    const handlePage = num => {
        if (currentPage !== num) dispatch(changeCurrentPage(num));
        window.scrollTo(0, 0);
    };

    const handlPrev = () => {
        if(currentPage !== 1) currentPage--
        dispatch(changeCurrentPage(currentPage))
    };

    const handlNext = () => {
        if(currentPage !== pages) currentPage++
        dispatch(changeCurrentPage(currentPage))
    };

    return (
        <div className='containPag'>    
            <ul className='pagul'>
                <div className='pagli' onClick={handlPrev}>
                    <span className='pagspan'>&#10094;</span>
                </div>
                {pageNumber?.map(num => 
                    <li className={'pagli' + (currentPage === num ? ' active' : '')} key={num} onClick={() =>handlePage(num)}>
                        <span className='pagspan'>{num}</span>
                    </li>
                )}
                <div className='pagli' onClick={handlNext}>
                    <span className='pagspan'>&#10095;</span>
                </div>
            </ul>
        </div>
    )
};