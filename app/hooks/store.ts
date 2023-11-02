import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { ApplicationDispatch, ApplicationState } from "@/app/store/store";

export const useAppSelector: TypedUseSelectorHook<ApplicationState> =
    useSelector;

// easier usage
export const useWebpages = () => {
    const webpages = useAppSelector((state) => state.webpages.entities);
    const loading = useAppSelector((state) => !!state.webpages.loading);
    return [webpages, loading] as const;
};

export const useAppDispatch: () => ApplicationDispatch = useDispatch;
