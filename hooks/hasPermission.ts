import { useEffect, useState } from 'react';
import userData from '@/util/user';
import { User } from '@/interfaces/user.interface';

const usePermission = () => {
  const [user, setUser] = useState<User | null>(null);


  useEffect(() => {
    const username = localStorage.getItem('username');
    const storeUser = userData.User.find((user) => user.username === username);
    
    if (storeUser) {
      setUser(storeUser);
    }
  }, []);

const hasPermission = (permission:string) =>{
   return user && user.role && user.role.permissions.includes(permission)
}

  return hasPermission;
};

export default usePermission;
