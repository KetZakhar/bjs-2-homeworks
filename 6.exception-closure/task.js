// 1 задача

function parseCount(value){
    let parsed = Number.parseInt(value);
    if (isNaN(parsed)){
        throw new Error("Невалидное значение");
    } else return parsed
}

function validateCount(value){
 
  try {
    return parseCount(value)
    
  } catch (error) {
    return error;
    
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
    
    getPerimeter() {
        const P = this.a + this.b + this.c;
        return P;
    }

    getArea() {

     let p = 0.5 * this.getPerimeter();
     return  +Math.sqrt(p * (p-this.a) * (p-this.b) * (p-this.c)).toFixed(3);
    }

}

function getTriangle(a, b, c) {
  
    
  try { 
    const triangle = new Triangle(a, b, c);
    return triangle
    
  } catch (error) {

    return Triangle = {

        getPerimeter(){
          return "Ошибка! Треугольник не существует"
         ;
    },
        getArea() {
          return "Ошибка! Треугольник не существует";

    }
    }
}
}