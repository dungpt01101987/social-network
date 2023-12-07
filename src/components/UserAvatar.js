import { Image } from 'react-bootstrap';

const UserAvatar = (props) => {
    console.log(">>>> CHeck props", props);
    return (
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