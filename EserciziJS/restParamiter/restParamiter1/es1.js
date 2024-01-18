function sum( ...nums){
    return nums.reduce((a,s)=>a+s,0);
}
console.log(sum(3,4,5,6,78,100,-50));