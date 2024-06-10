import { useState, useEffect } from 'react';
import { useDispatch , useSelector} from 'react-redux';
import { loginSuccessful } from '../../redux/actions/AuthAction';
import { getUserName } from '../../redux/actions/UserAction';
import UserInfo from './UserInfo';
import Buttons from '../buttons/Buttons';
import './user.css';

function User(){
  const [isOpen, setIsOpen]= useState(false);
  const [userData, setUserData] = useState({});
  const token = localStorage.getItem("token") || sessionStorage.getItem("token");
  const userName = useSelector((state)=> state.user.userData.userName);
  console.log(userName);
  const dispatch = useDispatch();
  
  function handleOpenEditing (){
    setIsOpen(!isOpen);
  };
  
  useEffect(()=>{
    if (token) {
      dispatch(loginSuccessful(token));
      async function fetchUserData (){
        try {
          const response = await fetch('http://localhost:3001/api/v1/user/profile', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`,
            }
          });
          if (response.ok){
            const data = await response.json();
            const fetchData = {
              email: data.body.email,
              firstName: data.body.firstName,
              lastName: data.body.lastName,
              userName: data.body.userName,
              createdAt: data.body.createdAt,
              updatedAt: data.body.updatedAt,
              id: data.body.id,
          }
          console.log(fetchData);
          setUserData(fetchData);          
          dispatch(getUserName(fetchData));
          } else {
            console.log("Call back data failed");
          }
        }catch (error) {
          console.error(error);
        };
      };
      fetchUserData();
    } 
  },[dispatch, token]);
  
  return(   
    <>
      <div className='header'>
        <h1>Welcome back</h1>
        <br/>
        <h1>{userData?.firstName} {userData?.lastName} !</h1>
        
        <Buttons 
        className='edit-button' 
        type='button' 
        buttonName='Edit Name' 
        onClick={handleOpenEditing}
        />
      </div>   
      {isOpen && (
        <UserInfo setIsOpen={setIsOpen}/>
      )}
    </>
  )
}
export default User;