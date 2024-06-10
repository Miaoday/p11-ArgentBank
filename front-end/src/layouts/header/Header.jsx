import { NavLink, useNavigate} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../redux/actions/AuthAction';
import logo from '../../assets/images/argentBankLogo.webp'
import './header.css';

function Header() {
  const logged = useSelector((state)=>state.auth.connection);
  const userName = useSelector((state)=> state.user.userData.userName);
  console.log("Header userName:", userName);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  function handleLogout(event){
    event.preventDefault();
    dispatch(logout());
    sessionStorage.clear();
    localStorage.clear();
    navigate('/');
  }
  
  return(
    <header>
      <nav className='main-nav'>
        <NavLink to='/' className='main-nav-logo'>
          <h1 className='sr-only'>Argent Bank</h1>
          <img src={logo} alt='logo of Argent Bank' className='main-nav-logo-image'/>
        </NavLink>
        {logged && (
          <div className='main-nav-itemBox'>
            <NavLink to='/profile' className='main-nav-item'>              
              <i className='fa-solid fa-circle-user' />
              <p>{userName}</p>             
            </NavLink>
            <NavLink to='/' className='main-nav-item' onClick={handleLogout}>
              <i className='fa fa-sign-out'/>
              <p>Sign Out</p>
            </NavLink>
          </div>
        )}
        {!logged && (
          <div>
            <NavLink to='/login' className='main-nav-item'>
              <i className='fa-solid fa-circle-user' />
              <p>Sign In</p>
            </NavLink>
          </div>
        )}        
      </nav>
    </header>
  )
}
export default Header;