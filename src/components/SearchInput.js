import React, {Component, PropTypes} from 'react';
import ReactDom from 'react-dom';
import styles from '../styles/SearchInput.css';


export default class SearchInput extends Component {
    static propTypes = {
        actions: PropTypes.object,
        repos: PropTypes.array,
        visibleList: PropTypes.bool
    };

    constructor(props) {
        super(props)
        this.searchRepo = this.searchRepo.bind(this);
        this.showFirstResult = this.showFirstResult.bind(this);
    }

    showFirstResult(event) {
        if (event.which === 9 && this.props.repos && this.props.repos.length) {
            event.preventDefault();
            let firstResult = this.props.repos[0];
            this.props.actions.chooseRepoAction(firstResult.id, this.props.repos);
            this.props.actions.hideList();
            this.searchInput.value = firstResult.name;
        }
    }

    searchRepo() {
        this.props.actions.searchRepoAction(this.searchInput.value);
        this.props.actions.showList();
    }

    render() {
        return (
            <div className={styles.search}>
                <input placeholder="Search Repositories"
                       className={styles.searchInput} type="text"
                       ref={(c) => this.searchInput = c}
                       onKeyDown={this.showFirstResult}
                       onChange={this.searchRepo}/>
                <input className={styles.autocomplete} disabled="disabled"
                       value={this.props.repos && this.props.repos.length && this.props.visibleList ? this.props.repos[0].name: ''}/>
                <span className={styles.community}>AngularJS Community</span>
            </div>
        );
    }
}
