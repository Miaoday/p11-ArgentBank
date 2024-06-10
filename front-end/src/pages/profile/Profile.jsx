import User from '../../components/user/User.jsx';
import Account from '../../components/account/Account.jsx';
import dataAccount from '../../data/account_data.json';

function Profile (){
  return(
    <main className='main bg-dark'>
      <User />
      <h2 className="sr-only">Accounts</h2>
      {dataAccount.map((data)=>(
        <Account 
        key={data.id}
        title={data.account}
        amount={data.amount}
        description={data.description}
        />
      ))} 
    </main>
  )
}
export default Profile;