function orbitalPeriod(arr){
    var GM = 398600.4418;
    var earthRadius = 6367.4447;


    return arr.map(elem =>  {
        elem.orbitalPeriod = 2* Math.PI*Math.sqrt(Math.pow((earthRadius + elem.avgAlt),3)/GM)
        console.log(elem.orbitalPeriod)
        return elem
    })

}

let res = orbitalPeriod([{name : "sputnik", avgAlt: 35873.5553}]);
console.log(res)