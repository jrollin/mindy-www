import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useWebpage } from '@app/hooks/store';
import DetailWebpage from '@components/webpages/WebpageDetail';
import {
    LoadingState,
    fetchWebpageDetail,
} from '@app/store/features/webpageSlice';
import store from '@app/store/store';

const WebpageDetailPage = () => {
    const { id } = useParams();
    const [webpage, loading, error] = useWebpage();

    useEffect(() => {
        store.dispatch(fetchWebpageDetail(id!));
    }, [id]);

    if (loading == LoadingState.PENDING) {
        return (
            <section className="webpage-list">
                <div>Loading </div>
            </section>
        );
    }
    if (error) {
        return (
            <section className="webpage-list">
                <div>Error: {error} </div>
            </section>
        );
    }
    return webpage ? <DetailWebpage webpage={webpage} /> : 'no webpage';
};

export default WebpageDetailPage;
