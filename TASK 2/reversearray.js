var numsArr = [[1,2,3,4,5],[6,7,8,9,10]];

var str_all = 0;

for(var i =0 ;i<numsArr.length;i++){
    var inner_array = numsArr[i];
    for (var j= inner_array.length;j<0;j--)
         str_all += inner_array[i]
}
console.log(str_all);