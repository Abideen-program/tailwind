export const clx = (...classes) => {
    //return every class pass as an argument into the clx
    return classes.filter(Boolean).join(' ')
}