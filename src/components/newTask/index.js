import React, { Component } from 'react';
import { connect } from 'react-redux';
import Paper from "material-ui/Paper";
import TextField from "material-ui/TextField";
import Typography from "material-ui/Typography";
import Button from 'material-ui/Button';
import Grid from "material-ui/Grid";
import IconButton from "material-ui/IconButton";
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';

import Divider from 'material-ui/Divider';
import Checkbox from 'material-ui/Checkbox';
import AddIcon from "material-ui-icons/Add";
import SearchIcon from "material-ui-icons/Search";
import Menu, { MenuItem } from 'material-ui/Menu';
import Select from 'material-ui/Select';
import Input, { InputLabel } from 'material-ui/Input';
import { FormControl, FormHelperText } from 'material-ui/Form';

import {} from './../../redux/actions';

const tags=[{title:'Free time',color:'#348194',id:1,key:1},{title:'Depricated',color:'#5fc628',id:2,key:2},{title:'Hell',color:'red',id:3,key:3},{title:'Bug',color:'#c48519',id:4,key:4},{title:'Work',color:'#efe771',id:5,key:5}];
const units=[{title:'kg',id:0},{title:'ks',id:1},{title:'cm',id:2},{title:'m',id:3}];

class NewTask extends Component {
  constructor(props){
    super(props);
    this.state={
      title:'',
      tagMenu:null,
      status:tags[3].id,
      tags:[],
      project:null,
      requester:null,
      company:null,
      assigned:null,
      items:[],
      itemName:'',
      itemUnit:0,
      itemQuantity:0,
      itemPrice:0,
    }
  }

  addItem(){
    this.setState({
      items:[...this.state.items,{
        id:this.state.items.length,
        title:this.state.itemName?this.state.itemName:"",
        unit:this.state.itemUnit?this.state.itemUnit:0,
        quantity:this.state.itemQuantity?parseInt(this.state.itemQuantity):0,
        price:this.state.itemPrice?parseInt(this.state.itemPrice):0
      }],
      itemName:'',
      itemUnit:0,
      itemQuantity:0,
      itemPrice:0,
    })
  }


  submit(){
  }

  handleInputChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  render() {
    return(
      <Paper style={{maxWidth:1300,padding:10,margin:'auto'}}>
        <Typography type="headline" align="left" gutterBottom>
          Add new task
        </Typography>
        <div>
          <Button raised color="primary" onClick={this.submit.bind(this)}>
            Save
          </Button>
          <Button raised color="primary" style={{backgroundColor:"orange",marginLeft:10}} onClick={this.submit.bind(this)}>
            Cancel
          </Button>
          <Button raised color="primary" style={{backgroundColor:"red",marginLeft:10}} onClick={this.submit.bind(this)}>
            Delete
          </Button>
          <Button raised color="primary" style={{backgroundColor:"blue",marginLeft:10}} onClick={this.submit.bind(this)}>
            Print
          </Button>
        </div>
        <div style={{marginTop:15}}>
          <Grid container>
            <Grid item xs={9}>
              <Paper style={{paddingLeft:10}}>
                <TextField
                  label="Task name"
                  fullWidth={true}
                  />
                <div style={{flexDirection:'row'}}>
                  <IconButton
                    onClick={(event)=>this.setState({tagMenu:event.currentTarget})}>
                    <AddIcon/>
                    <div style={{fontSize:16}}>Tags</div>
                  </IconButton>
                  <div style={{overflowX:'auto',display:'flex'}}>
                    {
                      this.state.tags.map((tag)=><Typography align="left" key={tag.key} gutterBottom style={{backgroundColor:tag.color,color:'white',marginLeft:10,padding:5}} >{tag.title}</Typography>)
                    }
                  </div>
                  <Menu
                    style={{marginTop:50,overflowY:'auto'}}
                    id="menu-appbar"
                    anchorEl={this.state.tagMenu}
                    anchorOrigin={{
                      vertical: 'bottom',
                      horizontal: 'left',
                    }}
                    transformOrigin={{
                      vertical: 'top',
                      horizontal: 'left',
                    }}
                    open={this.state.tagMenu}
                    onRequestClose={()=>this.setState({tagMenu:null})}
                    >
                    {
                      tags.map((tag)=>
                      <MenuItem style={{margin:5}}
                        key={tag.id}
                        onClick={()=>{
                          if(!this.state.tags.includes(tag)){
                            this.setState({tags:[tag,...this.state.tags]});
                          }
                          else{
                            let newTags = this.state.tags;
                            newTags.splice(
                              newTags.findIndex((item)=>item.id==tag.id),1);
                              this.setState({tags:newTags});
                            }
                          }}>
                          <Checkbox
                            style={{padding:0,margin:0}}
                            checked={this.state.tags.includes(tag)}
                            tabIndex={-1}
                            disableRipple
                            />

                          <Typography align="center" style={{backgroundColor:tag.color,margin:0,color:'white',padding:2,flex:1}} >{tag.title}</Typography>
                        </MenuItem>
                      )
                    }
                  </Menu>

                  <TextField
                    label="Description"
                    fullWidth={true}
                    />
                  <TextField
                    label="Work time"
                    type="number"
                    fullWidth={true}
                    />
                </div>
                <Paper style={{padding:10,margin:'auto'}}>
                  <Typography type="headline" align="left" gutterBottom>
                    Materials
                  </Typography>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell style={{textAlign:'center'}}>Name</TableCell>
                        <TableCell style={{textAlign:'center'}}>Quantity</TableCell>
                        <TableCell style={{textAlign:'center'}}>Unit</TableCell>
                        <TableCell style={{textAlign:'center'}}>Price</TableCell>
                        <TableCell style={{textAlign:'center'}}>Total Price</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {this.state.items.map(item => {
                        return (
                          <TableRow key={item.id}>
                            <TableCell style={{textAlign:'center'}}>{item.title}</TableCell>
                            <TableCell style={{textAlign:'center'}} numeric>{item.quantity}</TableCell>
                            <TableCell style={{textAlign:'center'}}>{units[item.unit].title}</TableCell>
                            <TableCell style={{textAlign:'center'}} numeric>{item.price}</TableCell>
                            <TableCell style={{textAlign:'center'}} numeric>{item.quantity*item.price}</TableCell>
                          </TableRow>
                        );
                      })}
                      <TableRow>
                        <TableCell>
                          <TextField
                            label="Item name"
                            fullWidth={true}
                            value={this.state.itemName}
                            onChange={(event)=>this.setState({itemName:event.target.value})}
                            />
                        </TableCell>
                        <TableCell>
                          <TextField
                            label="Quantity"
                            fullWidth={true}
                            value={this.state.itemQuantity}
                            type="number"
                            onChange={(event)=>this.setState({itemQuantity:event.target.value})}
                            />
                          </TableCell>
                        <TableCell>
                          <div style={{flex:1}}>
                            <FormHelperText>Requester</FormHelperText>
                            <Select
                              native
                              value={this.state.requester}
                              fullWidth={true}
                              onChange={(event)=>this.setState({itemUnit:event.target.value})}
                              input={<Input />}
                              >
                              {
                                units.map((unit=><option value={unit.id}>{unit.title}</option>))
                              }
                            </Select>
                          </div>

                        </TableCell>
                        <TableCell>
                          <TextField
                            label="Price"
                            fullWidth={true}
                            value={this.state.itemPrice}
                            type="number"
                            onChange={(event)=>this.setState({itemPrice:event.target.value})}
                            />
                        </TableCell>
                        <TableCell>
                          <Button raised color="primary" onClick={this.addItem.bind(this)}>
                            Add Item
                          </Button>
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>

                </Paper>
                <Divider/>
                <Paper style={{padding:10,marginTop:10}}>
                  <Typography type="headline" align="left" gutterBottom>
                    Comments
                  </Typography>
                </Paper>


              </Paper>
            </Grid>
            <Grid item xs={3}>
              <Paper>
                <div style={{display:'flex'}}>
                  <SearchIcon style={{marginTop:25}}/>
                  <div style={{flex:1}}>
                    <FormHelperText>Status</FormHelperText>
                    <Select
                      native
                      value={this.state.status}
                      label="Status"
                      fullWidth={true}
                      style={{color:'white', backgroundColor:tags[tags.findIndex((tag)=>tag.id==this.state.status)].color}}
                      onChange={(value)=>{this.setState({status:value.target.value});}}
                      input={<Input id="Status" />}
                      >
                      {
                        tags.map((tag)=><option style={{backgroundColor:tag.color,color:'white',margin:'auto'}} key={tag.id} value={tag.id}>{tag.title}</option>)

                      }
                    </Select>
                  </div>
                </div>

                <div style={{display:'flex'}}>
                  <SearchIcon style={{marginTop:25}}/>
                  <div style={{flex:1}}>
                    <FormHelperText>Project</FormHelperText>
                    <Select
                      native
                      value={this.state.project}
                      fullWidth={true}
                      onChange={(event)=>this.setState({project:event.target.value})}
                      input={<Input />}
                      >
                      <option value={0}>Proj 1</option>
                      <option value={1}>Proj 2</option>
                      <option value={1}>Proj 3</option>
                    </Select>
                  </div>
                </div>

                <div style={{display:'flex'}}>
                  <SearchIcon style={{marginTop:25}}/>
                  <div style={{flex:1}}>
                    <FormHelperText>Requester</FormHelperText>
                    <Select
                      native
                      value={this.state.requester}
                      fullWidth={true}
                      onChange={(event)=>this.setState({requester:event.target.value})}
                      input={<Input />}
                      >
                      <option value={0}>Jozef Markus</option>
                      <option value={1}>Matej Tynar</option>
                      <option value={2}>Šimon Kardanec</option>
                      <option value={3}>Patrik Potredný</option>
                      <option value={4}>Miloš Simkovič</option>

                    </Select>
                  </div>
                </div>
                <div style={{display:'flex'}}>
                  <SearchIcon style={{marginTop:25}}/>
                  <div style={{flex:1}}>
                    <FormHelperText>Company</FormHelperText>
                    <Select
                      native
                      fullWidth={true}
                      value={this.state.company}
                      onChange={(event)=>this.setState({company:event.target.value})}
                      input={<Input />}
                      >
                      <option value={0}>Lansystems</option>
                      <option value={1}>Martinus</option>
                      <option value={2}>Ministerstvo SR</option>
                    </Select>
                  </div>
                </div>
                <div style={{display:'flex'}}>
                  <SearchIcon style={{marginTop:25}}/>
                  <div style={{flex:1}}>
                    <FormHelperText>Asssigned</FormHelperText>
                    <Select
                      native
                      fullWidth={true}
                      value={this.state.assigned}
                      onChange={(event)=>this.setState({assigned:event.target.value})}
                      input={<Input />}
                      >
                      <option value={0}>Jozef Markus</option>
                      <option value={1}>Matej Tynar</option>
                      <option value={2}>Šimon Kardanec</option>
                      <option value={3}>Patrik Potredný</option>
                      <option value={4}>Miloš Simkovič</option>
                    </Select>
                  </div>
                </div>
                <div style={{display:'flex'}}>
                  <SearchIcon style={{marginTop:25}}/>
                  <TextField
                    label="Start at"
                    type="datetime-local"
                    fullWidth={true}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    />
                </div>
                <div style={{display:'flex'}}>
                  <SearchIcon style={{marginTop:25}}/>
                  <TextField
                    label="Deadline"
                    type="datetime-local"
                    fullWidth={true}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    />
                </div>
                <div style={{display:'flex'}}>
                  <SearchIcon style={{marginTop:25}}/>
                  <TextField
                    label="Closes at"
                    type="datetime-local"
                    fullWidth={true}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    />
                </div>
                <div style={{display:'flex'}}>
                  <SearchIcon style={{marginTop:25}}/>
                  <div style={{flex:1}}>
                    <FormHelperText>Typ prace</FormHelperText>
                    <Select
                      native
                      fullWidth={true}
                      value={this.state.workType}
                      onChange={(event)=>this.setState({workType:event.target.value})}
                      input={<Input />}
                      >
                      <option value={0}>Servis PC</option>
                      <option value={1}>Servis web</option>
                    </Select>
                  </div>
                </div>
                <div style={{display:'flex'}}>
                  <SearchIcon style={{marginTop:25}}/>
                  <div style={{flex:1}}>
                    <FormHelperText>Platba</FormHelperText>
                    <Select
                      native
                      fullWidth={true}
                      value={this.state.payment}
                      onChange={(event)=>this.setState({payment:event.target.value})}
                      input={<Input />}
                      >
                      <option value={0}>Pausal</option>
                      <option value={1}>Projekt</option>
                    </Select>
                  </div>
                </div>


              </Paper>
            </Grid>
          </Grid >
        </div>

      </Paper>
    )
  }
}

const mapStateToProps = ({company,login}) => {
  const {token} = login;
  return {company:company.company,token};
};


export default connect(mapStateToProps, {})(NewTask);
