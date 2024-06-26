export interface IMapRender {
    genres: {
        genre: string;
    }[] ;
    imdbId: string | null;
    kinopoiskId: number;
    nameEn: string | null;
    nameOriginal: string;
    nameRu: string;
    posterUrl: string;
    posterUrlPreview: string;
    ratingImdb: number;
    ratingKinopoisk: number;
    type: string
    year: number
}