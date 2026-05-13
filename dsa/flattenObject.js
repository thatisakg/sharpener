const obj = {
  a: 1,
  b: {
    c: 2,
    d: { e: 3 }
  }
};
console.log(flattenObject(obj));

function flattenObject(obj, prefix = ""){
    let result = {}
    for(key in obj){
        const val = obj[key];
        const newKey = prefix === "" ? key : prefix + "." + key
        if(val && typeof val == "object"){
            const recursive = flattenObject(val, newKey);
            result = {...result, ...recursive}
        } else{
            result[newKey] = val;
        }
    }
    return result;
}