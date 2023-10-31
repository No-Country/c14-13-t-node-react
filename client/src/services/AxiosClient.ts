import { getBaseUrl } from '@/utils/getUrl';
import axios from 'axios';

export const BASE_URL = `${getBaseUrl()}/api`; //En producción debería cambiar

export const axiosClient = axios.create({ baseURL: BASE_URL });
