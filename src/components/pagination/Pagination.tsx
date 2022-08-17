import React from 'react';
import styles from './Pagination.module.scss';

type PaginationPropsType = {
    nextPage: () => void
    prevPage: () => void
    page: number
    setPage: (num: number) => void
    totalPages: number
}

const Pagination = (props: PaginationPropsType) => {

    const {nextPage, prevPage, page, setPage, totalPages,} = props

    let arr: number[] = []
    for (let i = 0; i < totalPages; i++) {
        arr.push(i)
    }

    const prevBtnClasses = page === 1 ? `${styles.btn} ${styles.prevBtn} ${styles.hide}` : `${styles.btn} ${styles.prevBtn}`

    const nextBtnClasses = page === totalPages ? `${styles.btn} ${styles.hide}` : `${styles.btn}`

    return (
        <div className={styles.wrapper}>
            <button onClick={prevPage} className={prevBtnClasses}>
            </button>
            {
                arr.map(el => {
                    return <button
                        onClick={() => setPage(el + 1)}
                        key={el}
                        className={`${styles.page} ${page === el + 1 ? `${styles.activePage}` : ""}`}
                    >
                        {el + 1}
                    </button>
                })
            }
            <button onClick={nextPage} className={nextBtnClasses}></button>
        </div>
    );
};

export default Pagination;