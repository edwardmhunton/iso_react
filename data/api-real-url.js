export const questions = "http://api.stackexchange.com/2.0/questions?site=stackoverflow";
export const question  = (id)=> `https://api.stackexchange.com/2.0/questions?${id}?site=stackoverflow&filter=withbody`;
