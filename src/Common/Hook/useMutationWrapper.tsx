import type { QueryKey } from "@tanstack/react-query";
import type { errResType, resType } from "./useMutationWrapperBase";
import useMutationWrapperBase from "./useMutationWrapperBase";


//引数の型
type propsType<T, U> = {
    url: string,
    method: methodType,
    queryKey?: QueryKey,
    //処理待ち中の処理
    waitingFn?: () => void,
    //処理成功後の処理
    afSuccessFn?: (res: resType<U>) => void,
    //失敗後の処理
    afErrorFn?: (res: errResType) => void,
    finaliryFn?: () => void,
}


//HTTPメソッド
type methodType = "POST" | "PUT" | "DELETE" | undefined;


const useMutationWrapper = <
    T, U
>(props: propsType<T, U>) => {

    const mutationObj = useMutationWrapperBase({ ...props });

    function mutation(data?: T) {
        mutationObj.mutate(data ?? {});
    }

    return { ...mutationObj, mutate: mutation };
}

export default useMutationWrapper;