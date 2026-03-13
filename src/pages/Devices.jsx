import React, { useState } from "react";

import styled from "styled-components";

import { Plus } from "lucide-react";



const devices = [

  {

    id: "MC-9921",

    location: "Main Branch · Counter 01",

    battery: 85,

    ping: "2 mins ago",

    type: "Static QR Pro",

    status: "online",

    image: "/device-1.png",

  },

  {

    id: "MC-8842",

    location: "Downtown Cafe · Entrance",

    battery: 62,

    ping: "5 mins ago",

    type: "Static QR Pro",

    status: "online",

    image: "/device-2.png",

  },

  {

    id: "MC-7715",

    location: "Westside Mall · Storage",

    battery: 12,

    ping: "1 hour ago",

    type: "Basic Display",

    status: "offline",

    image: "/device-4.png",

  },

  {

    id: "MC-6602",

    location: "Airport Kiosk · Main",

    battery: 95,

    ping: "10 mins ago",

    type: "Smart Voice Pro",

    status: "online",

    image: "/device-3.png",

  },

];



const RegisteredDevices = () => {

  const [deviceStatuses, setDeviceStatuses] = useState(

    devices.reduce((acc, device) => ({

      ...acc,

      [device.id]: device.status === 'online'

    }), {})

  );



  const handleToggle = (deviceId) => {

    setDeviceStatuses(prev => ({

      ...prev,

      [deviceId]: !prev[deviceId]

    }));

  };



  return (

    <Container>



      <Header>

        <TitleSection>

          <h2>Registered Devices</h2>

          <p>Manage and monitor your QR hardware infrastructure.</p>

        </TitleSection>



        <AddButton>

          <Plus size={16} /> Add New Device

        </AddButton>

      </Header>



      {/* Stats */}

      <StatsRow>

        <StatCard>

          <label>Total Devices</label>

          <h3>24</h3>

        </StatCard>



        <StatCard>

          <label>Online</label>

          <h3 className="green">21 •</h3>

        </StatCard>



        <StatCard>

          <label>Low Battery</label>

          <h3 className="orange">3</h3>

        </StatCard>



        <StatCard>

          <label>Offline</label>

          <h3>0</h3>

        </StatCard>

      </StatsRow>



      {/* Device Cards */}

      <CardGrid>

        {devices.map((device) => (

          <DeviceCard key={device.id} $isOnline={deviceStatuses[device.id] ? 'online' : 'offline'}>



            <StatusBadge status={deviceStatuses[device.id] ? 'online' : 'offline'}>

              {deviceStatuses[device.id] ? 'ONLINE' : 'OFFLINE'}

            </StatusBadge>



            <DeviceImage src={device.image} />



            <DeviceInfo>

              <DeviceHeader>

                <h4>{device.id}</h4>

                <Toggle>

                  <input 

                    type="checkbox" 

                    defaultChecked={deviceStatuses[device.id]} 

                    onChange={() => handleToggle(device.id)}

                  />

                  <span></span>

                </Toggle>

              </DeviceHeader>



              <p className="location">{device.location}</p>



              <Battery>

                <span>Battery Level</span>

                <BatteryBar>

                  <BatteryFill width={device.battery} />

                </BatteryBar>

                <small>{device.battery}%</small>

              </Battery>



              <Meta>

                <div>

                  <label>LAST PING</label>

                  <p>{device.ping}</p>

                </div>



                <div>

                  <label>TYPE</label>

                  <p>{device.type}</p>

                </div>

              </Meta>

            </DeviceInfo>



          </DeviceCard>

        ))}

      </CardGrid>



      {/* Health Table */}

      <TableSection>



        <h3>Health & Network Status</h3>



        <Table>

          <thead>

            <tr>

              <th>Device ID</th>

              <th>Location</th>

              <th>Connection</th>

              <th>Battery</th>

              <th>Actions</th>

            </tr>

          </thead>



          <tbody>

            <tr>

              <td>MC-9921</td>

              <td>Main Branch</td>

              <td><Stable>Stable</Stable></td>

              <td>85%</td>

              <td className="action">Manage</td>

            </tr>



            <tr>

              <td>MC-8842</td>

              <td>Downtown Cafe</td>

              <td><Stable>Stable</Stable></td>

              <td>62%</td>

              <td className="action">Manage</td>

            </tr>



            <tr>

              <td>MC-7715</td>

              <td>Westside Mall</td>

              <td><Timeout>Timed Out</Timeout></td>

              <td>12%</td>

              <td className="action red">Troubleshoot</td>

            </tr>



          </tbody>

        </Table>



      </TableSection>



    </Container>

  );

};



export default RegisteredDevices;







/* -------------------- STYLES -------------------- */



const Container = styled.div`

  padding:40px;

  background:#f6f6f6;

  font-family:Inter;

`;



const Header = styled.div`

display:flex;

justify-content:space-between;

align-items:center;

margin-bottom:30px;

`;



const TitleSection = styled.div`

h2{

font-size: 42px;

font-weight: 700;

margin:0;

}



p{

color:#777;

margin-top:5px;

font-size: 18px;

}

`;



const AddButton = styled.button`

display:flex;

align-items:center;

gap:8px;

background:#ff7a00;

border:none;

color:white;

padding:12px 20px;

border-radius:8px;

cursor:pointer;

font-size: 16px;

font-weight: 600;

`;



const StatsRow = styled.div`

display:grid;

grid-template-columns:repeat(4,1fr);

gap:20px;

margin-bottom:30px;

`;



const StatCard = styled.div`

background:white;

padding:24px;

border-radius:10px;



label{

font-size: 16px;

color:#777;

font-weight: 600;

}



h3{

margin-top:8px;

font-size: 32px;

font-weight: 700;

}



.green{

color:#16a34a;

}



.orange{

color:#f97316;

}

`;



const CardGrid = styled.div`

display:grid;

grid-template-columns:repeat(4,1fr);

gap:25px;

margin-bottom:40px;

`;



const DeviceCard = styled.div`

background:white;

padding:24px;

border-radius:14px;

position:relative;

filter: ${props => props.$isOnline === 'online' ? 'none' : 'grayscale(100%)'};

opacity: ${props => props.$isOnline === 'online' ? '1' : '0.7'};

transition: filter 0.3s ease, opacity 0.3s ease;

`;



const StatusBadge = styled.div`

position:absolute;

top:12px;

right:12px;

font-size:12px;

padding:6px 12px;

border-radius:20px;

background:${p=>p.status==="online"?"#d1fae5":"#eee"};

color:${p=>p.status==="online"?"#059669":"#777"};

font-weight: 600;

`;



const DeviceImage = styled.img`

width:100%;

border-radius:10px;

margin-bottom:15px;

`;



const DeviceInfo = styled.div`

h4 {

  font-size: 24px;

  font-weight: 700;

  margin: 0;

}



p.location {

  font-size: 18px;

  color: #666;

  margin: 8px 0;

}

`;



const DeviceHeader = styled.div`

display:flex;

justify-content:space-between;

align-items:center;

`;



const Toggle = styled.label`

  position: relative;

  display: inline-block;

  width: 50px;

  height: 24px;

  

  input {

    opacity: 0;

    width: 0;

    height: 0;

  }

  

  span {

    position: absolute;

    cursor: pointer;

    top: 0;

    left: 0;

    right: 0;

    bottom: 0;

    background-color: #ccc;

    transition: .4s;

    border-radius: 24px;

  }

  

  span:before {

    position: absolute;

    content: "";

    height: 18px;

    width: 18px;

    left: 3px;

    bottom: 3px;

    background-color: white;

    transition: .4s;

    border-radius: 50%;

  }

  

  input:checked + span {

    background-color: #ff7a00;

  }

  

  input:checked + span:before {

    transform: translateX(26px);

  }

`;



const Battery = styled.div`

margin-top:12px;



span{

font-size: 16px;

color:#777;

font-weight: 600;

}



small {

  font-size: 14px;

  font-weight: 600;

}

`;



const BatteryBar = styled.div`

height:8px;

background:#eee;

border-radius:8px;

margin:8px 0;

`;



const BatteryFill = styled.div`

height:100%;

background:#ff7a00;

border-radius:6px;

width:${p=>p.width}%;

`;



const Meta = styled.div`

display:flex;

justify-content:space-between;

margin-top:16px;



label{

font-size: 14px;

color:#888;

font-weight: 600;

}



p{

font-size: 16px;

margin-top:4px;

font-weight: 500;

}

`;



const TableSection = styled.div`

margin-top:40px;



h3 {

  font-size: 24px;

  font-weight: 700;

  margin-bottom: 20px;

}

`;



const Table = styled.table`

width:100%;

background:white;

border-radius:10px;

border-collapse:collapse;



th,td{

padding:18px;

text-align:left;

border-bottom:1px solid #eee;

font-size: 16px;

}



th {

  font-weight: 700;

  font-size: 18px;

  background: #f9fafb;

}



.action{

color:#ff7a00;

cursor:pointer;

font-weight: 600;

}



.red{

color:#ef4444;

font-weight: 600;

}

`;



const Stable = styled.span`

background:#dcfce7;

color:#15803d;

padding:6px 12px;

border-radius:8px;

font-size: 14px;

font-weight: 600;

`;



const Timeout = styled.span`

background:#fee2e2;

color:#b91c1c;

padding:6px 12px;

border-radius:8px;

font-size: 14px;

font-weight: 600;

`;