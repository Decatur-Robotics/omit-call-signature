type OmitCallSignature<T> = { [K in keyof T]: T[K] } & (T extends new (
  ...args: infer R
) => infer S
  ? new (...args: R) => S
  : unknown);

export default OmitCallSignature;
