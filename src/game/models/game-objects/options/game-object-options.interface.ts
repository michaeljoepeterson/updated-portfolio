import { ShapeOptions } from "./shape-options.interface";

export interface IGameObjectOptions{
    shape: ShapeOptions;
}

export const defaultOptions: IGameObjectOptions = {
    shape: new ShapeOptions()
}
