import Form from 'react-bootstrap/Form';
import Button from '@mui/material/Button';

function Checkboxes() {
  return (
    <div className='Checkboxes'>
      <Form>
        {['checkbox', 'radio'].map((type) => (
          
            <div key={type} className="mb-3">
            
            <Form.Check type={type} id={`check-api-${type}`}>
              <Form.Check.Input type={type} isValid />
              <Form.Check.Label>{`Custom api ${type}`}</Form.Check.Label>
              <Form.Control.Feedback type="valid">
                You did it!
              </Form.Control.Feedback>
            </Form.Check>
            </div>
            
          
          
        ))}
      <Button variant="outlined">Primary</Button> </Form>
      
      
      
    </div>
  );
}

export default Checkboxes;

