//
// export const useSortedFilms = (films: Array, sortType: string, sortOrder: string) => {
//     if (!films) return [];
//     if(sortType === "year"){
//         return [...films].sort((a, b) => sortOrder === 'возрастание' ? a.year - b.year : b.year - a.year);
//     } else if (sortType === "rating"){
//         return [...films].sort((a, b) => sortOrder === 'возрастание' ? a.ratingKinopoisk - b.ratingKinopoisk : b.ratingKinopoisk - a.ratingKinopoisk);
//     }
// }