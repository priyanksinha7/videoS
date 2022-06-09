import { Container,Row,Form,Button} from "react-bootstrap";
import './myForm.css';
function Myform()
{
   return(
       <Container id="card">
       <h2 id="dropdown">
         Submit Your File here
       </h2>
       <Form>
       <div id="upload">
       <input id="file" type="file" accept=" video/*" />
        </div>
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
</Form>
       </Container>
   )
}
export default Myform;