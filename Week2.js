function minMax(arr) {
    const min = Math.min(...arr);
    const max = Math.max(...arr);
    let new = [min,max];
    return new;
}