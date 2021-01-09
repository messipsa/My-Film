import React, { Component } from 'react';
import Card from '../Components/Card/Card';
import axios from 'axios';


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
        const movies = await fetch('../dataa.json');
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
        
    }

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