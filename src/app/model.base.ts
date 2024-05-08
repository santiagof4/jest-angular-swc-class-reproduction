export interface IModelBase {
  id?: string;
  name: string;
}

export class ModelBase implements IModelBase {
  id?: string;
  name: string;

  constructor(model: Partial<IModelBase>) {
    Object.assign(this, model);
  }
}