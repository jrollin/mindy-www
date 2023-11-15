import { useWebpages } from '@app/hooks/store';
import { LoadingState } from '@app/store/features/webpageSlice';
import WebpageList from '@components/webpages/WebpageList';

const WebpageListPage = () => {
    const [webpages, loading, error] = useWebpages();
    if (loading === LoadingState.PENDING) {
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

    return (
        <section className="webpage-list">
            {webpages && <WebpageList webpages={webpages} />}
        </section>
    );
};

export default WebpageListPage;
