import { Model } from './model';

describe("failing class tests", () => {
  it('should init class with all the values', () => {
    const model = new Model({ id: '123', name: 'test', version: 1 });

    expect(model.id).toEqual('123');
    expect(model.name).toEqual('test');
    expect(model.version).toEqual(1); // This fails, 'version' is undefined
  })
})