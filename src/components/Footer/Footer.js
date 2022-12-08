import React from 'react';
import {
  MDBFooter
} from 'mdb-react-ui-kit';

function Footer() {
  return (
    <MDBFooter className='text-center mt-3' color='white' bgColor='dark'>
      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2022 Copyright:
        Developed By IT Department
      </div>
    </MDBFooter>
  );
}
  export default Footer;