// const axios = require("axios");
import axios from "axios";

/* assign interface/type to the function definition properly */
const getTodo = async (todoId: number) => {
  /* Your code here */
  try{
    const userId = await axios.get(`https://jsonplaceholder.typicode.com/todos/${todoId}`);
    const todo = userId.data.results;
    const res = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`);
    const users = res.data.results;

    const output = users.map((user:any)=>{
        return {
            owner:user.name.first+user.name.last,
            title:todo.title ,
            completed:todo.completed

        }
    })
    //console.log(res.data); 
    console.log(output); 
    }
 catch(err){
    console.log("INVALID TODO ID");
}
};   


//test case
const input1 = 15;
const input2 = 60;
const input3 = 250;

//run
getTodo(input1).then((result) => console.log(result));
getTodo(input2).then((result) => console.log(result));
getTodo(input3).then((result) => console.log(result));

export default getTodo;
