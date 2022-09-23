import React from 'react'
import Form from 'react-bootstrap/Form';

function CommonDropDown({save,changer}) {
  console.log(changer,'namemem')
  return (
    <div>
          <Form.Select value={changer} onChange={(e)=>save(e.target.value)}  aria-label="Default select example">
                <option>Status Changer</option>
                <option  value='15%' >15%</option>
                <option value="30%">30%</option>
                <option value="50%">50%</option>
                <option  value='70%'>70%</option>
                <option value="90%">90%</option>
                <option value="completed">Completed</option>
            </Form.Select>        
    </div>
  ) 
}
export default CommonDropDown 