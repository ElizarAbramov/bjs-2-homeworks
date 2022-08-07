function parseCount(a) {
    if (Number.isNaN(Number.parseInt(a)) == true) {
        throw new Error("Невалидное значение");
    }
    return Number.parseInt(a);
}

function validateCount(a) {
    try {
        return parseCount(a);
    } catch (error) {
        return error;
    }
}


class Triangle {

    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;

        if (a + b < c || a + c < b || b + c < a) {

            let error = new Error("Треугольник с такими сторонами не существует");
            throw error;
        }

    }


    getPerimeter() {

        return this.a + this.b + this.c;
    }


    getArea() {

        let p = this.getPerimeter() / 2;
        let s = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));
        return +s.toFixed(3);
    }
}


function getTriangle(a, b, c) {
    debugger;
    try {

        return new Triangle(a, b, c);

    }
    catch (error) {
        return {
            getPerimeter: () => "Ошибка! Треугольник не существует",

            getArea: () => "Ошибка! Треугольник не существует"
        };

    }
}