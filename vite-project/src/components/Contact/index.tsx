import { myProfile } from "../../data/myProfile";

type TContact = {
    name:string;
    content:string;
};

const SingleItem = ({name, content} : TContact) =>{
    return(
        <li>
            <span>{name}</span><br/>
            <span>{content}</span>
        </li>
    )
}
 
const Contact = () => {
    return (
      <div>
          <ul>
              {
                  myProfile.contact.map((item)=>{
                      return <SingleItem name={item.name} content={item.content}/>
                  })
              }
          </ul>
      </div>
    )
  }
export default Contact;