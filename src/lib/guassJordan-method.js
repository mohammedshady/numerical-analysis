

export function gaussJordan(matrix) {
    let counter = 0;
    const calculations = [];
    const result = {
        steps: [],
        xValues: [],
        equations: []
    };
    const _a = JSON.parse(JSON.stringify(matrix));

    for (let i = 0; i < 3; i++) {
        const divisionFactor = _a[i][i];



        for (let j = 0; j < 4; j++) {
            _a[i][j] /= divisionFactor;
        }
        counter++;
        calculations.push({
            label: `Step ${counter}`,
            step: `R${i + 1} * 1 / ${divisionFactor} => R${i + 1}`,
            matrix: JSON.parse(JSON.stringify(_a)),
        });

        const m1 = _a[i === 1 ? 0 : 1][i];


        for (let j = 0; j < 4; j++) {
            _a[i === 1 ? 0 : 1][j] -= m1 * _a[i][j];
        }

        counter++;
        calculations.push({
            label: `Step ${counter}`,
            step: `R${i === 1 ? 1 : 2} - (${m1}) R${i + 1} => R${i === 1 ? 1 : 2}`,
            matrix: JSON.parse(JSON.stringify(_a)),
        });

        const m2 = _a[i === 2 ? 0 : 2][i];

        for (let j = 0; j < 4; j++) {
            _a[i === 2 ? 0 : 2][j] -= m2 * _a[i][j];
        }

        counter++;
        calculations.push({
            label: `Step ${counter}`,
            step: `R${i === 2 ? 1 : 3} - (${m2}) R${i + 1} => R${i === 2 ? 1 : 3}`,
            matrix: JSON.parse(JSON.stringify(_a)),
        });
    }

    result.steps = calculations;
    result.xValues.push(
        {
            name: "X1",
            value: _a[0][3]
        },
        {
            name: "X2",
            value: _a[1][3]
        },
        {
            name: "X3",
            value: _a[2][3]
        }
    )
    return result;
}
