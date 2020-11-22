import React from 'react';
import Lottie from 'react-lottie';
import notFountFile from '../sources/notfound.json';

const Error=()=>{

    const notFound = {
        loop: true,
        autoplay: true,
        animationData: notFountFile,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };
    return(
        <div style={{height:"100%",display:"flex",alignItems:"center"}}>
            <Lottie 
	          options={notFound}
             height={400}
             width={400}
             isClickToPauseDisabled={true}
      />
        </div>
    );
}

export default Error;