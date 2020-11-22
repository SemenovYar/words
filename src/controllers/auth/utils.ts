import config from '../../configs';
import { v4 as uuid } from 'uuid';
import jwt from 'jsonwebtoken';
import { RefreshTokenRepository } from '../../repositories/refreshTokens';
import { ReqUser, TokenPair } from '../../types';

export const getTokenPair = async ({ user }: { user: ReqUser }): Promise<TokenPair> => {
  const refreshToken = uuid();
  const accessToken = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, {
    expiresIn: config.general.auth.liveTimeAccessTokenSec,
  });

  await RefreshTokenRepository.insertOne({ userId: user._id, token: refreshToken });

  return {
    refreshToken,
    accessToken,
  };
};
