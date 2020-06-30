import decode from 'jwt-decode';
import { ACCESS_TOKEN_CLIENTE } from '../utils/LocalStorageKeys';

export const isAuthenticated = () => {
    try {
        const token = localStorage.getItem(ACCESS_TOKEN_CLIENTE);
        
        const decoded = decode(token);

        if (token) {
            if (decoded.exp > Date.now() / 1000) { 
              return true;
          }
          else {
              return false;
          }
      } else {
          return false
      }

    } catch(err) {
        return false;
    }    
};