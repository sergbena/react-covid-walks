import userInfo from './data/user_info.json';
import adminInfo from './data/user_info_admin.json';
import walksInfo from './data/walks_info.json';
import pepeFriendsInfo from './data/pepe_friends_info.json';
import joseFriendsInfo from './data/jose_friends_info.json';

export const serverMockConfig = {
  endpoints: {
    '/login': {
      POST: credentials => ('pepe' === credentials.login ? adminInfo : userInfo)
    },
    '/walks': {
      GET: walksInfo
    },
    '/friends': {
      GET: params => 'pepe' === params.user ? pepeFriendsInfo : joseFriendsInfo
    }
  }
};
