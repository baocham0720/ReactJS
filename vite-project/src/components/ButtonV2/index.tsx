//giống như thẻ link bên HTML không cần from

import './ButtonV2.css';
type TButton ={
    label:string;
    type?:string;
    icon?: React.ReactNode;
};
const ButtonV2 = ({label, type, icon}: TButton)=>{
    return (
        <button className={`button ${type}`}>{icon}{label}</button>
    )
};

export default ButtonV2;