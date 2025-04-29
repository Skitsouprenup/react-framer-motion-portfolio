
// Use this patterns to specifically select
// a category. Some category names need a
// specific regex pattern to be selected
// specifically
/*
    [0] = category to search
    [1] = regex pattern
*/
export const categoryPatterns = [
 ['c', '^c$'],
 ['c++', '^C\\+\\+$'],
 ['java', '^java(?!script)']
]