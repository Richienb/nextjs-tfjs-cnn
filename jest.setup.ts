import '@testing-library/jest-dom/extend-expect';

jest.setTimeout(10000);
jest.mock('@tensorflow/tfjs', () => ({}));
