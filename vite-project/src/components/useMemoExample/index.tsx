import React, {useState, useMemo} from 'react'
//import ReactDOM from "react-dom";

//áp dụng useMemo khi rò rỉ dữ liệu và tăng hiệu suất người dùng khi mạng bị lag

const computeLetterCount = (word : string) => {
    let i = 0;
    while (i < 1000000000) i++;
    return word.length;
};

const UseMemoExample = () => {
    const [count, setCount] = useState(0);
    const [wordIndex, setWordIndex] = useState(0);
    
    const words = ["hey", "this", "is", "cool"];
    const word = words[wordIndex];
    
   // Khi tăng biến count --> App re-render lại nó sẽ chạy qua hàm này, trong khi chưa cần dùng đến nó
   // useMemo trả về kết quả và cache nó khi chưa dùng đến
   const letterCount = useMemo(() => {
       return computeLetterCount(word);
   }, [word]);
  
    //without useMemo
    //const letterCount = computeLetterCount(word);
    console.log("<<=== count ===>>", count);

    return (
      <div style={{ padding: "15px" }}>
        <h2>Compute number of letters</h2>
  
        <p>
          "{word}" has {letterCount} letters
        </p>
  
        <button
       
        onClick={() => {
            const next = wordIndex + 1 === words.length ? 0 : wordIndex + 1;
            setWordIndex(next);
          }}
        >
          Next word
        </button>
        <br />
        <br />
        <h2>Increment a counter (fast ⚡️)</h2>
        <p>Counter: {count}</p>
        <button onClick={() => setCount(count + 1)}>Increment</button>
      </div>
    );
}

export default UseMemoExample;