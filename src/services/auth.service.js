'use strict';
import axios from 'axios'
import qs from 'qs'

axios.defaults.baseURL = 'http://localhost/bacsi-api/';

//const API_URL = 'http://localhost/bacsi-api/';
//const API_URL = 'https://api.dev.at1ts.com/';
// config header
var config = {
    headers: {
        //'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8',
       //  'Authorization': ''
       //headers: { Accept: 'application/json', apikey: 'xxxx' },
       Accept: 'application/json'
    }
    };
  
    const Axio = axios.create({
        baseURL: 'http://localhost/bacsi-api/',
    });
class AuthService {
    loginService =(paras)=>{
       // console.log(qs.stringify(paras))
        return Axio.post('_login.php',  qs.stringify(paras), config).then(
            response => response.data
        )
    }
    /**************************** */
    getoptionService = () => {
        return Axio.post('_options.php',  '', config).then(
            respone => {
                var res = respone.data
                //general status
                var option=''
                var generalStatus={}
                for(let i=0;i<res.options.general_status.length;i++){
                    option +='<option value="'+res.options.general_status[i]['en_us']+'">'+res.options.general_status[i]['vi_vn']+'</option>';

                    let key =res.options.general_status[i]['en_us']
                    generalStatus[key] = res.options.general_status[i]['vi_vn'];

                }

                localStorage.setItem('generalStatusOption',JSON.stringify(option));
                localStorage.setItem('generalStatus',JSON.stringify(generalStatus));

                //chief complain
                var option=''
                var chieft_complain_arr={}
                for(let i=0;i<res.options.chiefComplaint.length;i++){
                    option +='<option value="'+res.options.chiefComplaint[i]['en_us']+'">'+res.options.chiefComplaint[i]['vi_vn']+'</option>';
                    let key =res.options.chiefComplaint[i]['en_us']
                    chieft_complain_arr[key] = res.options.chiefComplaint[i]['vi_vn'];
                }

                localStorage.setItem('chief_complain',JSON.stringify(option));
                localStorage.setItem('chieft_complain_arr',JSON.stringify(chieft_complain_arr));

               // let ops = localStorage.getItem('chief_complain')
                //console.log(JSON.parse(ops))
                return respone.data
            }
        )
    
    }
    /****************************** */
    updateProfile =(paras)=>{
         //console.log(qs.stringify(paras))
         return Axio.post('_dashboardUpdateProfile.php',  qs.stringify(paras), config).then(
             response => response.data
         )
     }
  }
  
  export default new AuthService(); 