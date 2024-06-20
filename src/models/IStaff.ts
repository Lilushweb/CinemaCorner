export interface IStaff {
    age:  number
    films: {
        description: string;
        filmId: number;
        general: boolean;
        nameEn: string;
        nameRu: string;
        professionKey: string;
        rating: string;
    }[];
    growth:number
    hasAwards: number
    nameEn: string
    nameRu: string
    personId: number
    posterUrl: string
    profession: string
    sex: string
    webUrl: string
}
