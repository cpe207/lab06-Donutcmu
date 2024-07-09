// const axios = require("axios");
import axios from "axios";

/* assign interface/type to the function definition properly */
const getTodo = async (todoId: number) => {
  /* Your code here */
  try{
    const user1 = await axios.get(`https://jsonplaceholder.typicode.com/todos/${todoId}`);
    const todo = user1.data.userId;
    const res = await axios.get(`https://jsonplaceholder.typicode.com/users/${todo}`);
    const users = res.data;
    return {
            owner:users.name,
            title:user1.data.title ,
            completed:user1.data.completed
        }
    
    }
 catch(err){
    return "INVALID TODO ID";
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
