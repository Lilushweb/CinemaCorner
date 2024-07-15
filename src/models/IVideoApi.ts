export interface IVidepApi {
    data: {
        items: [{
            url: string
            name: string
            site: string
        }],
        total: number
    },
    error: boolean;
    isLoading: boolean;
}