import React from "react";
import s from './Loader.module.css'
import { Hearts } from "react-loader-spinner";


export const Loader = () => { 
    return (
        <>
            <div className={s.loaderWrapper}>
            <Hearts 
  height="80"
  width="80"
  color="#4fa94d"
  ariaLabel="hearts-loading"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
/>
            </div>
        </>
    )
}

