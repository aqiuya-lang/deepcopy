function checkType (target) {
    return Object.prototype.toString.call(target).slice(8,-1);
}

function clone (target) {
    let result,
        targetType = checkType(target);
        if (targetType === "Object") {
            result = {};
        } else if (targetType === 'Array') {
            result = [];
        } else {
            return target;
        };

        for ( let i in target) {
            let value = target[i];
            if (checkType(value) === 'Object' || checkType(value) === 'Array') {
                result[i] = clone(value);
            }else{
                result[i] = value;
            }
           
        }
        return result;
}
let a = [1,2,[3,4]];
let b = clone(a);
a[2] = [1,2];
console.log(a);
console.log(b);


 

 //柯里化函数
function addsum(...values){
    let sum = 0;
    for (key of values) {
        sum += key;
    }
let tmp = (x) => {
    sum += x;
    return tmp;
}
tmp.toString = () => sum;
return tmp

}
var x = addsum(1,2);
console.log(x);//3
console.log(x(3));//6 addsum(1,2)(3)
console.log(x(8));//14 addsum(1,2)(3)(8);

