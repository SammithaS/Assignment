import function_1 from './functions/function_1/index';

export const functionFactory = {
  function_1,
} as const;

export type FunctionFactoryType = keyof typeof functionFactory;
