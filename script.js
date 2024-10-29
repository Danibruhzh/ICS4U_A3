function heron(a, b, c){
    const sa = a*a;
    const sb = b*b;
    const sc = c*c;
    const comb = sa + sb - sc;
    return 0.25 * Math.sqrt(4*sa*sb - comb*comb);
}

function ambiguous(angle, a, b){

    const h = b* Math.sin(angle);
     if (angle<90){
        if (a < h) {
            return "No triangle";
        } else if (a==h){
            return "Right Triangle";
        } else {
            return "One Triangle";
        }
    } else if (angle==90){

    } else if (angle < 180){

    } 
}