import React from 'react';
import styles from '../HomepageFeatures/styles.module.css';

const BadgeAvatar = () => {
  return (
    <>
      <div className="flex space-x-5 overflow-hidden p-3 items-center">
        <div className="relative inline-block">
          <img className="inline-block h-12 w-12 rounded-full"
               src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
               alt=""/>
          <span
            className="absolute bottom-0 right-0 inline-block w-3 h-3 bg-green-600 border-2 border-white rounded-full"></span>
        </div>
        <div
          className="w-12 h-12 relative flex justify-center items-center rounded-full bg-blue-400 text-xl text-white uppercase p-2">HA
          <span
            className="absolute top-0 right-0 inline-block w-3 h-3 bg-red-500 border-2 border-white rounded-full"></span>
        </div>
        <div
          className="w-12 h-12 relative flex justify-center items-center rounded-full bg-gray-500 text-xl text-white uppercase p-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
          <span
            className="absolute top-0 -right-5 inline-block px-2 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">9+</span>
        </div>
        <div
          className="w-12 h-12 relative flex justify-center items-center rounded-full bg-gray-500 text-xl text-white uppercase p-2 ring-2 ring-white">H
          <span
            className="absolute bottom-0 right-0 inline-block w-3 h-3 bg-yellow-300 rounded-full"></span>
        </div>
      </div>
    </>
  );
}


export default BadgeAvatar;
