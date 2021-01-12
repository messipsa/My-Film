import React, { Component } from 'react';
import Card from '../Components/Card/Card';
import axios from 'axios';
import flm from '../films.json';



class List extends Component {

    constructor (){
      super();
      this.state = {
          data : [],
         loading : false,
      };
    }


   async componentDidMount()
    {
        try{
            //../assets/data.json
            //../../data.json
        const movies = await fetch('https://api.mocki.io/v1/ae79b624/jsk');
        const moviesJ = await movies.json();
       
        
        if(moviesJ)
        {
            this.setState({
                data : moviesJ,
                loading : false
            });
        }
    }
    catch(e)
    {
        console.log(e);
    }

      //console.log(this.state.data);
        
    }
    /*componentWillMount()
	{
		fetch('https://api.mocki.io/v1/ae79b624/jsk')
        .then(res=>res.text())
        .then(data=>console.log(data))
		
		
	}*/

    
   /* async componentDidMount()
    {
        axios.get('../assets/data.json')
        .then(res=>{
            const movies = res;
            this.setState({
                data : movies,
                loading : false
            });
        })
    }*/
    
    render() {
       const {data, loading} = this.state;
       console.log(data);
       console.log(loading);
       if(loading)
       {
           return <h1>Loading ...</h1>
       }
       else
       {
           return( data.map((movie)=>
           <Card key={movie.id} movie={movie} />));
       }
       
    }
}

export default List;