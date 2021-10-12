import React, { useState } from 'react';
import s from './Paginator.module.css'
import cn from 'classnames';

type PaginatorType = {
    pageClickChange: (page: number) => void
    currentPage: number
    pageSize: number
    totalCount: number

}

export const  Paginator = (props: PaginatorType) => {
    let pageCount = Math.ceil(props.totalCount / props.pageSize)

    const pages = []

    for (let i = 1; i <= pageCount; i++) {
        pages.push(i)
    }
    const portionCount = Math.ceil(pageCount/ props.pageSize)

    const [portionNumber, setPortionNumber] = useState(1)
    const leftPortionPageNumber = (portionNumber - 1) * props.pageSize + 1

    const rightPortionPageNumber = portionNumber * props.pageSize

    return <div  className={cn({paginator: s.paginator, otherClass: s.other})}>
        {portionNumber > 1 && <button onClick={() => {
            setPortionNumber(portionNumber - 1)
        }}>PREV</button>}
        {
            pages
                .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                .map(p => {
                    return <span className={props.currentPage === p ? s.selectedPage : s.pageNumber}
                                 key={p}
                                 onClick={() => props.pageClickChange(p)}>
                       {p}
                   </span>
                })}
        {portionCount > portionNumber && <button onClick={() => {
            setPortionNumber(portionNumber + 1)
        }}>NEXT</button>}
    </div>
};

