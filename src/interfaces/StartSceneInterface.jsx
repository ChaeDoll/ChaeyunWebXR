import Interface from "../layout/Interface";

const StartSceneInterface = () => {
    
    const handleClickButton = () => {
        console.log('hi');
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