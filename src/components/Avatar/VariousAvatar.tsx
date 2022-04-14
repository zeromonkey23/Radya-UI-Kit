import React from 'react';
import styles from '../HomepageFeatures/styles.module.css';

const VariousAvatar = () => {
  return (
    <>
      <div className="flex space-x-5 overflow-hidden p-3">
        <div
          className="w-12 h-12 relative flex justify-center items-center rounded-full bg-gray-500 text-xl text-white uppercase p-2">H
        </div>
        <div
          className="w-12 h-12 relative flex justify-center items-center rounded-full bg-gray-500 text-xl text-white uppercase p-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
        </div>
        <div
          className="w-12 h-12 relative flex justify-center items-center rounded-full bg-blue-400 text-xl text-white uppercase p-2">HA
        </div>
      </div>
    </>
  );
}


export default VariousAvatar;
