/* GroupComponent.tsx
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from './store';
import { setUsers, addUser } from './userGroupSlice';

const GroupComponent: React.FC = () => {
  const userGroup = useSelector((state: RootState) => state.userGroup);
  const dispatch = useDispatch<AppDispatch>();

  const updateUserGroup = (newUsers: User[]) => {
    dispatch(setUsers(newUsers));
  };

  return (
    <div>
      {// 유저 그룹 정보 렌더링 
      {userGroup.users.map(user => (
        <div key={user.id}>
          {user.name} - {user.color}
        </div>
      ))}
      {// 유저 그룹 정보 업데이트 로직 
    </div>
  );
};

export default GroupComponent; */
