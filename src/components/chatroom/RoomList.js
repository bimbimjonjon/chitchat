import React, { useState, useContext } from 'react';
import { Collapse, Typography, Button } from 'antd';
import { PlusSquareOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import useFirestore from '../../hooks/UseFireStore';
import { AppContext } from '../../Context/AppProvider'


const { Panel } = Collapse;

const PanelStyled = styled(Panel)`
  &&& {
    .ant-collapse-header,
    p {
      color: white;
    }
    .ant-collapse-content-box {
      padding: 0 40px;
    }
    .add-room {
      color: white;
      padding: 0;
    }
    .link-styled{
      color :white;
    }
    
  }
`;

const LinkStyled = styled(Typography.Link)`
  display: block;
  margin-bottom: 5px;
  
`;

export default function RoomList() {


  const { rooms, setIsAddRoomVisible, setSelectedRoomId } = React.useContext(AppContext)
  const handleAddRoom = () => {
    setIsAddRoomVisible(true)
  }


  return (
    <Collapse ghost defaultActiveKey={['1']}>
      <PanelStyled header='Room List' key='1' >
        {rooms.map((room) =>
          <LinkStyled key={room.id} className='link-styled' onClick={() => setSelectedRoomId(room.id)} >{room.name}</LinkStyled>
        )}
        <Button
          type='text'
          icon={<PlusSquareOutlined />}
          className='add-room'
          onClick={handleAddRoom}
        >
          Add more Room
        </Button>
      </PanelStyled>
    </Collapse>
  );
}