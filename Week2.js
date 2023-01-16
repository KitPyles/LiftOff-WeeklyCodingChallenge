function minMax(arr) {
    const min = Math.min(...arr);
    const max = Math.max(...arr);
    let result = [min,max];
    return result;
}
