import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Updatemodel from './Updatemodel'
const axios = require('axios');


class FavFruit extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      favData: [],
      displayUpdateModel : false,
      selectedFruit : {}
    }
  }

  componentDidMount = async () => {
    const allFavRes = await axios.get(`${process.env.REACT_APP_PORT}/favs`)
    this.setState({
      favData: allFavRes.data
    })
  }
  
  handelDelete = async(id)=>{
    const deleteRes = await axios.delete(`${process.env.REACT_APP_PORT}/favs/${id}`)
    console.log(deleteRes.data);
    const newArr = this.state.favData.filter(fruit=> fruit._id !== id)
    this.setState({
      favData : newArr
    })
    
  }
  
  handelDisplayUpdat = async(fruit)=>{
   await this.setState({
      displayUpdateModel : !this.state.displayUpdateModel,
      selectedFruit : fruit
    })
    console.log(this.state.selectedFruit);
  }
  onHideModel = ()=>{
    this.setState({
      displayUpdateModel : !this.state.displayUpdateModel
    })
  }

  handelUpdate = async(e)=>{
    e.preventDefault()
    const uppDateObj = {
      name : e.target.name.value,
      image : e.target.image.value,
      price : e.target.price.value
    }
    console.log(this.state.selectedFruit);
    
    const updateRes = await axios.put(`${process.env.REACT_APP_PORT}/favs/${this.state.selectedFruit._id}`,uppDateObj)

    const newUpdateArr = this.state.favData.map(elem => {
      if (this.state.selectedFruit._id === updateRes.data._id) {

        elem = updateRes.data
        return elem
        
      }
      return elem
    })

    this.setState({
      favData: newUpdateArr,
      displayUpdateModel : !this.state.displayUpdateModel,
      selectedFruit : {}
    })

    console.log(updateRes.data);
  }

  render() {
    return (
      <div>
        {
          this.state.favData.map(fruit => {
            return (

              <Card style={{ width: '18rem', display: 'inline-block', margin: '20px' }}>
                <Card.Img variant="top" src={fruit.image} />
                <Card.Body>
                  <Card.Title>{fruit.name}</Card.Title>
                  <Card.Text>
                    price : {fruit.price}
                  </Card.Text>
                  <Button onClick={() => this.handelDelete(fruit._id)} >Delete</Button>
                  <Button onClick={() => this.handelDisplayUpdat(fruit)} >Update</Button>
                </Card.Body>
              </Card>
            )
          })
        }
        <Updatemodel
        displayUpdateModel = {this.state.displayUpdateModel}
        selectedFruit = {this.state.selectedFruit}
        onHideModel = {this.onHideModel}
        handelUpdate = {this.handelUpdate}
        />
      </div>
    )
  }
}

export default FavFruit;
