import config from '../../configs';
import { RefreshTokens } from '../../models/refreshTokens';

export const insertOne = async ({
  userId,
  token,
}: {
  userId: string;
  token: string;
}): Promise<void> => {
  const expiresIn = new Date(Date.now() + config.general.auth.liveTimeRefreshTokenMc);

  await RefreshTokens.insertOne({
    userId,
    token,
    expiresIn,
  });
};
