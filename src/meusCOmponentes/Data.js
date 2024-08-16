import { Component } from "react";

export default class Data extends Component{

    constructor(props){
        super();
        this.props= props;
        this.dataAtual = new Date().toLocaleString();
    }

    //fase de montagem
    componentDidMount(){
        console.log("O componente foi montado.");
        this.dataAtual=  new Date().toLocaleString();
    }

    componentDidUpdate(){
        console.log("O compontente foi atualizado");
    }

    //Sobrescrita de método
    render(){
        return(
            <h1>{this.props.texto || ""}{this.dataAtual}</h1>
        )
    }
}