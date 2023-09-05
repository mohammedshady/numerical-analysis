
export const matrixToEquations = (matrix) => {
    let functions = []
    let equation = ''
    matrix.forEach(row => {
        row.forEach((num, index) => {
            index++
            if (num < 0 && index !== 4) {

                if (Math.abs(num) === 1) {
                    equation += "-X" + index;
                }
                else {
                    equation += num + "X" + index;
                }

            }
            else if (num > 0 && index !== 4) {
                if (index === 1) {
                    if (Math.abs(num) === 1) {
                        equation += "X" + index;
                    }
                    else {
                        equation += num + "X" + index;
                    }
                }
                else {
                    if (Math.abs(num) === 1) {
                        equation += "+X" + index;
                    }
                    else {
                        equation += "+" + num + "X" + index;
                    }
                }
            }
            else {
                equation += '';
            }
            if (index === 4) {
                equation += "= " + num;
            }
        })
        functions.push(equation);
        equation = ''
    });
    return functions;
}