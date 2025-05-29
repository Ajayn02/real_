import { useQuery } from '@tanstack/react-query'

export const fetchData = (queryKey, queryFn, header, params = {}) => {
    
    return useQuery({
        queryKey: [queryKey, params],
        queryFn: () => queryFn(header, params.id)
    })
}