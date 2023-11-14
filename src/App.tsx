import './globals.css';
import { Routes, Route } from 'react-router-dom';
import Homepage from '@components/Homepage';
import WebpageDetailPage from './pages/WebpageDetailPage';
import WebpageListPage from './pages/WebpageListPage';
import Layout from '@components/Layout';
import NoMatch from '@components/NoMatch';
// store
import store from '@app/store/store';
import { fetchWebpages } from '@app/store/features/webpageSlice';

export default function App() {
    store.dispatch(fetchWebpages());

    return (
        <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Homepage />} />

                    <Route path="webpages" element={<WebpageListPage />} />
                    <Route path="webpages/:id" element={<WebpageDetailPage />} />
                    {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
                    <Route path="*" element={<NoMatch />} />
                </Route>
            </Routes>
        </div>
    );
}
