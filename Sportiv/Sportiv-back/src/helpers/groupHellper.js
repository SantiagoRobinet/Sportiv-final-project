const debug = require("debug")("app:groupHellper");


function checkArr(collectionArr, id){

    let newArr = null;
    const check = collectionArr.some((actualValue) => actualValue === id );
    debug('>>>>CHECK!!>>>', check);

    if(check){
        newArr = collectionArr.filter((value) => value !== id );
    debug('>>>>CHECK TRUE!!>>>', newArr);

        return newArr;
    } else {
        newArr = [...collectionArr, id];
    debug('>>>>CHECK FALSE!!>>>', newArr);

        return newArr;
    }
}

module.exports = { checkArr };