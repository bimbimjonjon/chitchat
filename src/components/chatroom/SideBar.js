import React from 'react'
import { Row, Col } from 'antd'
import UserInfo from './UserInfo'
import RoomList from './RoomList'

function SideBar() {
    return (
        <div className='col-span-1 border-r  bg-gradient-to-r from-sky-500 to-indigo-500'>
            <Row>
                <Col span={24} ><UserInfo /></Col>
                <Col span={24} ><RoomList /></Col>

            </Row>
        </div>
    )
}

export default SideBar