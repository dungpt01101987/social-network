import { useState } from 'react';
import { Image } from 'react-bootstrap';
import avaDefault from '../asscets/images/avata_default.png';

const UserAvatar = (props) => {
    const [ava, setAva] = useState(null);
    if (props.Image == null) {
        setAva(avaDefault)
    }
    return (
        <>
            <Image
                src={ava}
                roundedCircle
                className="user-info-image"
            />
            &nbsp;{props.name}

        </>

    );
}

export default UserAvatar;