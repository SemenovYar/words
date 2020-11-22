export const getSomeObjectFields = <T>(user: T, fields: string[]): T => {
  const returnUser = {};

  fields.forEach((field) => {
    // @ts-ignore
    returnUser[field] = user[field];
  });

  // @ts-ignore
  return returnUser;
};
