import axios from 'axios';

import {SAMSUNG_API} from '@/constants.ts';
import {SamsungRequest} from '@/types.ts';

// Only one endpoint available? Seems like adding less items in the modellist is possible but no real API options
export const fetchSamsungData: () => Promise<SamsungRequest> = async ()=> {
  // probably unpack the data to a nice model but first figure out what I should display?
  const result = await axios.get<SamsungRequest>(SAMSUNG_API.url);
  return result.data;
};
