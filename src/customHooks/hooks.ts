import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux'
import type {AppRootStateType, AppDispatch} from '../reducers/store'
import {useState} from "react";


export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<AppRootStateType> = useSelector


interface UsePaginationProps {
    contentPerPage: number,
    count: number,
}

interface UsePaginationReturn {
    page: number;
    totalPages: number;
    firstContentIndex: number;
    lastContentIndex: number;
    nextPage: () => void;
    prevPage: () => void;
    setPage: (page: number) => void;
}

type UsePagination = ({}: UsePaginationProps) => (UsePaginationReturn);

export const usePagination: UsePagination = ({contentPerPage, count}) => {
    const [page, setPage] = useState(1);

    const pageCount = Math.ceil(count / contentPerPage);

    const lastContentIndex = page * contentPerPage;

    const firstContentIndex = lastContentIndex - contentPerPage;

    const changePage = (direction: boolean) => {
        setPage((state) => {
            if (direction) {
                if (state === pageCount) {
                    return state;
                }
                return state + 1;

            } else {
                if (state === 1) {
                    return state;
                }
                return state - 1;
            }
        });
    };

    const setPageSAFE = (num: number) => {
        if (num > pageCount) {
            setPage(pageCount);
        } else if (num < 1) {
            setPage(1);
        } else {
            setPage(num);
        }
    };

    return {
        totalPages: pageCount,
        nextPage: () => changePage(true),
        prevPage: () => changePage(false),
        setPage: setPageSAFE,
        firstContentIndex,
        lastContentIndex,
        page,
    };
};
