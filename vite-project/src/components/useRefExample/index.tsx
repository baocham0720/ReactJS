import React, {useRef} from 'react'

const UserRefExample = () => {

    const inputRef = useRef();
 //console.log('render');
 

  const handleClick = () => {
    inputRef.current.value = 'Hello, React!';
  };

  const audioRef= useRef();


  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={handleClick}>Change Value</button>
      <audio ref={audioRef} src="https://www.nhaccuatui.com/bai-hat/anh-sao-va-bau-troi-tri.o3929Y38WDqC.html"></audio>
      <button 
      onClick={()=>{
        audioRef.current.play();
      }}>Play</button>

     <button 
      onClick={()=>{
        audioRef.current.pause();
      }}>Pause</button>
    </div>
  )
}

export default UserRefExample;