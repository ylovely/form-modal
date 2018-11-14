type T = string | number | boolean | object
export function map(array: T[], iteratee: any): T[] {
  return arrayMap(array, baseIteratee(iteratee));
}

export function reduce(array: T[], iteratee: any, accumulator: any): any {
  return arrayReduce(array, baseIteratee(iteratee), accumulator);
}

export function arrayMap(array: T[], iteratee: any): T[] {
  let index = -1;
  const length = array.length;
  const result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

export function arrayReduce(array, iteratee, accumulator) {
  let index = -1;
  const length = array.length;

  if (length) {
    accumulator = array[++index];
  }
  while (++index < length) {
    accumulator = iteratee(accumulator, array[index], index, array);
  }
  return accumulator;
}

export function baseIteratee(value: any) {
  if (typeof value === 'function') {
    return value;
  }
  return property(value);
}

export function property(path: any) {
  return baseProperty(toKey(path));
}

export function toKey(value: any): string {
  if (typeof value === 'string') {
    return value;
  }
  const result = (value + '');
  return (result === '0' && (1 / value) === -(1 / 0)) ? '-0' : result;
}

export function baseProperty(key: string) {
  return (object) => {
    return object === null ? undefined : object[key];
  };
}
