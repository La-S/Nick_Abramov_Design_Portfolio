/* eslint-disable @typescript-eslint/no-explicit-any */
interface ApplyParamsProps {
  (
    route: string,
    params?: { [key: string]: string | number | boolean | Array<any> },
    paramNameMap?: { [key: string]: string },
  ): string;
}
/**
 * @param route - initial route
 * @param params - optional route parameters
 * @param paramNameMap - optional parameter name map -> Ex. { isLimitSet: 'is_limit_set' }
 * @returns formatter route string
 */
export const applyParamsToRoute: ApplyParamsProps = (route, params, paramNameMap) => {
  if (!params) return route;

  const paramsList = [];
  const paramsEntries = Object.entries(params);
  for (let i = 0; i < paramsEntries.length; i += 1) {
    let queryKey = paramsEntries[i][0];
    const queryValue = paramsEntries[i][1];

    if (paramNameMap && paramNameMap[queryKey]) queryKey = paramNameMap[queryKey];

    if (Array.isArray(queryValue)) {
      for (let j = 0; j < queryValue.length; j += 1) {
        if (queryValue[j]) {
          paramsList.push(`${queryKey}=${queryValue[j]}`);
        }
      }
    } else if (queryValue) {
      paramsList.push(`${queryKey}=${queryValue}`);
    }
  }

  return `${route}?${paramsList.join('&')}`;
};

export default {
  applyParamsToRoute,
};
