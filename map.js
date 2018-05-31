//var arr = [2, 4, 6]
function map(arrray, callback) {
    var mapped = []
    for (i = 0; i < arrray.length; i++) {
        //console.log(arrray[i])
        var final = callback(arrray[i])
        mapped.push(final)
    }
    return mapped
}

var result = map([2, 4, 6], function (value) {
    return value * 2
})

console.log(result)

