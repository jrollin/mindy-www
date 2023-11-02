"use client";
import { useAppDispatch } from "@/app/hooks/store";
import { addWebpage } from "@/app/store/webpageSlice";

const AddWebpage = () => {
    const dispatch = useAppDispatch();

    return (
        <form
            onSubmit={(e) => {
                e.preventDefault();
                dispatch(addWebpage({ title: "test" }));
            }}
        >
            <input type="submit" name="add" />
        </form>
    );
};

export default AddWebpage;
