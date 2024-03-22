import { myProfile } from "../../data/myProfile";

type TPresonal={
    name: string;
}
const SingleItem = ({name} : TPresonal) =>{
    return(
        <li>
            <span>{name}</span>   
        </li>
    )
}

const PresonalSkill = () => {
  return (
    <>
    <div>
          <ul>
              {
                  myProfile.personalskill.map((item)=>{
                      return <SingleItem name={item.name}/>
                  })
              }
          </ul>
      </div>
    </>
  )
}

export default PresonalSkill;