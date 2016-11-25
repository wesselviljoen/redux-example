import React from 'react'
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

const style = {
margin: 12,
};

class Form extends React.Component {



render() {
  return(
    <div>
      <form>
        <TextField hintText="What is the first think that comes to mind?"/>
        <br />
        <RaisedButton label="Primary" primary={true} style={style} />
      </form>
    </div>
  )
}

}

export default Form
