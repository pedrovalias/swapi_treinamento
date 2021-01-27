export interface Supplier<T> {
  get(): T;
}

export interface Action<T> {
  apply(input: T): void;
}

export interface Factory<T> {
  getInstance(): Supplier<T>;
}
