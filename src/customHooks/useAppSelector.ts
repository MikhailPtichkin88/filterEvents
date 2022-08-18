import {TypedUseSelectorHook, useSelector} from "react-redux";
import {AppRootStateType} from "../reducers/store";

export const useAppSelector: TypedUseSelectorHook<AppRootStateType> = useSelector