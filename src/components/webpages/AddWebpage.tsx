'use client';
import { useAppDispatch } from '@app/hooks/store';
import { addWebpage } from '@app/store/features/webpageSlice';

const AddWebpage = () => {
    const dispatch = useAppDispatch();

    return (
        <form
            onSubmit={(e) => {
                e.preventDefault();
                dispatch(
                    addWebpage({
                        title: 'test',
                        content: 'content',
                    }),
                );
            }}
        >
            <input type="submit" name="add" />
        </form>
    );
};

export default AddWebpage;
