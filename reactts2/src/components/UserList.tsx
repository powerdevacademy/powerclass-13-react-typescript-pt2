import React, { useEffect, useState } from 'react';
import User from '../models/user';
import UserService from '../services/user';

const UserList = () => {

    const [list, setList] = useState<User[]>([]);

    useEffect(()=> {
        UserService.list().then((res) => {
            if (res instanceof Error) {
                console.log('ERROR', res);
            } else {
                console.log('DATA', res);
                setList(res);
            }
        });
    }, []);

    return(
        <div>LIST</div>
    );
}

export default UserList;