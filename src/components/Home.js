import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
require('dotenv').config();
const axios = require('axios');

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      allData: []
    }
  }

  componentDidMount = async () => {
    console.log(process.env.REACT_APP_PORT);
    const allDataRes = await axios.get('https://fruit-api-301.herokuapp.com/getFruit')
    console.log(allDataRes.data.fruits);
    this.setState({
      allData: allDataRes.data.fruits
    })
  }
  handelAdd = async(fruit)=>{
    
    const reqBody = {
      name : fruit.name,
      image : fruit.image,
      price : fruit.price
    }

    const resAdd = await axios.post(`${process.env.REACT_APP_PORT}/favs`,reqBody)
    console.log(resAdd);
    
  }
  
  render() {
    return (
      <div>
        {
          this.state.allData.map(fruit => {
            return (

              <Card style={{ width: '18rem', display:'inline-block', margin:'20px' }}>
                <Card.Img variant="top" src={fruit.image} />
                <Card.Body>
                  <Card.Title>{fruit.name}</Card.Title>
                  <Card.Text>
                    price : {fruit.price}
                  </Card.Text>
                  <Button onClick={()=> this.handelAdd(fruit)} >Add fav</Button>
                </Card.Body>
              </Card>
            )
          })
        }
      </div>
    )
  }
}

export default Home;
