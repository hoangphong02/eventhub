import AsyncStorage from '@react-native-async-storage/async-storage';
import { STORAGE_KEY } from '../constants/storageKey';
import Config from 'react-native-config';

const getToken = () => {
    let token;
    const hostName = Config.HOST_NAME;
    if (hostName === 'point.satek.vn') {
        token = Config.REACT_APP_REALTIME_TOKEN_APP;
    } else {
        token = Config.REACT_APP_REALTIME_TOKEN_LOCAL;
    }
    return token;
};
const token = getToken();
// export const Realtime = new SRealtime(token, {
//     namespace: Config.REACT_APP_REALTIME,
//     authEndpoint: `${process.env.REACT_APP_DEV_MICRO_APP}/broadcast/auth`,
//     authHeader: {
//         Authorization: AsyncStorage.getItem(STORAGE_KEY.ACCESS_TOKEN),
//     },
// });
