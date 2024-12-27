import { useState } from "react";
import { PiHeart, PiHeartFill } from "react-icons/pi";

function Like() {
  const [isLiked, setIsLiked] = useState(false);

  const handleClick = () => {
    setIsLiked((prev) => !prev);
  };

  return (
    <div onClick={handleClick} style={{cursor:'pointer'}}>
        {isLiked ? <PiHeartFill size={20} color="red"/>: <PiHeart size={20}/>}
    </div>
  );
}

export default Like;
