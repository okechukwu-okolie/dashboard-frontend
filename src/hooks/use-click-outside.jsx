// import { useEffect } from "react";

// export const useClickOutside = (refs,callback) =>{
//     useEffect(()=>{
//          const handleOutsideClick = (event)=>{
//            const isOutside = refs.every((ref)=>!ref?.current?.contain(event.target))

//         if (isOutside && typeof callback === 'function'){
//             callback(event)
//         }
//          }

//     window.addEventListener('mousedown', handleOutsideClick)

//     return ()=>{
//         window.removeEventListener('mousedown', handleOutsideClick)
//     }
// },[callback,refs])
// }

import { useEffect } from "react";

export const useClickOutside = (refs, callback) => {
  useEffect(() => {
    const handleOutsideClick = (event) => {
      // Ensure refs is an array and all refs have a current property
      const isOutside = Array.isArray(refs) && refs.every((ref) => {
        return ref.current && !ref.current.contains(event.target);
      });

      if (isOutside && typeof callback === 'function') {
        callback(event);
      }
    };

    window.addEventListener('mousedown', handleOutsideClick);

    return () => {
      window.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [callback, refs]);
};