import React,{useState} from 'react'
import { NavLink } from 'react-router-dom'
export const Navbar = () => {
  const [about,setabout] = useState('About')
  return (
    <nav>
      
      <div>
        <NavLink to='/' className='sure'>BuDdInG</NavLink>
      </div>
      <div>

      </div>
      <div>
      <NavLink to='about'>
        <select value={about} onChange={(e)=>setabout(e.target.value)} className="island">   
            <option value="FO"><button>Account</button></option>
            <option value="FJ">Sign Up</option>
            <option value="FI">contact</option>
            <option value="FR">contact</option>
            <option value="GF">contact</option>
          </select>
      </NavLink>
      <NavLink to='contact'>contact</NavLink>
      <NavLink to='project'>project</NavLink>
      <NavLink to='career'>career</NavLink>
      </div>
    </nav>
  )
}
