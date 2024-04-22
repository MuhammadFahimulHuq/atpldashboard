import { useEffect, useState } from 'react';
import userData from '@/util/user';
import { User } from '@/interfaces/user.interface';

const usePermission = (permission: string): boolean => {
  const [user, setUser] = useState<User | null>(null);
  const [hasPermission, setHasPermission] = useState<boolean>(false);

  useEffect(() => {
    const username = localStorage.getItem('username');
    const storeUser = userData.User.find((user) => user.username === username);
    
    if (storeUser) {
      setUser(storeUser);
    }
  }, []);

  useEffect(() => {
    if (user && user.role && user.role.permissions.includes(permission)) {
      setHasPermission(true);
    } else {
      setHasPermission(false);
    }
  }, [user, permission]);

  return hasPermission;
};

export default usePermission;
