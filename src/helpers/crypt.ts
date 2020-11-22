import { createHmac } from 'crypto';

export const encryptPassword = (password: string): string => {
  return createHmac('sha1', process.env.PASSWORD_HASH_SECRET).update(password).digest('hex');
};

export const checkPassword = (password: string, passwordHash: string): boolean => {
  return password && encryptPassword(password) === passwordHash;
};
