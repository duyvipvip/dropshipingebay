export const requestQuery = (queries: object): string => {
    if (!queries) { return ''; }
    let result: object = JSON.parse(JSON.stringify(queries));
    result = Object.keys(result).map((key) => {
      return `${key}=${result[key]}`;
    });
    return Object.values(result).join('&');
  };
  
  