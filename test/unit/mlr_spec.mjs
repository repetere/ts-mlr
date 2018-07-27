import chai from 'chai';
import sinon from 'sinon';
// import { expect, } from 'chai';
import sinonChai from 'sinon-chai';
import chaiAsPromised from 'chai-as-promised';
import 'babel-polyfill';
import { MultipleLinearRegression, } from '../../index.mjs';
const expect = chai.expect;

chai.use(sinonChai);
chai.use(chaiAsPromised);

describe('MultipleLinearRegression', () => { 
  describe('constructor', () => {
    it('should export a named module class', () => {
      console.log({ MultipleLinearRegression });
      const MLR = new MultipleLinearRegression();
      const MLRConfigured = new MultipleLinearRegression({ test: 'prop', });
      expect(MultipleLinearRegression).to.be.a('function');
      expect(MLR).to.be.instanceOf(MultipleLinearRegression);
      expect(MLRConfigured.settings.test).to.eql('prop');
    });
  });
});