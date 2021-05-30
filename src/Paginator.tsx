import us from "./components/Users/users.module.css";
import React from "react";

type PaginatorType = {
    totalUserCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (currentPage: number) => void
}

export const Paginator = (props: PaginatorType) => {


    let pagesCount = Math.ceil(props.totalUserCount / props.pageSize)

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (<>
        {

            pages.map(p => {
                return <span className={props.currentPage === p ? us.bold : ""}
                             onClick={e => props.onPageChanged(p)}>{p}</span>

            })
        }
    </>)
}