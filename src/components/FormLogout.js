import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const FormLogout = () => {
    const navigate = useNavigate();
    useEffect(() => {
        let token = localStorage.getItem("token");
        if (token) {
            localStorage.clear("token");
            navigate("/login");
        }
    })
    return (
        <></>
    )
}

export default FormLogout;