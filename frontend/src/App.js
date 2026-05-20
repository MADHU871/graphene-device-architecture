import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {

    const [devices, setDevices] = useState([]);

    useEffect(() => {

        axios.get("http://localhost:5001/api/devices")

        .then((response) => {

            setDevices(response.data);

        })

        .catch((error) => {

            console.log("API Error:", error);

        });

    }, []);

    return (

        <div style={{ padding: "20px" }}>

            <h1>Graphene Device Architecture</h1>

            {devices.map((device, index) => (

                <div key={index}>

                    <h3>{device.deviceName}</h3>

                    <p>{device.architecture}</p>

                    <p>{device.status}</p>

                </div>

            ))}

        </div>
    );
}

export default App;