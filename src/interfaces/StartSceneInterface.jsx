import Interface from "../layout/Interface";

const StartSceneInterface = () => {
    const handleClickButton = async() => {
        const response = await fetch("./functions/getData");
        const result = await response.json();
        console.log(result);
    }
    return (
        <Interface>
            <div className="interface-button-container">
                <button className="interface-button"
                onClick={handleClickButton}>시작하기</button>
            </div>
        </Interface>
    )
}

export default StartSceneInterface;