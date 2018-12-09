function putDash(a){
    //type code here
        let _array = a.split('')
        let record = []
        console.log(Number.parseInt(_array[1])%2)
        for(let i = 0; i < _array.length; i++) {
            if(_array[i+1] == undefined){
                break
            } else {
                if(Number.parseInt(_array[i])%2 == 0 && Number.parseInt(_array[i+1])%2 == 0) {
                    record.push(i+1)
                }
            }
        }
        let _index = 0
        for(let i = 0; i < record.length; i++) {
            _array.splice(record[i]+_index,0,'-')
            _index++
        }
    return _array.join('')
}

console.log(putDash('1245684'))