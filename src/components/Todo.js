import { useState, useEffect } from 'react';
import {
  Button,
  Form,
  Input,
  Header,
  Table,
  Loader,
  Dimmer,
  Segment,
  Divider,
  Item,
  Label,
} from 'semantic-ui-react';
import { PopoverPicker } from './PopoverPicker';


const makeid = (length) => {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * 
  charactersLength));
   }
   return result;
  }
  

// Todo is a simple form used for the Skynet Workshop
const Todo = (props) => {
  const [uploadPreview, setUploadPreview] = useState(props.fileSkylink);

  useEffect(() => {
    setUploadPreview(props.fileSkylink);
  }, [props.fileSkylink]);

  return (
    <>
      <Segment>
        

       
            {props.loggedIn === true && (
              <Button onClick={props.handleMySkyLogout}>
                Log Out of MySky
              </Button>
            )}
            {props.loggedIn === false && (
              <Button color="green" onClick={props.handleMySkyLogin}>
                Login with MySky
              </Button>
            )}
            {props.loggedIn === null && <Button>Loading MySky...</Button>}
            <Divider />
         
        {props.loggedIn === true && (
          <>
                <Header as="h4">Title</Header>
              
                      <Form >
                            <Form.Group >
                        
                             
                                    <Form.Input
                                            placeholder='Todo List'
                                            name='todo'
                                            value={props.todo}
                                            onChange={(e) => {
                                                props.setTodo(e.target.value);
                                              }}
                                        
                                        />
                                <Form.Button
                                    color='teal'
                                    content='Add Item'
                                    icon='add'
                                    disabled={props.loading}
                                    labelPosition='left'
                                    
                                    onClick={()=>{props.handleTodoSubmit('add',makeid(25))}}
                                    />
                                <Loader active={props.loading} inline />
                                
                            </Form.Group>
                </Form>
                <Label pointing basic color="green">
                      Please Add your Todo List here
                </Label>
                <Divider />
  
                <Header as="h4">List</Header>
                   
                <Table >
                 <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Title</Table.HeaderCell>
                        <Table.HeaderCell>Action</Table.HeaderCell>
                      
                    </Table.Row>
                    </Table.Header>

                    <Table.Body>
                        {props.todoList.map((item,i)=>(
                                 <Table.Row key={i}>
                                        <Table.Cell>
                                          {item.todo}
                                        </Table.Cell>
                                        <Table.Cell> 
                                            <Button
                                                negative
                                                content='Remove Item'
                                                icon='remove'
                                                labelPosition='left'
                                                disabled={props.loading}
                                                onClick={()=>{props.handleTodoSubmit('remove',item.id)}}
                                                />
                                        </Table.Cell>
                                 </Table.Row>
                        ))}
                   
                    </Table.Body>
                </Table>
          
    
              
             
          </>
        )}

        
      </Segment>
    </>
  );
};

export default Todo;
