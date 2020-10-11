import {Pixel} from '../../src/Helper/Pixel';

test('HelperCalculatePixelRatio=', () => {
    expect(Pixel.calculatePixelRatio('dummy-context')).toBeGreaterThanOrEqual(0);
});
