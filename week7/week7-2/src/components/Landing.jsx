import { useNavigate } from "react-router-dom"

export default function Landing() {
    const navigate = useNavigate();

    function handleClick() {
        navigate('/dashboard')
    };
    return <div>
        Landing Page
        <button onClick={handleClick}>Click to navigate</button>
    </div>
}