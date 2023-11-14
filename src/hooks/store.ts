import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { ApplicationDispatch, ApplicationState } from '@app/store/store';

export const useAppSelector: TypedUseSelectorHook<ApplicationState> =
    useSelector;

// easier usage
export const useWebpages = () => {
    const webpages = useAppSelector((state) => state.webpages.webpages);
    const loading = useAppSelector((state) => !!state.webpages.loading);
    const error = useAppSelector((state) => state.webpages.error);
    return [webpages, loading, error] as const;
};

export const useWebpage = () => {
    const webpage = useAppSelector((state) => state.webpages.detail);
    const loading = useAppSelector((state) => !!state.webpages.loading);
    const error = useAppSelector((state) => state.webpages.error);
    return [webpage, loading, error] as const;
};

export const useAppDispatch: () => ApplicationDispatch = useDispatch;
