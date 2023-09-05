
import { reduceMatrix } from "./gaussElemenation-method";
import { matrixToEquations } from "./matrixToEquations";



export default function luDecomposition(M) {

    let A = [];
    let b = [];

    // Separate the matrix M into matrix A and the matrix b

    for (let i = 0; i < 3; i++) {
        A[i] = []
        for (let j = 0; j < 3; j++) {
            A[i][j] = M[i][j];
        }
    }
    for (let j = 0; j < 3; j++) {
        b[j] = M[j][3];
    }

    const result = reduceMatrix(JSON.parse(JSON.stringify(A)));
    let data = {
        ...result,
        Amatrix: [],
        Bmatrix: [],
        Lmatrix: [],
        Umatrix: [],
        Cvalues: [],
        xValues: [],
        equations: []
    }
    data.Amatrix = JSON.parse(JSON.stringify(A));
    data.Bmatrix = b;

    const L = [];
    const U = result.reducedMatrix;
    data.Umatrix = U;

    // Initialize L with empty arrays
    for (let i = 0; i < 3; i++) {
        L[i] = [];
    }

    L[0][1] = 0; L[0][2] = 0; L[1][2] = 0;
    L[0][0] = 1; L[1][1] = 1; L[2][2] = 1;
    L[1][0] = result.m21; L[2][0] = result.m31; L[2][1] = result.m32;
    data.Lmatrix = L;

    const c1 = b[0] / L[0][0];
    const c2 = (b[1] - (L[1][0] * c1)) / L[1][1];
    const c3 = (b[2] - ((L[2][0] * c1) + (L[2][1] * c2))) / L[2][2];
    data.Cvalues.push(c1, c2, c3);


    for (let z = 0; z < 3; z++) {
        for (let y = 0; y < 4; y++) {
            A[z][y] = U[z][y];
        }
    }
    A[0][3] = c1;
    A[1][3] = c2;
    A[2][3] = c3;

    const x3 = A[2][3] / A[2][2];
    const x2 = (A[1][3] - (A[1][2] * x3)) / A[1][1];
    const x1 = (A[0][3] - ((A[0][1] * x2) + (A[0][2] * x3))) / A[0][0];
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

    let equationMatrix = JSON.parse(JSON.stringify(U));
    for (let i = 0; i < equationMatrix.length; i++) {
        equationMatrix[i].push(data.Cvalues[i]);
    }

    data.equations = matrixToEquations(equationMatrix);
    return data
}
