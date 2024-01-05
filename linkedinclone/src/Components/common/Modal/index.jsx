import React from 'react';
import { Button, Modal } from 'antd';
import "./index.scss";

 const ModalComponents = (
    { modalOpen,
      setModalOpen,
      status,setStatus,
        }) => {
  
  return (
    <>
      <Modal
        title="Create a post"
        centered
        open={modalOpen}
        onOk={() => setModalOpen(false)}
        onCancel={() => setModalOpen(false)}
        footer={[
          <Button key="submit" type="primary" 
            disabled={ 
              status.length > 0 ? false:true}  >
            Submit
          </Button>
        ]}
      >

      <input className="modal-input" 
        placeholder="What you want to talk about?"
        onChange={(event)=> 
          setStatus(event.target.value) }
        value={status}
        />
        
      </Modal> 
    </>
  );
};
export default ModalComponents;
