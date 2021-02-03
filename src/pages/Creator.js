import React from 'react'
import { v4 } from 'uuid';

class Creator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        shouldSave: false,
        deets: {
            title:'',
            subtitle:'',
            tage:'',
            grasp:'',
            body:[
                {type:'text', value:'This is a placeholder text object'},
                {type:'text', value:'This is another placeholder text object'},
                {type:'text', value:'End of deets...'}
            ]

        }
    };

    // This binding is necessary to make `this` work in the callback??
    // this.addItem = this.addItem.bind(this);
  }


/////////////////////////////////////////////////////////////////////////  block on refresh / reload
componentDidUpdate = () => {
    // console.log('component did update!')
}

///////////////////////////////////////////////////////////////////////// for each of the body elements -> return a premade component
createItem = item => {
    // let area = document.getElementById()
    switch(item.type || item){
        case 'text': return <p onClick={() => this.editItem(item.id)} key={v4()}>{item.value}</p>;
        case 'h2': return <h2  onClick={() => this.editItem(item.id)} key={v4()}>{item.value}</h2>;
        default: return <p key={v4()}>--- ERROR ---</p>;
    }
}

/////////////////////////////////////////////////////////////////////////  add a new item to the article
addItem = e => {
    let type = e.target.name
    // console.log('create item: '+type)
    this.state.deets.body.push({type:type, value:'NEW ITEM', id:v4()}) 
  this.forceUpdate()    
}

/////////////////////////////////////////////////////////////////////////  edit the new item and save
editItem = item => {
    console.log(item)
    this.state.deets.body.filter(el => {
        
    })
}

render() {
return (
<>  
    <h2>Creator</h2>
    <div id="preview">
        <button name="h2" onClick={this.addItem}>Heading</button>
        <button name="text" onClick={this.addItem}>Text</button>
        {this.state.deets.body.map(item => this.createItem(item))}
    </div>
</>
);
}
}

export default Creator