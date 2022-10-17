//synchrone :
const sum = function (a, b) {
    return a - b;
};
console.log(sum(2,22));
//
//promesse
console.log("synchrone" + sum(1 + 4));
const pSum = (a, b) => new Promise((resolve, reject) => {
    if (a === 3) {
        reject(new Error('Je ne veux pas faire la somme.'));
    }
    const result = a + b;
    resolve(result);
});
console.log(pSum(2,2));
pSum(3,2).then((result)=> console.log(result).catch((e)=>console.error("Une erreur est survenue ="+e)));

//
//asynchrone :
async function aSum(a,b){
    return a+b;
}
async function main(){
    console.log(await aSum(2,3));
}
main()
//

