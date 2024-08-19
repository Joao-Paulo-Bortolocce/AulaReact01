import { Component } from "react";

export default class Data extends Component{

    constructor(props){
        super();
        this.props= props;
        this.state = {
            dataAtual : new Date().toLocaleString()
        }
    }
    
    //fase de montagem
    componentDidMount(){
        console.log("O componente foi montado.");
        //Não é permitido atualizar o estado componente de forma direta "this.state=.."
        this.setState({
            dataAtual: new Date().toLocaleString()
        })
    }
    
    componentDidUpdate(){
        console.log("O compontente foi atualizado.");
        setTimeout(()=>{
            this.setState ( {
                dataAtual : new Date().toLocaleString()
            })
        },1000);
    }

    //Sobrescrita de método
    render(){
        return(
            <h1>{this.props.texto || ""}{this.state.dataAtual}</h1>
        )
    }
}