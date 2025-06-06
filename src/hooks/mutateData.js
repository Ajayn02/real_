import { useQueryClient, useMutation } from "@tanstack/react-query"
import commonApi from "../service/commonApi"
import base_url from "../service/base_url"
import toast from "react-hot-toast"

export const mutateData = () => {
    const queryClient = useQueryClient()

    const mutation = useMutation({
        mutationFn: async ({ key, method, endPoint, header, data }) => {
            if (!base_url || !endPoint) {
                throw new Error(`Invalid base_url or endpoint. base_url: ${base_url}, endPoint: ${endPoint}`);
            }
            const url = base_url + endPoint
            const result = await commonApi(url, method, header, data)

            if (result.status == 200 || result.status == 201) {
                toast.success(result.data?.message)
                queryClient.invalidateQueries({ queryKey: [key] })
            } 
        },
        onError: (error) => {
            console.log(error);
        }
    })

    return { mutation };
}