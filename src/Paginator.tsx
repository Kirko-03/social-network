import us from "./components/Users/users.module.css";
import React, { useState} from "react";


type PaginatorType = {
    totalItemsCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (currentPage: number) => void
}

export const Paginator = React.memo((props: PaginatorType) => {
    let portionSize = 10
    let pagesCount = Math.ceil(props.totalItemsCount / props.pageSize)
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    let portionCount = Math.ceil(pagesCount / portionSize)
    let [portionNumber, setPortionNumber] = useState(1)
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
    let rightPortionPageNumber = portionNumber * portionSize
    return (<div>
        {portionNumber > 1 && <button onClick={() => {
            setPortionNumber(portionNumber - 1)
        }}>PREVIOUS</button>}

        {

            pages.filter(a => a >= leftPortionPageNumber && a <= rightPortionPageNumber).map(p => {
                return <span style={{margin: '2px'}} className={props.currentPage === p ? us.bold : ""}

                           key={p}  onClick={() => props.onPageChanged(p)}>{p}</span>

            })
        }
        {portionCount > portionNumber && <button onClick={() => {
            setPortionNumber(portionNumber + 1)
        }}>NEXT</button>}

    </div>)
})