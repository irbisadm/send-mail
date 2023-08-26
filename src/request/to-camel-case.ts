function toCamelCase(source:Record<string, unknown>):Record<string, unknown>{
  const result:Record<string, unknown> = {};
  for (const [key, value] of Object.entries(source)) {
    const camelCaseKey = key.replace(/_([a-z])/g, (g) => g[1].toUpperCase());
    if(typeof source[key] === 'object' && !Array.isArray(source[key])){
      result[camelCaseKey] = toCamelCase(value);
    } else {
      result[camelCaseKey] = value;
    }

  }
  return result;
}

export {toCamelCase}
