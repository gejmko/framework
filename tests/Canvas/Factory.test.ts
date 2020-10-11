import {Factory} from '../../src/Canvas/Factory';
import {Canvas} from "../../src/Canvas/Canvas";

test('CreateNewCanvas', () => {
    expect(Factory.make()).toBeInstanceOf(Canvas);
});
