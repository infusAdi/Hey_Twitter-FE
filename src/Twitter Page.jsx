import { useNavigate } from "react-router-dom"

export const Twitter = () => {
    const navigate = useNavigate();

    return (
        <div>
            <button onClick={() => navigate("/")}>Back</button>
            <h1 style={{ textAlign: "center" }}>Welcome </h1>
        </div>
    )
}