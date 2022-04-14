import React from 'react';
import styles from '../HomepageFeatures/styles.module.css';

const BasicAvatar = () => {
  return (
    <>
      <div className="flex space-x-5 overflow-hidden p-3 items-baseline">
        <img className="inline-block h-6 w-6 rounded-full"
             src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
             alt=""/>
        <img className="inline-block h-8 w-8 rounded-full"
             src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
             alt=""/>
        <img className="inline-block h-10 w-10 rounded-full"
             src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
             alt=""/>
        <img className="inline-block h-12 w-12 rounded-full"
             src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
             alt=""/>
      </div>

      <div className="flex space-x-5 overflow-hidden p-3 items-baseline">
        <img className="inline-block h-6 w-6 rounded-sm"
             src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
             alt=""/>
        <img className="inline-block h-8 w-8 rounded-sm"
             src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
             alt=""/>
        <img className="inline-block h-10 w-10 rounded-sm"
             src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
             alt=""/>
        <img className="inline-block h-12 w-12 rounded-sm"
             src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
             alt=""/>
      </div>
    </>
  );
}


export default BasicAvatar;
