import React,{useContext} from 'react'
import { PreviewContent } from "./PreviewContent.jsx";

const ImageHolder=()=>{

const {
    image: [image, setImage]
} = useContext(PreviewContent);
return(
<div className=" w-30 dib b--light-silver br1 ba pa4 relative ">
            
            {
                (image !==null) ?
                <div>
                <img src={image} className=""/>
                <input
              className="dropimage w-100"
              accept="image/jpeg ,image/jpg ,image/png ,image/webp"
              type="file"
              autocomplete="off"
              onChange={e=>{setImage(URL.createObjectURL(e.target.files[0]))}}
            /></div>
                :
                <div className="pa0">
                   <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="image"
              className="h2"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                d="M464 448H48c-26.51 0-48-21.49-48-48V112c0-26.51 21.49-48 48-48h416c26.51 0 48 21.49 48 48v288c0 26.51-21.49 48-48 48zM112 120c-30.928 0-56 25.072-56 56s25.072 56 56 56 56-25.072 56-56-25.072-56-56-56zM64 384h384V272l-87.515-87.515c-4.686-4.686-12.284-4.686-16.971 0L208 320l-55.515-55.515c-4.686-4.686-12.284-4.686-16.971 0L64 336v48z"
              ></path>
            </svg>
            <span> + Logo</span>
            <input
              className="dropimage w-100"
              accept="image/jpeg ,image/jpg ,image/png ,image/webp"
              type="file"
              autocomplete="off"
              onChange={e=>{setImage(URL.createObjectURL(e.target.files[0]))}}
            />
        </div>
        }
          </div>
)
}

export default ImageHolder;