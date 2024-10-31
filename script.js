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


const f = (g) => {
        return 6*g*g*g*g - 13*g*g*g - 18*g*g + 7*g + 6;
    }

const fp = (g) => {
        return 24*g*g*g - 39*g*g - 36*g + 7;
    }

function newton(x){
    let ans = x;
    for (let i = 0; i<4; i++){
        ans = ans - f(ans)/fp(ans);
    }
    
    return ans;

    // fix for exact accuracy
}

// console.log(newton(-10));

let coef = [1, 2, 3, 4, 3, 2];
let expo = [4, 3, 2, 1, 0, 3];

function polynomial(coef, expo, x){
    let fx = ["f(x) = ", 0];
    for (let i=0; i<coef.length; i++){
        fx[0] += coef[i] + "x^" + expo[i];
        if (i != coef.length-1){
            fx[0] += " + ";
        }
    }

    const map = expo.map((value) => {
        return x**value;
      });
      
    map.forEach((item, index) => {
        fx[1] += item*coef[index];
    })
    return fx;
}

console.log(polynomial(coef, expo, 1));