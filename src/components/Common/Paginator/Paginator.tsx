import React, { useState } from 'react';
import s from './Paginator.module.css'

type PaginatorType = {
    pageClickChange: (page: number) => void
    currentPage: number
    pageSize: number
    totalCount: number

}

export const Paginator = (props: PaginatorType) => {
    let pageCount = Math.ceil(props.totalCount / props.pageSize)

    const pages = []

    for (let i = 1; i <= pageCount; i++) {
        pages.push(i)
    }
    const portionCount = Math.ceil(pageCount/ props.pageSize)

    const [portionNumber, setPortionNumber] = useState(1)
    const leftPortionPageNumber = (portionNumber - 1) * props.pageSize + 1

    const rightPortionPageNumber = portionNumber * props.pageSize

    /*   const page = pages.map((p: number, index) => {
           const clickPageCurrent = () => {
               props.pageClickChange(p)
           }
           const click = props.currentPage === p ? s.totalCount : ''
           return <span key={index} onClick={clickPageCurrent} className={click}>{p}</span>
       })*/

    return <div  className={s.paginator}>
        {portionNumber > 1 && <button onClick={() => {
            setPortionNumber(portionNumber - 1)
        }}>PREV</button>}
        {
            pages
                .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                .map(p => {
                    return <span className={props.currentPage === p ? s.selectedPage : s.pageNumber}
                                 key={p}
                                 onClick={(e) => props.pageClickChange(p)}>
                       {p}
                   </span>
                })}
        {portionCount > portionNumber && <button onClick={() => {
            setPortionNumber(portionNumber + 1)
        }}>NEXT</button>}
    </div>
};

