import { Component } from "react";
import { User } from "../models/User";

interface Users {
    popi: User[]
}

export class Login extends Component<Users> {
    render(){
       return (
           <div>Login compo {this.props.popi[0].name}</div>
       );
    }
}