import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import { Modal, Form } from 'react-bootstrap';
import * as Icon from 'bootstrap-icons-react';
import { useState } from 'react';
const Navbar = () => {
    
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
  //  function display(){
  //   var x = document.getElementById("upload");
  //   var y = document.getElementById("selectCat");
  //       if(x !== '' && y !== 'sa'){
  //           document.getElementById("btns").disabled= true;
  //       }else{
  //         document.getElementById("btns").disabled= false;
  //       };
  //  }
   
    return ( 
        <nav className="navbar">
            <h4>Image Album</h4>
            <div className="stuff">
                {/* Add Modal fro  Bootstrap */}
                <button style={{ border:"none", borderRadius:"5px"}} onClick={handleShow}><Icon.CloudArrowUp></Icon.CloudArrowUp> Upload </button> |
                <Modal show={show} onHide={handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title> Upload Photos</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <input id="upload" type="file" name="file" />
                  </Modal.Body>
                  <Modal.Footer>
                  {/* onChange={showButton()}  */}
                    <Form className="form-select" id="selectCat" style={{marginRight:"250px"}} as="select" size="sm" custom>
                        <option value="sa">Select Album</option>
                        <option value="Travel">Travel</option>
                        <option value="Personal">Personal</option>
                        <option value="Food">Food</option>
                        <option value="Nature">Nature</option>
                        <option value="others">Others</option>
                    </Form>
                                    {/* <select style={{marginRight:"220px"}}> Select Album
                        <option value="albums">Nature</option>
                        <option value="albums">Nature</option>
                        <option value="albums">Nature</option>
                        <option value="albums">Nature</option>
                        
                    </select> */}
                    <button id="btns" style={{ border:"none", borderRadius:"5px"}} onClick={handleClose} disabled> 
                    {/* disabled={handbtn} */}
                    <Icon.CloudArrowUp></Icon.CloudArrowUp> Upload
                    </button>
                  </Modal.Footer>
                </Modal>
                {/* End of Bootstrap Modal */}
                <select className="stuff">
                    <option value="25">25</option>
                </select>
               
            </div>
        </nav>
        
     );
     
}
 
export default Navbar;