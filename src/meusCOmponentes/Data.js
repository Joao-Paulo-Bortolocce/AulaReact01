import { Component } from "react";

export default class Data extends Component{

    constructor(props){
        super();
        this.props= props;
        this.state = {
            dataAtual : new Date().toLocaleString()
        }
    }

    pegaDataDe(TimeZone){
        const dataAtual = new Date();
        let timeZoneFromDb = parseInt(TimeZone);
        let diferencaTempo= timeZoneFromDb *60 +dataAtual.getTimezoneOffset();
        let milisegundos =parseInt(dataAtual.getTime() + (diferencaTempo *60 *100));
        const data = new Date(milisegundos);
        return data;
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
                //dataAtual : new Date().toLocaleString()
                dataAtual: this.pegaDataDe(this.props.timeZone).toLocaleString()
            });
        },1000);
    }

    //Sobrescrita de método
    render(){
        return(
            <h1>{this.props.texto || ""}{this.state.dataAtual}</h1>
        )
    }
}