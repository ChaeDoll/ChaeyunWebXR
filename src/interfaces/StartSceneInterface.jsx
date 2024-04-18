import axios from "axios";
import Interface from "../layout/Interface";
import { useState } from "react";
const LOGIN_URL = import.meta.env.REACT_APP_MONGODB_LOGIN;
const DB_API_URL = import.meta.env.REACT_APP_MONGODB_API_URL;

const StartSceneInterface = () => {
    const [dbToken, setDbToken] = useState();
    const handleClickButton = async() => {
        axios.post(LOGIN_URL,{
            username: "codbs0627",
            password: "NIjRQLrV9DpBx87N"
        }, {headers:{"Content-Type":"application/json"}})
        .then(res=>{
            console.log(res.data);
            setDbToken(res.data)
        })
    }
    const handleClickButton2 = async() => {
        axios.post(`${DB_API_URL}/action/find`,{
            dataSource: "ChaeyunCluster",
            database: "ChaeyunXR",
            collection: "PersonalProject",
            filter: {
            },
            projection: {
                // _id: 1,
                cocktailName: 1,
            }
            // select _id from PersonalProject where (filer);
        },{
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${dbToken.access_token}`,
              }
        })
        .then(res=>{
            console.log(res.data);
        })
    }
    return (
        <Interface>
            <div className="interface-button-container">
                <button className="interface-button"
                onClick={handleClickButton}>토큰 가져오기</button>
                <button className="interface-button"
                onClick={handleClickButton2}>데이터 가져오기</button>
            </div>
        </Interface>
    )
}

export default StartSceneInterface;