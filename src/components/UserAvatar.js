import { Image } from 'react-bootstrap';
import avaDefault from '../asscets/images/avata_default.png';

const UserAvatar = (props) => {
    console.log(">>>> CHeck props: ", props);
    return (
        props.avatar === "null" ?
            <>
                <Image
                    src={avaDefault}
                    roundedCircle
                    className="user-info-image"
                />
                &nbsp;{props.name}
            </>
            :
            <>
                <Image
                    src={props.avatar}
                    roundedCircle
                    className="user-info-image"
                />
                &nbsp;{props.name}
            </>

    );
}

export default UserAvatar;