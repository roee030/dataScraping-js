var fun = (arr)=>{
    var x = arr.toString();
    x= x.split(',').join(' ')
    x= x.split('$$').join('<br>')
    return x
}
module.exports = fun