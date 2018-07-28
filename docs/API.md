# Class

## `MultipleLinearRegression`

Mulitple Linear Regression with Tensorflow

### `constructor(options: Object, properties: {model:Object,tf:Object,})`

### `yShape: *`

### `xShape: *`

### `model: *`

### `train(x_matrix: Array<Array<number>>, y_matrix: Array<Array<number>>): Object`

Asynchronously trains tensorflow model

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| x_matrix | Array<Array<number>> |  | independent variables |
| y_matrix | Array<Array<number>> |  | dependent variables |

### `calculate(matrix: Array<Array<number>>|Array<number>): {data: Promise}`

Predicts new dependent variables

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| matrix | Array<Array<number>>|Array<number> |  | new test independent variables |

# Function