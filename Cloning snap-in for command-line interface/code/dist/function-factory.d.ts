export declare const functionFactory: {
    readonly function_1: () => Promise<void>;
    readonly function_2: (events: any[]) => Promise<Record<string, any>>;
};
export type FunctionFactoryType = keyof typeof functionFactory;
