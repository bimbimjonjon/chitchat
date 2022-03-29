import React, { useContext, useRef, useState, useEffect } from 'react'
import { Row, Col, Avatar, Tooltip, Button, Form, Input, Alert } from 'antd'
import styled from 'styled-components';
import Message from './Message'
import { AppContext } from '../../Context/AppProvider';
import { UserAddOutlined } from '@ant-design/icons';
import { addDocument } from '../../firebase/Service';
import { AuthContext } from '../../Context/AuthProvider';
import { useForm } from 'antd/lib/form/Form';
import useFirestore from '../../hooks/UseFireStore';

const MessageListStyled = styled.div`
  max-height: 100%;
  overflow-y: auto;
`;
function ChatWindow() {
    const { selectedRoom, members, setIsInviteMemberVisible } = React.useContext(AppContext);
    const inputRef = useRef(null);
    const { user: {
        uid, photoURL, displayName
    } } = useContext(AuthContext)
    const [form] = useForm();
    const [inputValue, setInputValue] = useState('');
    const messageListRef = useRef(null);

    const handleInputChange = (e) => {
        setInputValue(e.target.value)
    }

    const handleOnSubmit = () => {
        addDocument('messages', {
            text: inputValue,
            uid,
            photoURL,
            roomId: selectedRoom.id,
            displayName,
        });

        form.resetFields(['message']);

        // focus to input again after submit
        if (inputRef?.current) {
            setTimeout(() => {
                inputRef.current.focus();
            });
        }
    }


    const condition = React.useMemo(
        () => ({
            fieldName: 'roomId',
            operator: '==',
            compareValue: selectedRoom.id,
        }),
        [selectedRoom.id]
    );

    const messages = useFirestore('messages', condition);
    useEffect(() => {
        // scroll to bottom after message changed
        if (messageListRef?.current) {
            messageListRef.current.scrollTop =
                messageListRef.current.scrollHeight + 50;
        }
    }, [messages]);

    return (

        <div className='col-span-3 bg-gradient-to-r from-slate-600 to-cyan-900 '>
            {selectedRoom.id ? (

                <div >
                    <Row>
                        <Col span={24} >
                            <div className='h-[80px] flex items-center justify-between  bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 '>
                                <div className='ml-5 text-white'>
                                    <p className='text-lg'>{selectedRoom.name}</p>
                                    <span className='text-gray-200 truncate'>{selectedRoom.description}</span>
                                </div>
                                <div className='flex mr-5 items-center '>
                                    <Button

                                        className='flex px-4 py-2 text-base items-center'
                                        type='text'
                                        onClick={() => setIsInviteMemberVisible(true)}
                                    >
                                        <p className='text-white ml-2'> + Add ember</p>
                                    </Button>
                                    <Avatar.Group size='small' maxCount={2}>
                                        {members.map((member) => (
                                            <Tooltip title={member.displayName} key={member.id}>
                                                <Avatar src={member.photoURL}>
                                                    {member.photoURL
                                                        ? ''
                                                        : member.displayName?.charAt(0)?.toUpperCase()}
                                                </Avatar>
                                            </Tooltip>
                                        ))}

                                    </Avatar.Group>
                                </div>
                            </div>
                        </Col>
                        <div className='flex flex-col justify-end h-[calc(100vh-70px)] w-[100vw] '  >
                            <MessageListStyled ref={messageListRef}>
                                {messages.map((mes) => (
                                    <Message
                                        key={mes.id}
                                        text={mes.text}
                                        photoURL={mes.photoURL}
                                        displayName={mes.displayName}
                                        createdAt={mes.createdAt}
                                    />
                                ))}
                            </MessageListStyled>
                            <div className='ml-6 '>
                                <Form className='grid grid-cols-4  ' >
                                    <Form.Item className='col-span-3'>
                                        <Input className='py-1 rounded-sm '
                                            placeholder='Type message...'
                                            autoComplete='off'
                                            onChange={handleInputChange}
                                            onPressEnter={handleOnSubmit}
                                        />
                                    </Form.Item>
                                    <Button className='col-span-1 ml-4 w-16 bg-white'
                                        onClick={handleOnSubmit}
                                    >Send</Button>
                                </Form>
                            </div>
                        </div>

                    </Row>
                </div>
            ) : <Alert message='Choose a room :D' type='info' showIcon style={{ margin: 10 }} closable />}

        </div>

    )
}

export default ChatWindow