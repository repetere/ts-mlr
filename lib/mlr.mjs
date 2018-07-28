import { TensorScriptModelInterface, } from '@tensorscript/core';

/**
 * Mulitple Linear Regression with Tensorflow
 * @class MultipleLinearRegression
 * @implements {TensorScriptModelInterface}
 */
export class MultipleLinearRegression extends TensorScriptModelInterface {
  /**
   * @param {Object} options - tensorflow model hyperparameters
   * @param {Object} customTF - custom tensorflow module: tensorflow / tensorflow-node / tensorflow-node-gpu
   */
  constructor(options = {}, customTF) {
    const config = Object.assign({
      epochs:500,
    }, options);
    super(config, customTF);
    return this;
  }
  /**
   * Asynchronously trains tensorflow model
   * @override
   * @param {Array<Array<number>>} x_matrix - independent variables
   * @param {Array<Array<number>>} y_matrix - dependent variables
   * @return {Object} returns trained tensorflow model 
   */
  async train(x_matrix, y_matrix) {
    const xShape = this.getInputShape(x_matrix);
    const yShape = this.getInputShape(y_matrix);
    const xs = this.tf.tensor(x_matrix, xShape);
    const ys = this.tf.tensor(y_matrix, yShape);
    this.yShape = yShape;
    this.xShape = xShape;
    this.model = this.tf.sequential();
    this.model.add(this.tf.layers.dense({ units: yShape[1], inputShape: [xShape[1],], }));
    this.model.compile({
      loss: 'meanSquaredError',
      optimizer: 'sgd',
    });
    await this.model.fit(xs, ys, this.settings);
    xs.dispose();
    ys.dispose();
    return this.model;
  }
  /**
   * Predicts new dependent variables
   * @override
   * @param {Array<Array<number>>|Array<number>} matrix - new test independent variables
   * @return {{data: Promise}} returns tensorflow prediction 
   */
  calculate(input_matrix) {
    const predictionInput = (Array.isArray(input_matrix[ 0 ]))
      ? input_matrix
      : [ input_matrix, ];
    const predictionTensor = this.tf.tensor(predictionInput);
    const prediction = this.model.predict(predictionTensor);
    predictionTensor.dispose();
    return prediction;
  }
}