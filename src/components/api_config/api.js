import apiURL from'./ApiConfig';
import axios from 'axios';


//---------------All POST Request-------------------//
export const AddNewInstructor = (id,req) => {
    return axios({
      method: 'POST',
      url: apiURL + `/instructor/register`,
      data:{
        FullName:req.FullName,
        UserName:req.UserName,
        NationalId:req.NationalId,
        Email:req.Email,
        Phone:req.Phone,
        password:req.password,
        InstructorRole:req.InstructorRole,
        InstructorsType:req.InstructorsType
      }
    })
  }


//---------------All GET Request-------------------//
export const getAllNews = () =>{
    return axios.get(`${apiURL}api/get/All/News`);
  }  
export const getAllTeams = () =>{
    return axios.get(`${apiURL}api/get/allTeams`);
  }
  export const getTeamLeader = (id) =>{
    return axios.get(`${apiURL}api/get/all/user/${id}`);
  }  
  