import React, { Component } from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Plan from './Plan';
class App extends Component {
  constructor(props){
    super(props);
}
  state = {
    items: [],
    text: ""
  }
  handleChange = e => {
    this.setState({
      text:e.target.value,
    })
  }
  handleAdd = e => {
    if(this.state.text !== "")
    {
      const items = [...this.state.items, this.state.text];
      this.setState({
        items: items,
        text: ""
      });
    }
  }
  handleDelete = id => {
    console.log("Deleted", id);
    const oldItems = [...this.state.items];
    console.log("Old Items", oldItems);
    const newItems = oldItems.filter((element, i)=>{
      return i!==id
    })
    console.log("New Items : ", newItems);
    this.setState({items: newItems});
  }
  render() {
    return (
      <div className="container-fluid my-5">
          <div className="row">
              <div className="col-sm-6 mx-auto text-white shadow-lg p-3">
                  <h1 className="text-center">Today's Plan</h1>
                  <div className="row">
                    <div className="col-9 p-2">
                      <input type="text" className="form-control" placeholder='Write plan here' 
                      value={this.state.text} onChange={this.handleChange}
                      />
                    </div>
                    <div className="col-2 p-2">
                      <button className='btn btn-warning font-weight-bold px-5' onClick={this.handleAdd}>Add</button>
                    </div>
                    <div className="container-fluid">
                      <ul className="list-unstyled m-5">
                        {/* <Plan />
                        {console.log(this.state.items)} */}
                        {
                          this.state.items.map((value, index) => {
                            return <Plan data={value} id={index} key={index} sendData={this.handleDelete}/>
                          })
                        }
                      </ul>
                    </div>
                  </div>
              </div>
          </div>
      </div>
    )
  }
}

export default App;
