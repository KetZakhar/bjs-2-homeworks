// 1 задача

function parseCount (value){
    let parsed = Number.parseInt(value);
    if (parsed === NaN){
        throw new Error("Невалидное значение");
    } else return parsed
}

function validateCount (value){
 
try {
    return parseCount (value)
    
} catch (error) {
    return error ("Невалидное значение");
    
}
}


// задача 2

class Triangle {
    constructor(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;
    if ((a + b) < c || (a + c) < b || (b + c) < a){
        throw new Error("Треугольник с такими сторонами не существует");
    }
    }

getPerimeter (){
    
const P = (this.a + this.b + this.c);
return P 

}

getArea () {

   p = 0.5 * this.getPerimeter;
   const S = Math.sqrt(p * (p-this.a) * (p-this.b) * (p-this.c));
   return S.toFixed(3);
}

}

function getTriangle (a, b, c) {
    let triangle
    
try { 
    return triangle = new Triangle;
    
} catch (error) {

    return Triangle = {

        getPerimeter (){
        let String = ("Ошибка! Треугольник не существует")
        return String ;
    },
        getArea () {
        let String =("Ошибка! Треугольник не существует")
        return String;

    }
    }
}
}