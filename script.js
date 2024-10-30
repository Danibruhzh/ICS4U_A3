function heron(a, b, c){
    const sa = a*a;
    const sb = b*b;
    const sc = c*c;
    const comb = sa + sb - sc;
    return 0.25 * Math.sqrt(4*sa*sb - comb*comb);
}

function ambiguous(angle, a, b){

    const h = b* Math.sin((angle* (Math.PI/180)));
     if (angle<90){
        if (a >= b){
            return "One triangle";
        } else if (a < h) {
            return "No triangle";
        } else if (a==h){
            return "Right Triangle";
        } else {
            return "Two Triangles";
        }
    } else if (angle==90){
        return "Right Triangle";
        // fix
    } else if (angle < 180){
        if (a <= b){
            return "No triangle";
        } else {
            return "One triangle";
        }
    } 
}

console.log(ambiguous(130, 5, 4));

function newton(g){
    var x;
    function f(x) => 6*x*x*x*x - 13*x*x*x - 18*x*x + 7*x + 6;
    function fP(x) => 24*x*x*x - 39*x*x - 36*x + 7;




}