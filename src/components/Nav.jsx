import { Link } from 'react-router-dom'

function Nav() {
  return (
    <div className="flex justify-between p-4 items-center bg-slate-900 text-zinc-300 w-2xl px-20">
        <Link to='/'><p className='font-bold text-xl'>AuthApp</p></Link>
        <ul className='flex items-center gap-4'>
            <li><Link to='/login'><p>LogIn</p></Link></li>
            <li><Link to='/signUp'><p>signUp</p></Link></li>
        </ul>
    </div>
  )
}

export default Nav