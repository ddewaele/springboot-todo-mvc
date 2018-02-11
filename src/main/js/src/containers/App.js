import React from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Header from '../components/Header'
import MainSection from '../components/MainSection'
import * as TodoActions from '../actions'

class App extends React.Component {

    componentDidMount() {
        this.props.dispatch(TodoActions.fetchTodos())
    }

    render() {

        const { todos,actions } = this.props

        return (<div>
            <Header addTodo={actions.addTodoAndFetchTodos} />
            <MainSection todos={todos} actions={actions} />
        </div>)
    }
}

App.propTypes = {
  todos: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  todos: state.todos
})

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(TodoActions, dispatch),
    dispatch: dispatch
})

export default connect(
  mapStateToProps,mapDispatchToProps
)(App)
