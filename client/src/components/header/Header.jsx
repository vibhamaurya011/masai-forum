import React from 'react';
import { RiSearchLine } from 'react-icons/ri';
import Icon from '../../assets/Icon.png';

function Header() {
  return (
    <nav className="flex justify-around items-center rounded-xl mb-6 p-4 bg-gray-500">
      <div className="flex gap-2">
        <img className="bg-white p-1 rounded-md" src={Icon} alt="" />
        <h1 className="text-red-600 text-xl font-bold">Masai Forum</h1>
      </div>
      <div className="flex items-center bg-gray-400 rounded-md p-2">
        <input
          className="px-2 w-full bg-gray-400 outline-none placeholder-gray-200"
          type="search"
          placeholder="Type here to search..."
        />
        <RiSearchLine className="h-6 w-6 text-gray-200 mr-4" />
      </div>
      <div>
        <button className="bg-gray-600 rounded-md px-6 text-gray-200 text-lg py-2 hover:bg-gray-500">
          Login
        </button>
      </div>
    </nav>
  );
}

export default Header;
