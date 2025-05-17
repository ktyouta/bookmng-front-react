import { useMutation, useQuery, useQueryClient, type InvalidateOptions, type InvalidateQueryFilters, type QueryKey } from '@tanstack/react-query';
import axios from "axios";
import { useMemo } from 'react';


//レスポンスの型
export type resType<T> = {
    status: number,
    message: string,
    data: T,
}

//エラーレスポンスの型
export type errResType = {
    response: {
        data: {
            message: string,
            status: number,
        }
    }
}

//引数の型
type propsType<U> = {
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


const useMutationWrapperBase = <
    T, U
>(props: propsType<U>) => {

    const queryClient = useQueryClient();

    //POST
    const postQuery = async (postData: T) => {
        const { data } = await axios.post(props.url, postData, { withCredentials: true },);
        return data;
    }

    //PUT
    const putQuery = async (putData: T) => {
        const { data } = await axios.put(props.url, putData, { withCredentials: true },);
        return data;
    }

    //DELETE
    const deleteQuery = async (delData: T) => {
        const { data } = await axios.delete(props.url, { data: delData, withCredentials: true },);
        return data;
    }

    //HTTPメソッドによりaxiosを切り替える
    const queryMethod = useMemo(() => {
        switch (props.method) {
            case "POST":
                return postQuery;
            case "PUT":
                return putQuery;
            case "DELETE":
                return deleteQuery;
            default:
                return undefined;
        }
    }, [props.url]);

    return useMutation({
        //HTTPリクエスト送信処理
        mutationFn: queryMethod ? (data: T) => queryMethod(data) : undefined,
        onMutate: props.waitingFn ?? undefined,
        onSuccess: props.afSuccessFn ?? undefined,
        onError: props.afErrorFn ?? undefined,
        onSettled: props.queryKey ? () => {
            if (props.queryKey) {
                queryClient.invalidateQueries({ queryKey: props.queryKey });
            }
        } : undefined,
    });
}

export default useMutationWrapperBase;