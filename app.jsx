const App = () =>
    <div>
        <h1>App</h1>
        <ClassComponent/>
    </div>

class ClassComponent extends React.Component{
    render(){
        return (
            <h2>I'm a class component</h2>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
);