import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { editUserName } from '../../redux/actions/UserAction';
import Buttons from '../buttons/Buttons';
import './userInfo.css';

function UserInfo({ setIsOpen }){
  const token = useSelector((store)=>store.auth.token);
  const userData = useSelector((store)=>store.user.userData);
  const dispatch = useDispatch();
  const [userProfile, setUserProfile] = useState('');
  const [errMsg, setErrMsg]= useState('');
  function closeEditor(){
    setIsOpen(false);
  };
  
  async function handleModification (event) {
    event.preventDefault();
    try {
      const response = await fetch('http://localhost:3001/api/v1/user/profile',{
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({
          userName:userProfile
        }),
      });

      if (response.ok) {
        const dataApi = await response.json();
        const userName = dataApi.body.userName;
        dispatch(editUserName(userName));
      }
    } catch (error) {
      console.error(error);
    }

    if (userProfile.trim()) {
      setErrMsg("");
    } else {
      return setErrMsg("User name is not available");
    }
  }

  return(
    <main className='edit-main bg-dark'>
      <section className='sign-in-content edit-user'>
      <i className="fa fa-user-circle sign-in-icon"/>
      <h2>Edit user info</h2>
      <form>
        <div className='input-wrapper'>
          <label htmlFor='userName'>Username:</label>
          <input 
          id='userName' 
          type='text'
          defaultValue={userData.userName}
          onChange={(event)=>setUserProfile(event.target.value)}
          />
        </div>
        <div className='input-wrapper'>
          <label htmlFor='firstName'>First Name:</label>
          <input
          id='firsName' 
          type='text'
          defaultValue={userData.firstName}  
          disabled="disabled"
          />
        </div>
        <div className='input-wrapper'>
          <label htmlFor='lastName'>Last Name:</label>
          <input 
          id='lastName' 
          type='text'
          defaultValue={userData.lastName}
          disabled="disabled"
          />
        </div>
        <div></div>
        <div className='button-box'>
          <Buttons 
          className='modify-button' 
          type='submit' 
          buttonName='Save'
          onClick={handleModification}
          />
          <Buttons 
          className='modify-button' 
          type='button' 
          buttonName='Cancel' 
          onClick={closeEditor}
          />
      </div>
      {errMsg && <p>{errMsg}</p>}
      </form>
      </section>
    </main> 
  )
}
export default UserInfo;