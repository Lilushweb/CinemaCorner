export interface IStaff {
    data: {
        age: number
        description: string;
        filmId: number;
        general: boolean;
        nameEn: string;
        nameRu: string;
        professionKey: string;
        facts: [string];
        rating: string;
        birthday: string;
        birthplace: string;
        personId: number
        posterUrl: string
        profession: string
        sex: string
        webUrl: string
    },
    error: {
        status: string;
    };
    isLoading: boolean;


}
