import useDB from "../hook/usedb";
import Interface from "../layout/Interface";

const StartSceneInterface = ({setData}) => {
    const { dbLogin, dbFindOne, dbFindAll } = useDB();
    const handleClickButton = async() => {
        const result = await dbLogin();
        console.log(result);
    }
    const handleClickButton2 = async() => {
        const result = await dbFindOne({
            cocktailName:"Magarita" // filter
        },{
            cocktailName:1 // cocktailName 열 가져오기 (projection)
        });
        console.log(result);
    }
    const handleClickButton3 = async() => {
        const result = await dbFindAll(); // {text:{$exists:true}}
        setData(result);
        // console.log(result);
    }
    const handlePingPong = async() => {
    }
    return (
        <Interface>
            <div className="interface-button-container">
                <button className="interface-button"
                onClick={handleClickButton}>토큰 가져오기</button>
                <button className="interface-button"
                onClick={handleClickButton2}>데이터 가져오기</button>
                <button className="interface-button"
                onClick={handleClickButton3}>데이터 모두 가져오기</button>
                {/* <button className="interface-button" */}
                {/* onClick={handlePingPong}>핑퐁</button> */}
            </div>
        </Interface>
    )
}
export default StartSceneInterface;