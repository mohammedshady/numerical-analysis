function determinantOfMatrix(mat) {
    let ans;
    ans = mat[0][0] * (mat[1][1] * mat[2][2] - mat[2][1] * mat[1][2])
        - mat[0][1] * (mat[1][0] * mat[2][2] - mat[1][2] * mat[2][0])
        + mat[0][2] * (mat[1][0] * mat[2][1] - mat[1][1] * mat[2][0]);
    return ans;

}

export function cramersRule(matrix) {

    let data = {
        success: true,
        steps: [],
        matDet: [],
        values: [],
        errMsg: {
            code: null,
            message: ""
        }


    };
    // Matrix d using matrix as given in cramer's rule
    let d = [[matrix[0][0], matrix[0][1], matrix[0][2]],
    [matrix[1][0], matrix[1][1], matrix[1][2]],
    [matrix[2][0], matrix[2][1], matrix[2][2]]];

    let D = determinantOfMatrix(d);
    data.steps.push({
        name: "Matrix A",
        matrix: d,
        det: D

    })

    // Matrix d1 using matrix as given in cramer's rule
    let d1 = [[matrix[0][3], matrix[0][1], matrix[0][2]],
    [matrix[1][3], matrix[1][1], matrix[1][2]],
    [matrix[2][3], matrix[2][1], matrix[2][2]]];
    let D1 = determinantOfMatrix(d1);
    data.steps.push({
        name: "Matrix A1",
        matrix: d1,
        det: D1

    })
    // Matrix d2 using matrix as given in cramer's rule     
    let d2 = [[matrix[0][0], matrix[0][3], matrix[0][2]],
    [matrix[1][0], matrix[1][3], matrix[1][2]],
    [matrix[2][0], matrix[2][3], matrix[2][2]]];
    let D2 = determinantOfMatrix(d2);
    data.steps.push({
        name: "Matrix A2",
        matrix: d2,
        det: D2

    })
    // Matrix d3 using matrix as given in cramer's rule
    let d3 = [[matrix[0][0], matrix[0][1], matrix[0][3]],
    [matrix[1][0], matrix[1][1], matrix[1][3]],
    [matrix[2][0], matrix[2][1], matrix[2][3]]];
    let D3 = determinantOfMatrix(d3);
    data.steps.push({
        name: "Matrix A3",
        matrix: d3,
        det: D3

    })
    // Calculating Determinant of Matrices d, d1, d2, d3






    // Case 1
    if (D !== 0) {
        // matrix have a unique solution. Apply Cramer's Rule
        let x = D1 / D;
        let y = D2 / D;
        let z = D3 / D; // calculating z using cramer's rule
        data.matDet.push(
            {
                name: "A1",
                det: D1,
                overD: x,
            },
            {
                name: "A2",
                det: D2,
                overD: y,
            },
            {
                name: "A3",
                det: D3,
                overD: z,
            }
        )
    }


    // Case 2
    else {
        if (D1 === 0 && D2 === 0 && D3 === 0) {
            data.failed = true;
            data.errMsg.code = Infinity;
            data.errMsg.message = "Infinite solutions";
        }

        else if (D1 !== 0 || D2 !== 0 || D3 !== 0) {
            data.failed = true;
            data.errMsg.code = 0;
            data.errMsg.message = "No solutions";
        }

    }

    return data
}

