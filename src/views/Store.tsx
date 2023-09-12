import { useParams } from "react-router-dom";

export const Store: React.FC = () => {
    const { id } = useParams();
    return (
        <div>
            <div>
                <h1>ID: {id}</h1>
            </div>
        </div>
    )
}