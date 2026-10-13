import {Form,FormGroup,Input,Label,Button,Container,Row,Col,} from "reactstrap";
import {userSchemaValidation} from "../Validations/UserValidations";
import {useForm} from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { addUser,deleteUser } from "../Features/UserSlice";
const Register = () => {
const [name,setname] = useState("");
const [email,setemail] = useState("");
const [password,setpassword] = useState("");
const [confirmPassword,setconfirmPassword] = useState("");
const dispatch = useDispatch();
const{register,
      handleSubmit,
      formState :{errors},
} = useForm({
  resolver:yupResolver(userSchemaValidation)
});
const onSubmit = (data)=>
{
  try
  {
    const userData= {
      name:data.name,
      email:data.email,
      password:data.password,
    }
    dispatch(addUser(userData));
    console.log("Form Data",data);
    alert("Validation All Good!")
  }
  catch(error)
  {
    console.log(error);
  }
  
}

const handleDelete =(email=>
{
  dispatch(deleteUser(email));
}
)


const userList = useSelector((state)=>state.users.value);
  return (
    <Container fluid>
      <Row className="formrow">
        <Col className="columndiv1" >
          <Form className="div-form" onSubmit={handleSubmit(onSubmit)}>
            <section className="form">
              <FormGroup className="form-group">
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Enter your name..."
                  {...register("name",
                  {onChange:(e)=>setname(e.target.value)})}
                />
                <p className="error">{errors.name?.message}</p>
              </FormGroup>
              <FormGroup className="form-group">
                <input
                  type="text"
                  className="form-control"
                  id="email"
                  placeholder="Enter your email..."
                  {...register("email",
                  {onChange:(e)=>setemail(e.target.value)})}
                />
                <p className="error">{errors.email?.message}</p>
              </FormGroup>
              <FormGroup className="form-group">
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Enter your password..."      
                  {...register("password",
                    {onChange:(e)=>setpassword(e.target.value)}
                  )}          
                />
                 <p className="error">{errors.password?.message}</p>
              </FormGroup>
              <FormGroup className="form-group">
                <input
                  type="password"
                  className="form-control"
                  id="confirmPassword"
                  placeholder="Confirm your password..."     
                  {...register("confirmPassword",
                    {onChange:(e)=>setconfirmPassword(e.target.value)}
                  )}           
                />    
                <p className="error">{errors.confirmPassword?.message}</p>             
              </FormGroup>
              <Button color="primary" className="button">
                Register
              </Button>
            </section>
          </Form>
        </Col>
      </Row>
      <Row>
        <Col md = {6}>
        <table border={1}>
          <tbody>
            {userList.map((user)=>
            <tr>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.password}</td>
              <td><Button className="button" 
              onClick={()=>handleDelete(user.email)}>
                Delete</Button></td>
            </tr>
            )}
          </tbody>
        </table>
        </Col>
      </Row>
    </Container>
  );
};

export default Register;
