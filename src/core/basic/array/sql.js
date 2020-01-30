Array.prototype.leftJoin = function(right){
    return this.map(function(left){
        return right.indexOf(left);
    });
};
Array.prototype.innerJoin = function(right){
    return this.map(function(left,index){
        console.log(right);
        return right.indexOf(left) >= 0 ?[index,right.indexOf(left)]:null;
    }).filter(isntNull);
}
Array.prototype.leftJoinNull = function(right){
    return this.map(function(left,index){
        return right.indexOf(left) < 0 ?index:null;
    }).filter(isntNull);
}
Array.prototype.join = function(right){
    var left = this;
    return {
        left:left,
        right:right,
        inner:left.innerJoin(right),
        leftNull:left.leftJoinNull(right),
        rightNull:right.leftJoinNull(left),
    };
}