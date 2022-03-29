import { Form, Input, Modal } from 'antd'
import React, { useContext } from 'react'
import { AppContext } from '../../Context/AppProvider'
import { AuthContext } from '../../Context/AuthProvider'
import { addDocument } from '../../firebase/Service'

function AddRoomModal() {
    const [form] = Form.useForm()
    const { isAddRoomVisible, setIsAddRoomVisible } = useContext(AppContext)
    const { user: { uid } } = useContext(AuthContext)
    const handleOk = () => {
        addDocument('rooms', { ...form.getFieldValue(), members: [uid] })
        form.resetFields();
        setIsAddRoomVisible(false)

    }
    const handleCancel = () => {
        form.resetFields();
        setIsAddRoomVisible(false)
    }

    return (
        <div>
            <Modal
                title='Create Room'
                visible={isAddRoomVisible}
                onOk={handleOk}
                onCancel={handleCancel}
                className='text-black'
            >
                <Form form={form} layout='vertical' >
                    <Form.Item label='Room name' name='name'>
                        <Input placeholder='Enter Room Name' />
                    </Form.Item>
                    <Form.Item label='Description' name='description'>
                        <Input.TextArea placeholder='Enter Description' />
                    </Form.Item>
                </Form>
            </Modal>
        </div>
    )
}

export default AddRoomModal