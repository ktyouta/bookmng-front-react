import { useState } from "react";
import useSwitch from "../../Common/Hook/useSwitch";


type propsType = {
    initReview: string,
}

export function useBookshelfReviewEdit(props: propsType) {

    // 感想入力値
    const [review, setReview] = useState(props.initReview);

    return {
        review,
        setReview,
    }
}