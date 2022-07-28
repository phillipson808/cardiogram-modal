import { useState } from 'react';
import chevronDown from "../images/chevron-down.png";
import chevronUp from "../images/chevron-up.png";

const ReadMore = ({ children }) => {

    const [isReadMoreShown, setReadMore] = useState(false);
    const toggleBtn = () => {
        setReadMore(prevState => !prevState)
    }
    return (

        <div>
            {isReadMoreShown ? children : children.substr(0, 125)}

            <div onClick={toggleBtn} style={readMoreContainerStyle}>
                <p>Read More</p><img src={isReadMoreShown ? chevronUp : chevronDown} style={{ height: '10px', paddingLeft: '10px' }}></img>
            </div>


        </div>
    )
}
const readMoreContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '0247A7',
    cursor: 'pointer'

}


export default ReadMore;