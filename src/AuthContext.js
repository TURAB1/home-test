import React, { useState, createContext, useContext } from 'react'
import axios from 'axios'
export const AuthContext = createContext(null)

const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState()
    const [vehicleData, setVehicleData] = useState()
    const [vehicleKey, setVehicleKey] = useState('')
    const [dtcHstr_data, set_dtcHstr_data] = useState([])
    const [sensorFault,setSensorFault]=useState(false)
    let token


    //회원 토큰가져오기
    function login(email, password, expire = '86400') {

        let a_data = {
            id: email,
            pw: password,
            expire: expire,
            cleaner: false,
        }

        //loadingOn()
        const url = "http://localhost/api/1/token";
        // const url = 'https://web.viewcar.co.kr/api/1/token'
        console.log("posted data:" + JSON.stringify(a_data))
        axios.post(url, a_data, {
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json;charset=UTF-8",
            },
        })
            .then(function (response) {
                console.log("token=>" + JSON.stringify(response.data.result))
                if (response.data.result) {
                    token = response.data.result
                    localStorage.setItem('token', response.data.result)
                    axios.get('http://localhost/api/1/me',
                        {
                            headers: {
                                'key': token,
                                "Content-type": "application/json"
                            }
                        })
                        .then(response => {
                            console.log("user data=>" + JSON.stringify(response.data.result));
                            if (response.data.result) {
                                const get_vehicleKey = response.data.result.favoriteVehicle
                                if (get_vehicleKey) {
                                    axios.get('http://localhost/api/1/vehicle/' + get_vehicleKey + '/vehicleHealth',
                                        {
                                            headers: {
                                                'key': token,
                                                "Content-type": "application/json"
                                            }
                                        })
                                        .then(response => {
                                            console.log("vehicle data=>" + JSON.stringify(response));
                                            if (response.data.result) {
                                                setVehicleData(response.data.result)
                                                setVehicleKey(get_vehicleKey)

                                            }

                                        }, error => {
                                            console.log(error);
                                        });
                                } else {
                                    setVehicleKey("0")
                                }
                            }

                        }, error => {
                            console.log(error);
                        });
                }
            })
            .catch(function (error) {
                console.log(error);
            })
            .finally(function () {
                // always executed
            });

    }


    return (
        <AuthContext.Provider value={{ user, login, vehicleData, vehicleKey, dtcHstr_data, set_dtcHstr_data,sensorFault,setSensorFault }}>
            {
                children
            }
        </AuthContext.Provider>
    )
}

export default AuthContextProvider