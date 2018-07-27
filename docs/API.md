# Class

## `MultipleLinearRegression`

base class for tensorscript models

### `constructor()`

### `model: *`

### `train(x_matrix: *, y_matrix: *): Object`

asynchronously trains tensorflow model, must be implemented by tensorscript class

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| x_matrix | * |  | independent variables |
| y_matrix | * |  | dependent variables |

### `calculate(matrix: *): Promise`

predicts new dependent variables

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| matrix | * |  | new test independent variables |

# Function