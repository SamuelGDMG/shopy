import React, { useState } from "react";

interface ImageProps{
    src?: string;
}

const Image : React.FC<ImageProps> = ({src = "", ...props}) => {
    const [state, setState] = useState(true);

    if(!state || src === ""){
        return <img {...props} src="logo192.png" alt=""/>
    }

    return <img {...props} src={src} alt="" onError={() => setState(false)}/>
}

export default Image;
