import {dateKeys} from "./date-keys";

function fromStrDate(source:Record<string, unknown>):Record<string, unknown>{
  const result:Record<string, unknown> = {};
  for (const [key, value] of Object.entries(source)) {
    if(typeof source[key] === 'object' && !Array.isArray(source[key])){
      result[key] = fromStrDate(value as Record<string, unknown>);
    }
    if(dateKeys.includes(key)){
      result[key] = new Date(result[key] as string)
    } else {
      result[key] = value;
    }
  }
  return result;
}

export {fromStrDate};