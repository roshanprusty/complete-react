import { Component } from "react"
class ErrorBoundaries extends Component {
    constructor(props) {
        super(props)

        this.state = {
            hasError: false
        }
    }
    static getDerivedStateFromError(error) {
        return {
            hasError: true
        }
    }
    componentDidCatch(error, info){
        console.log(error);
    }
    render() {
        if(this.state.hasError) {
            return <h2>Something went wrong</h2>
        }
        return this.props.children
    }
}
export default ErrorBoundaries;