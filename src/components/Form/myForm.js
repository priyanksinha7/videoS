import { Container,Row,Form,Button} from "react-bootstrap";
import dragdrop from "../../Photos/dragdrop.jpg";
import './myForm.css';
function Myform()
{
   return(
       <Container id="card">
       <form>
       <Row id="mirow">
        <img  src={dragdrop} alt="dragdrop"></img>
        </Row>
        <Row id="form">
  <Form.Group className="mb-3" id="dropdown">
    <Form.Label>SELECT THE QUALITY EVALUATION STANDARD</Form.Label>
    <Form.Select>
      <option>PSNR</option>
      <option>VMAF</option>
      <option>SSIM</option>
    </Form.Select>
  </Form.Group>
</Row>
<Button variant="secondary">Submit</Button>
</form>
       </Container>
   )
}
export default Myform;