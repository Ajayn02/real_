import { useQuery } from '@tanstack/react-query'

export const fetchData = (queryKey, queryFn, params = {}) => {
    return useQuery({
        queryKey: [queryKey, params],
        queryFn: () => queryFn(params)
    })
}