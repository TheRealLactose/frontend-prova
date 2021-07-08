import api from "../api";
function Pagina(){
class App extends Component {
    state = {
        produtos: [],
    }

    async componentDidMount() {

        const response = await api.get('/artists/125246')

        this.setState({produtos: response.data})
    }

    render() {
        const {produtos} = this.state

        return (
            <div>
                {console.log(produtos)}
                <h1>Tela</h1>
            </div>
        )
    }
}
}
export default Pagina