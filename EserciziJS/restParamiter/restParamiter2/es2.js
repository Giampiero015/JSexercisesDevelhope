function pari( ...nums){
    return nums.filter(num=> num%2==0);
}
console.log(pari(3,4,5,6,77,101,-51));