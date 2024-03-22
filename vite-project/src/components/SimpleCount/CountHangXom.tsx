import { useBankStore } from "../../Hooks/useBankStore";

const CountHangXom = () => {
  const {deposiMoney, withdramMoney} = useBankStore();
  return (
    <div>
        CountHangXom

        <button 
            onClick={()=>{
              deposiMoney (1);
            }}
            className="btn" >+1$</button>
            
        </div>
  );
};

export default CountHangXom;