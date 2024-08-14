export interface IMapRender {
    data: {
        items: {
            genres: {
                genre: string;
            }[],
            imdbId: string,
            kinopoiskId: number,
            nameEn: string,
            nameOriginal: string,
            nameRu: string,
            posterUrl: string,
            posterUrlPreview: string,
            ratingImdb: number,
            ratingKinopoisk: number,
            type: string,
            year: number
        }[];
    },
    error: boolean
    isLoading: boolean

}

