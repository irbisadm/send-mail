import {dateKeys} from "./date-keys";

function toStrDate(source:Record<string, unknown>):Record<string, unknown>{
  const result:Record<string, unknown> = {};
  for (const [key, value] of Object.entries(source)) {
    if(dateKeys.includes(key)){
      result[key] = (result[key] as Date).toISOString();
    }
    if(typeof source[key] === 'object' && !Array.isArray(source[key])){
      result[key] = toStrDate(value as Record<string, unknown>);
    } else {
      result[key] = value;
    }
  }
  return result;
}

export {toStrDate};