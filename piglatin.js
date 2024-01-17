function translatePigLatin(str){
    vowels =  ['a','e','i','o','u'];
    cluster = '';

    for(let i = 0; i<str.length; i++){
        if(vowels.some(v => v === str[i])){
            break
        }else {
            cluster += str[i];
        }

        if(cluster === ''){
            return str + 'way';
        } else{
            return str.slice(cluster.length,) + cluster + 'ay';
        }
    }
    return str;
}
res = translatePigLatin('consonant');
console.log(res);