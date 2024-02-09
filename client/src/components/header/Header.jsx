import React from 'react';
import { RiSearchLine } from 'react-icons/ri';
import Icon from '../../assets/Icon.png';
import {Link} from 'react-router-dom'
function Header() {
  return (
    <nav className="flex justify-around items-center rounded-xl mb-6 p-4 bg-gray-500">
      <div className="flex gap-2">
        <img className="bg-white p-1 rounded-md" src={Icon} alt="" />
        <Link to={"/"} className="text-red-600 text-xl font-bold">Masai Forum</Link>
      </div>
      <div className="flex items-center bg-gray-400 rounded-md p-2">
        <input
          className="px-2 w-full bg-gray-400 outline-none placeholder-gray-300"
          type="search"
          placeholder="Type here to search..."
        />
        <RiSearchLine className="h-6 w-6 text-gray-200 mr-4" />
      </div>
      <div>
        <Link to={'/auth'} className="bg-gray-600 rounded-md px-6 text-gray-200 text-lg py-2 hover:bg-gray-500">
          Login
        </Link>
      </div>
    </nav>
  );
}

export default Header;
