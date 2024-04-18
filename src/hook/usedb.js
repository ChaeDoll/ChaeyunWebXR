import axios from "axios";
import { useState } from "react";

const LOGIN_URL = import.meta.env.VITE_MONGODB_LOGIN;
const DB_API_URL = import.meta.env.VITE_MONGODB_API_URL;
const DB_USERNAME = import.meta.env.VITE_MONGODB_USERNAME;
const DB_PASSWORD = import.meta.env.VITE_MONGODB_PASSWORD;
const DB_SOURCE = import.meta.env.VITE_MONGODB_DATASOURCE
const DB_NAME = import.meta.env.VITE_MONGODB_DATABASE
const DB_COLLECTION = import.meta.env.VITE_MONGODB_COLLECTION

const useDB = () => {
    const [dbToken, setDbToken] = useState();

    const dbLogin = () => {
        const result = axios.post(LOGIN_URL,{
            username: DB_USERNAME,
            password: DB_PASSWORD
        }, {headers:{"Content-Type":"application/json"}})
        .then(res=>{
            setDbToken(res.data);
            return {
                status : 200,
                message : 'MongoDB에 성공적으로 로그인하였습니다.'
            }
        })
        .catch(err=>{
            return {
                status : 400,
                message : err.response.data
            }
        })
        return result;
    }

    const dbInsertOne = (dataObject) => {
        const result = axios.post(`${DB_API_URL}/action/insertOne`,{
            dataSource: DB_SOURCE,
            database: DB_NAME,
            collection: DB_COLLECTION,
            document: dataObject
        },{
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${dbToken?.access_token}`,
              }
        })
        .then(res=>{
            return {
                status : 200,
                message : '성공적으로 데이터를 삽입했습니다.',
                data: res.data
            }
        })
        .catch(err=>{
            return {
                status : 401,
                message : '데이터를 삽입하지 못했습니다.',
                data: err.response.data
            }
        })
        return result;
    }

    const dbFindAll = (filterObject={}, projectionObject={_id:1}, sortObject=undefined, limitNum=undefined, skipNum=undefined) => {
        const result = axios.post(`${DB_API_URL}/action/find`,{
            dataSource: DB_SOURCE,
            database: DB_NAME,
            collection: DB_COLLECTION,
            filter: filterObject,
            projection: projectionObject,
            sort: sortObject,
            limit: limitNum,
            skip: skipNum
        },{
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${dbToken?.access_token}`,
              }
        })
        .then(res=>{
            return {
                status : 200,
                message : '성공적으로 데이터를 가져왔습니다.',
                data: res.data.documents
            }
        })
        .catch(err=>{
            return {
                status : 401,
                message : '데이터를 가져오지 못했습니다.',
                data: err.response.data
            }
        })
        return result;
    }

    const dbFindOne = (filterObject={}, projectionObject={_id:1}) => {
        const result = axios.post(`${DB_API_URL}/action/findOne`,{
            dataSource: DB_SOURCE,
            database: DB_NAME,
            collection: DB_COLLECTION,
            filter: filterObject,
            projection: projectionObject
            /* select _id from PersonalProject where (filter); */
        },{
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${dbToken?.access_token}`,
              }
        })
        .then(res=>{
            return {
                status : 200,
                message : '성공적으로 데이터를 가져왔습니다.',
                data: res.data.document
            }
        })
        .catch(err=>{
            return {
                status : 401,
                message : '데이터를 가져오지 못했습니다.',
                data: err.response.data
            }
        })
        return result;
    }

    return {dbLogin, dbFindAll, dbFindOne, dbInsertOne}
}

export default useDB;