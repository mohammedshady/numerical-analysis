import { matrixToEquations } from "./matrixToEquations";

export const reduceMatrix = (matrix) => {
    let data = {
        reducedMatrix: [],
        steps: [],
        m21: null,
        m31: null,
        m32: null,
    }

    const m21 = matrix[1][0] / matrix[0][0];
    data.m21 = m21;

    for (let i = 0; i < matrix[0].length; i++) {
        matrix[1][i] = matrix[1][i] - (m21 * matrix[0][i])
    }
    data.steps.push({
        name: "Step 1",
        equation: "E2 - (m21)E1 -> E2",
        matrix: JSON.parse(JSON.stringify(matrix))
    })

    const m31 = matrix[2][0] / matrix[0][0];
    data.m31 = m31;

    for (let i = 0; i < matrix[0].length; i++) {

        matrix[2][i] = matrix[2][i] - (m31 * matrix[0][i])
    }
    data.steps.push({
        name: "Step 2",
        equation: "E3 - (m31)E1 -> E3",
        matrix: JSON.parse(JSON.stringify(matrix))
    })

    const m32 = matrix[2][1] / matrix[1][1];
    data.m32 = m32;

    for (let i = 0; i < matrix[0].length; i++) {

        matrix[2][i] = matrix[2][i] - (m32 * matrix[1][i])
    }
    data.steps.push({
        name: "Step 3",
        equation: "E3 - (m32)E1 -> E3",
        matrix: JSON.parse(JSON.stringify(matrix)),
    })
    data.reducedMatrix = JSON.parse(JSON.stringify(matrix));

    return data;
}



export const gaussElemenationMethod = (matrix) => {

    const result = reduceMatrix(matrix);

    let data = {
        ...result,
        xValues: [],
        equations: []
    }

    const x3 = (matrix[2][3] / matrix[2][2]);
    const x2 = (matrix[1][3] - (matrix[1][2] * x3)) / matrix[1][1];
    const x1 = (matrix[0][3] - ((matrix[0][1] * x2) + (matrix[0][2] * x3))) / matrix[0][0];

    data.xValues.push(
        {
            name: "X1",
            value: x1
        },
        {
            name: "X2",
            value: x2
        },
        {
            name: "X3",
            value: x3
        }
    )

    data.equations = matrixToEquations(JSON.parse(JSON.stringify(matrix)));
    return data;
}

