function toCamelCase(source:Record<string, unknown>):Record<string, unknown>{
  const result:Record<string, unknown> = {};
  for (const [key, value] of Object.entries(source)) {
    const camelCaseKey = key.replace(/_([a-z])/g, (g) => g[1].toUpperCase());
    result[camelCaseKey] = value;
  }
  return result;
}

export {toCamelCase}
