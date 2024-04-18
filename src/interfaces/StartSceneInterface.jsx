import axios from "axios";
import Interface from "../layout/Interface";
import { useState } from "react";
const DB_API_URL = import.meta.env.REACT_APP_MONGODB_API_URL;

const StartSceneInterface = () => {
    const [dbToken, setDbToken] = useState();
    const handleClickButton = async() => {
        axios.post('https://us-west-2.aws.services.cloud.mongodb.com/api/client/v2.0/app/data-ftpwy/auth/providers/local-userpass/login',{
            username: "codbs0627",
            password: "NIjRQLrV9DpBx87N"
        }, {headers:{"Content-Type":"application/json"}})
        .then(res=>{
            console.log(res.data);
            setDbToken(res.data)
        })
    }
    const handleClickButton2 = async() => {
        axios.post('https://us-west-2.aws.data.mongodb-api.com/app/data-ftpwy/endpoint/data/v1/action/findOne',{
            collection: "PersonalProject",
            database: "ChaeyunXR",
            dataSource: "ChaeyunCluster",
            projection: {
                _id: 1
            }
        },{
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Request-Headers': '*',
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