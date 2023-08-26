function toSnakeCase(source:Record<string, unknown>):Record<string, unknown>{
  const result:Record<string, unknown> = {};
  for (const [key, value] of Object.entries(source)) {
    const snakeCaseKey = key.replace(/([A-Z])/g, (g) => `_${g[0].toLowerCase()}`);
    result[snakeCaseKey] = value;
  }
  return result;
}

export {toSnakeCase};