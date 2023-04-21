export const sortOrderBy = (objs: any, orderBy: any) => {
  return objs.sort((a: any, b: any) =>
    a?.[orderBy] > b?.[orderBy] ? 1 : b?.[orderBy] > a?.[orderBy] ? -1 : 0
  );
};
