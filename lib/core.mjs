import { TensorScriptModelInterface, } from '@tensorscript/core';

/**
 * base class for tensorscript models
 * @interface TensorScriptModelInterface
 * @property {Object} settings - tensorflow model hyperparameters
 * @property {Object} model - tensorflow model
 * @property {Object} tf - tensorflow / tensorflow-node / tensorflow-node-gpu
 */
export class MultipleLinearRegression extends TensorScriptModelInterface {
  constructor(options = {}, customTF) {
    const config = Object.assign({
      epochs:500,
    }, options);
    super(config, customTF);
    return this;
  }
  /**
   * asynchronously trains tensorflow model, must be implemented by tensorscript class
   * @param x_matrix - independent variables
   * @param y_matrix - dependent variables
   * @return {Object} returns trained tensorflow model 
   */
  async train(x_matrix, y_matrix) {
    // console.log({ x_matrix });
    const xShape = this.getInputShape(x_matrix);
    const yShape = this.getInputShape(y_matrix);
    const xs = this.tf.tensor(x_matrix, xShape);
    const ys = this.tf.tensor(y_matrix, yShape);
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
   * predicts new dependent variables
   * @param matrix - new test independent variables
   * @return {Promise} returns tensorflow prediction 
   */
  predict(input_matrix) {
    const predictionInput = (Array.isArray(input_matrix[ 0 ]))
      ? input_matrix
      : [input_matrix,];
    const predictionTensor = this.tf.tensor(predictionInput);
    const prediction = this.model.predict(predictionTensor);
    predictionTensor.dispose();
    return prediction;
  }
}