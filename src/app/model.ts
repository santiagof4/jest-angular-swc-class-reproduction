import { IModelBase, ModelBase } from './model.base';

interface IModel {
  version: number;
}

export class Model extends ModelBase implements IModel {
  version: number;

  constructor(model: Partial<IModel & IModelBase>) {
    super(model);
  }
}