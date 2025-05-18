import { useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import axios from 'axios';

type methodType = "GET" | "POST";

type propsType<TData, RData, PData> = {
    url: string,
    callback?: (data: TData) => RData,
    afSuccessFn?: (data: RData) => void,
    afErrorFn?: (error: unknown) => void,
    method?: methodType,
    postData?: PData,
}

const useQueryWrapper = <TData, RData, PData>(props: propsType<TData, RData, PData>) => {

    //GET
    const getQuery = async () => {
        const { data } = await axios.get(props.url, { withCredentials: true });
        return data;
    }

    //POST
    const postQuery = async () => {
        const { data } = await axios.post(props.url, props.postData ?? {}, { withCredentials: true },);
        return data;
    }

    //HTTPメソッドのリスト
    const queryList = {
        GET: getQuery,
        POST: postQuery,
    }

    const query = useQuery<TData>({
        queryKey: [props.url],
        queryFn: props.method ? queryList[props.method] : queryList["GET"],
        enabled: !!props.url,
    });

    useEffect(() => {
        if (query.isSuccess && props.afSuccessFn) {
            props.afSuccessFn(query.data as RData);
        }
    }, [query.isSuccess, query.data, props.afSuccessFn]);

    useEffect(() => {
        if (query.isError && props.afErrorFn) {
            props.afErrorFn(query.error);
        }
    }, [query.isError, query.error, props.afErrorFn]);

    return query;
};

export default useQueryWrapper;