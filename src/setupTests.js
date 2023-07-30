import '@testing-library/jest-dom/extend-expect'

global.heap = {
    load: jest.fn(),
}
