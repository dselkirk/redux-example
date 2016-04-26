import React, {Component, PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as action from '../actions/SearchActions';
import SearchInput from '../components/SearchInput';
import RepoList from '../components/RepoList';
import RepoItem from '../components/RepoItem';


// Styles
import styles from '../styles/SearchApp.css';


@connect(state => ({
    repos: state.ReposReducer.repos,
    repo: state.RepoReducer.repo,
    visibleList: state.ReposReducer.visibleList
}))

export default class SearchApp extends Component {

    static propTypes = {
        repos: PropTypes.array,
        repo: PropTypes.object,
        dispatch: PropTypes.func.isRequired,
        visibleList: PropTypes.bool
    }

    render() {
        const actions = bindActionCreators(action, this.props.dispatch);

        return (
            <div id="container">
                <div className={styles.content}>
                    <h1 className={styles.heading}>ReactJS Demo</h1>
                    <p className={styles.lead}>Search projects from GitHub Repository:</p>
                    <div>
                        <SearchInput actions={actions} visibleList={this.props.visibleList} repos={this.props.repos}/>
                        <RepoList actions={actions} visibleList={this.props.visibleList} repos={this.props.repos}/>
                    </div>
                    <RepoItem actions={actions} repo={this.props.repo}/>
                </div>
            </div>
        );
    }
}