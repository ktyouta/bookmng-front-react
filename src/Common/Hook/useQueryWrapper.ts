import { useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import axios from 'axios';


type propsType<TData, RData = TData> = {
    url: string,
    callback?: (data: TData) => RData,
    afSuccessFn?: (data: RData) => void,
    afErrorFn?: (error: unknown) => void
}

const useQueryWrapper = <TData, RData = TData>(props: propsType<TData, RData>) => {

    const query = useQuery<TData>({
        queryKey: [props.url],
        queryFn: async () => {
            const { data } = await axios.get<TData>(props.url, { withCredentials: true });
            return data;
        },
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