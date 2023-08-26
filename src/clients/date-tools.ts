function fromIso(source:Record<string, unknown>,keys:string[]):Record<string, unknown>{
  const resultObject = {...source};
  keys.forEach(key=>{
    if(!source[key] || typeof source[key]!=='string'){
      return;
    }
    resultObject[key] = new Date(source[key] as string);
  })
  return resultObject
}
function toIso(source:Record<string, unknown>,keys:string[]):Record<string, unknown>{
  const resultObject = {...source};
  keys.forEach(key=>{
    if(!source[key] || typeof source[key]!=='object'){
      return;
    }
    if('toISOString' in (source[key] as Object)){
      resultObject[key] = (source[key] as Date).toISOString();
    }
  })
  return resultObject
}

const dateTools = {
  fromIso,
  toIso
}

export {dateTools};