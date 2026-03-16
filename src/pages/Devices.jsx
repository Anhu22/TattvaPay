import React, { useState } from "react";

import styled from "styled-components";

import { Plus, X, Wifi, WifiOff, Battery, MapPin } from "lucide-react";



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

  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const [devicesList, setDevicesList] = useState(devices);

  const [newDevice, setNewDevice] = useState({

    id: '',

    location: '',

    type: 'Static QR Pro',

    battery: 100,

    image: ''

  });



  const handleToggle = (deviceId) => {

    setDeviceStatuses(prev => ({

      ...prev,

      [deviceId]: !prev[deviceId]

    }));

  };



  // Calculate offline devices count dynamically
  const offlineDevicesCount = Object.values(deviceStatuses).filter(isOnline => !isOnline).length;



  const handleAddDevice = () => {

    if (newDevice.id && newDevice.location) {

      // Create new device object
      const deviceToAdd = {

        ...newDevice,

        status: 'online',

        ping: 'Just now'

      };



      // Add to devices list
      setDevicesList(prev => [...prev, deviceToAdd]);

      

      // Add to device statuses
      setDeviceStatuses(prev => ({

        ...prev,

        [newDevice.id]: true

      }));



      // Reset form and close dialog
      setIsDialogOpen(false);

      setNewDevice({

        id: '',

        location: '',

        type: 'Static QR Pro',

        battery: 100,

        image: ''

      });

    }

  };



  return (

    <Container>



      <Header>

        <TitleSection>

          <h2>Registered Devices</h2>

          <p>Manage and monitor your QR hardware infrastructure.</p>

        </TitleSection>



        <AddButton onClick={() => setIsDialogOpen(true)}>

          <Plus size={16} /> Add New Device

        </AddButton>

      </Header>



      {/* Stats */}

      <StatsRow>

        <StatCard>

          <label>Total Devices</label>

          <h3>{devicesList.length}</h3>

        </StatCard>



        <StatCard>

          <label>Online</label>

          <h3 className="green">{Object.values(deviceStatuses).filter(isOnline => isOnline).length} •</h3>

        </StatCard>



        <StatCard>

          <label>Low Battery</label>

          <h3 className="orange">{devicesList.filter(device => device.battery < 20).length}</h3>

        </StatCard>



        <StatCard>

          <label>Offline</label>

          <h3>{offlineDevicesCount}</h3>

        </StatCard>

      </StatsRow>



      {/* Device Cards */}

      <CardGrid>

        {devicesList.map((device) => (

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



              <BatterySection>

                <span>Battery Level</span>

                <BatteryBar>

                  <BatteryFill width={device.battery} />

                </BatteryBar>

                <small>{device.battery}%</small>

              </BatterySection>



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

      {isDialogOpen && (
        <DialogOverlay onClick={() => setIsDialogOpen(false)}>
          <DialogContent onClick={(e) => e.stopPropagation()}>
            <DialogHeader>
              <h3>Add New Device</h3>
              <CloseButton onClick={() => setIsDialogOpen(false)}>
                <X size={20} />
              </CloseButton>
            </DialogHeader>
            
            <Form>
              <FormGroup>
                <label>Device ID</label>
                <input
                  type="text"
                  placeholder="e.g., MC-1234"
                  value={newDevice.id}
                  onChange={(e) => setNewDevice({...newDevice, id: e.target.value})}
                />
              </FormGroup>
              
              <FormGroup>
                <label>Location</label>
                <input
                  type="text"
                  placeholder="e.g., Main Branch · Counter 01"
                  value={newDevice.location}
                  onChange={(e) => setNewDevice({...newDevice, location: e.target.value})}
                />
              </FormGroup>
              
              <FormGroup>
                <label>Device Type</label>
                <select
                  value={newDevice.type}
                  onChange={(e) => setNewDevice({...newDevice, type: e.target.value})}
                >
                  <option value="Static QR Pro">Static QR Pro</option>
                  <option value="Basic Display">Basic Display</option>
                  <option value="Smart Voice Pro">Smart Voice Pro</option>
                </select>
              </FormGroup>
              
              <FormGroup>
              <label>Device Image</label>
              <ImageUpload>
                <ImagePreview src={newDevice.image || '/device-placeholder.png'} alt="Device preview" />
                <ImageInput
                  id="device-image-input"
                  type="file"
                  accept="image/*"
                  onChange={(e) => {
                    const file = e.target.files[0];
                    if (file) {
                      const reader = new FileReader();
                      reader.onloadend = () => {
                        setNewDevice({...newDevice, image: reader.result});
                      };
                      reader.readAsDataURL(file);
                    }
                  }}
                />
                <UploadButton as="label" htmlFor="device-image-input">
                  Choose Image
                </UploadButton>
              </ImageUpload>
            </FormGroup>
            
            <FormGroup>
              <label>Battery Level (%)</label>
              <input
                type="number"
                min="0"
                max="100"
                value={newDevice.battery}
                onChange={(e) => setNewDevice({...newDevice, battery: parseInt(e.target.value) || 0})}
              />
            </FormGroup>
            </Form>
            
            <DialogActions>
              <CancelButton onClick={() => setIsDialogOpen(false)}>
                Cancel
              </CancelButton>
              <AddDeviceButton onClick={handleAddDevice}>
                Add Device
              </AddDeviceButton>
            </DialogActions>
          </DialogContent>
        </DialogOverlay>
      )}

    </Container>

  );

};



export default RegisteredDevices;







/* -------------------- STYLES -------------------- */



const Container = styled.div`

  padding:40px;

  background:#f6f6f6;

  font-family:Inter;
  
  @media (max-width: 768px) {
    padding: 20px;
  }
  
  @media (max-width: 480px) {
    padding: 15px;
  }
`;



const Header = styled.div`

display:flex;

justify-content:space-between;

align-items:center;

margin-bottom:30px;

@media (max-width: 768px) {
  flex-direction: column;
  gap: 20px;
  align-items: flex-start;
}

@media (max-width: 480px) {
  margin-bottom: 20px;
  gap: 15px;
}

@media (max-height: 600px) and (orientation: portrait) {
  flex-direction: column;
  gap: 15px;
  align-items: flex-start;
  margin-bottom: 20px;
}

@media (max-height: 500px) and (orientation: portrait) {
  flex-direction: column;
  gap: 10px;
  align-items: flex-start;
  margin-bottom: 15px;
}

`;



const TitleSection = styled.div`

h2{

font-size: 42px;

font-weight: 700;

margin:0;

@media (max-width: 768px) {
  font-size: 32px;
}

@media (max-width: 480px) {
  font-size: 28px;
}

@media (max-height: 600px) and (orientation: portrait) {
  font-size: 30px;
}

@media (max-height: 500px) and (orientation: portrait) {
  font-size: 26px;
}

}



p{

color:#777;

margin-top:5px;

font-size: 18px;

@media (max-width: 768px) {
  font-size: 16px;
}

@media (max-width: 480px) {
  font-size: 14px;
}

@media (max-height: 600px) and (orientation: portrait) {
  font-size: 15px;
}

@media (max-height: 500px) and (orientation: portrait) {
  font-size: 14px;
}

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

@media (max-width: 768px) {
  padding: 10px 16px;
  font-size: 14px;
}

@media (max-width: 480px) {
  padding: 8px 12px;
  font-size: 13px;
  gap: 6px;
}

`;



const StatsRow = styled.div`

display:grid;

grid-template-columns:repeat(4,1fr);

gap:20px;

margin-bottom:30px;

@media (max-width: 1200px) {
  grid-template-columns: repeat(2, 1fr);
}

@media (max-width: 768px) {
  grid-template-columns: 1fr;
  gap: 15px;
  margin-bottom: 20px;
}

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

@media (max-width: 1200px) {
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

@media (max-width: 768px) {
  grid-template-columns: repeat(2, 1fr);
  gap: 15px;
  margin-bottom: 30px;
}

@media (max-width: 480px) {
  grid-template-columns: 1fr;
  gap: 12px;
  margin-bottom: 20px;
}

@media (max-height: 600px) and (orientation: portrait) {
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
  margin-bottom: 20px;
}

@media (max-height: 500px) and (orientation: portrait) {
  grid-template-columns: 1fr;
  gap: 10px;
  margin-bottom: 15px;
}

`;



const DeviceCard = styled.div`

background:white;

padding:24px;

border-radius:14px;

position:relative;

filter: ${props => props.$isOnline === 'online' ? 'none' : 'grayscale(100%)'};

opacity: ${props => props.$isOnline === 'online' ? '1' : '0.7'};

transition: filter 0.3s ease, opacity 0.3s ease;

@media (max-width: 768px) {
  padding: 20px;
}

@media (max-width: 480px) {
  padding: 16px;
  border-radius: 12px;
}

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



const BatterySection = styled.div`

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



// Dialog Styles
const DialogOverlay = styled.div`

  position: fixed;

  top: 0;

  left: 0;

  right: 0;

  bottom: 0;

  background: rgba(0, 0, 0, 0.5);

  display: flex;

  align-items: center;

  justify-content: center;

  z-index: 1000;

`;



const DialogContent = styled.div`

  background: white;

  border-radius: 16px;

  width: 90%;

  max-width: 500px;

  max-height: 90vh;

  overflow-y: auto;

  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);

`;



const DialogHeader = styled.div`

  display: flex;

  justify-content: space-between;

  align-items: center;

  padding: 24px 24px 16px;

  border-bottom: 1px solid #e5e7eb;

  

  h3 {

    margin: 0;

    font-size: 20px;

    font-weight: 600;

    color: #1a1a1a;

  }

`;



const CloseButton = styled.button`

  background: none;

  border: none;

  cursor: pointer;

  padding: 4px;

  border-radius: 4px;

  display: flex;

  align-items: center;

  justify-content: center;

  color: #666;

  transition: background 0.2s;

  

  &:hover {

    background: #f3f4f6;

  }

`;



const Form = styled.form`

  padding: 24px;

`;



const FormGroup = styled.div`

  margin-bottom: 20px;

  

  label {

    display: block;

    margin-bottom: 8px;

    font-size: 14px;

    font-weight: 600;

    color: #374151;

  }

  

  input, select {

    width: 100%;

    padding: 10px 12px;

    border: 1px solid #d1d5db;

    border-radius: 8px;

    font-size: 14px;

    transition: border-color 0.2s;

    box-sizing: border-box;

    

    &:focus {

      outline: none;

      border-color: #ff7a00;

    }

  }

`;



const DialogActions = styled.div`

  display: flex;

  gap: 12px;

  justify-content: flex-end;

  padding: 16px 24px 24px;

  border-top: 1px solid #e5e7eb;

`;



const CancelButton = styled.button`

  padding: 10px 20px;

  border: 1px solid #d1d5db;

  background: white;

  color: #374151;

  border-radius: 8px;

  font-size: 14px;

  font-weight: 600;

  cursor: pointer;

  transition: all 0.2s;

  

  &:hover {

    background: #f9fafb;

  }

`;



const AddDeviceButton = styled.button`

  padding: 10px 20px;

  border: none;

  background: #ff7a00;

  color: white;

  border-radius: 8px;

  font-size: 14px;

  font-weight: 600;

  cursor: pointer;

  transition: all 0.2s;

  

  &:hover {

    background: #e66a00;

  }

`;



// Image Upload Styles
const ImageUpload = styled.div`

  display: flex;

  flex-direction: column;

  align-items: center;

  gap: 12px;

`;



const ImagePreview = styled.img`

  width: 120px;

  height: 120px;

  object-fit: cover;

  border-radius: 8px;

  border: 2px solid #e5e7eb;

  background: #f9fafb;

`;



const ImageInput = styled.input`

  display: none;

`;



const UploadButton = styled.button`

  padding: 8px 16px;

  border: 1px solid #d1d5db;

  background: white;

  color: #374151;

  border-radius: 6px;

  font-size: 14px;

  cursor: pointer;

  transition: all 0.2s;

  

  &:hover {

    background: #f9fafb;

    border-color: #ff7a00;

  }

`;