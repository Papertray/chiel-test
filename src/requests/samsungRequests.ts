import axios from 'axios';

import {SAMSUNG_API} from '@/constants.ts';
import {SamsungRequest} from '@/types.ts';

export const fetchSamsungData: () => Promise<SamsungRequest> = async ()=> {
  const result = await axios.get<SamsungRequest>(SAMSUNG_API.url);
  return result.data;
};
