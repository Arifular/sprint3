let panggilFilter = () => {
    panggilFilter2()
}

let panggilFilter2 = () => {
    var kodeUnix = [23, 89,67,29,192,6,2,129,21,872,891,901,70,61,78,62,32,90,90];
    console.log(kodeUnix.filter(a => a >= 60));
}
panggilFilter(panggilFilter2)
