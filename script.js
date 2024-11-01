const herons = document.forms["heron"];
document.getElementById("heron-button").addEventListener("click", () => {
    herons.elements[3].value = (heron(herons.elements[0].value, herons.elements[1].value, herons.elements[2].value));
});

const ambig = document.forms["ambiguous"];
document.getElementById("amb-button").addEventListener("click", () => {
    ambig.elements[3].value = (ambiguous(ambig.elements[0].value, ambig.elements[1].value, ambig.elements[2].value));
});

const newtons = document.forms["newtons"];
document.getElementById("newtons-button").addEventListener("click", () => {
    newtons.elements[1].value = (newton(newtons.elements[0].value));
});

const poly = document.forms["polynomial"];
document.getElementById("poly-button").addEventListener("click", () => {

    coef = poly.elements[0].value.split(", ");
    expo = poly.elements[1].value.split(", ");

    poly.elements[3].value = (polynomial(coef, expo, poly.elements[2].value)[0]);
    poly.elements[4].value = (polynomial(coef, expo, poly.elements[2].value)[1]);
});

function heron(a, b, c) {
    const sa = a * a;
    const sb = b * b;
    const sc = c * c;
    const comb = sa + sb - sc;
    return 0.25 * Math.sqrt(4 * sa * sb - comb * comb);
}

function ambiguous(angle, a, b) {

    const h = b * Math.sin((angle * (Math.PI / 180)));
    //angle = 0 optional include
    if (angle == 0){
        return "No triangle";
    } else if (angle < 90) {
        if (a >= b) {
            return "One triangle";
        } else if (a < h) {
            return "No triangle";
        } else if (a == h) {
            return "Right Triangle";
        } else {
            return "Two Triangles (Ambiguous Case)";
        }
    } else if (angle == 90) {
        return "Right Triangle";
    } else if (angle < 180) {
        if (a <= b) {
            return "No triangle";
        } else {
            return "One triangle";
        }
    }
}

function newton(x) {

    const f = (g) => {
        return 6 * g * g * g * g - 13 * g * g * g - 18 * g * g + 7 * g + 6;
    }

    const fp = (g) => {
        return 24 * g * g * g - 39 * g * g - 36 * g + 7;
    }

    let ans = x;
    let ans2 = ans - f(ans) / fp(ans);
    while (Math.abs(ans2-ans) > 0.0001){
        ans = ans2;
        ans2 = ans -f(ans) / fp(ans);
    }

    return ans.toFixed(3);
}

function polynomial(coef, expo, x) {
    let fx = ["f(x) = ", 0];

    const coefficients = coef.filter


    for (let i = 0; i < coef.length; i++) {

        if (expo[i]==0){
            fx[0] += coef[i];
        } else if (expo[i]==1){
            fx[0] += coef[i] + "x";
        } else {
            fx[0] += coef[i] + "x^" + expo[i];
        }

        if (i != coef.length - 1 && coef[i+1]>=0) {
            fx[0] += " + ";
        } else{
            fx[0] += " ";
        }
    }

    const map = expo.map((value) => {
        return x ** value;
    });

    map.forEach((item, index) => {
        fx[1] += item * coef[index];
    })
    return fx;
}