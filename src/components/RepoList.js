import React, {Component, PropTypes} from 'react';

import styles from '../styles/RepoList.css';

export default class RepoList extends Component {
    static propTypes = {
        actions: PropTypes.object,
        repos: PropTypes.array,
        visibleList: PropTypes.bool
    };

    constructor(props) {
        super(props)
        this.chooseRepo = this.chooseRepo.bind(this);
    }

    chooseRepo(id) {
        this.props.actions.chooseRepoAction(id, this.props.repos);
        this.props.actions.hideList();
    }

    render() {
        const self = this

        return (
            <div className={styles.listContainer}
                 style={{display: this.props.repos && this.props.repos.length && this.props.visibleList ? 'block' : 'none'}}>
                <ul className={styles.list}>
                    {
                        this.props.repos.map((item, index) => {
                            return (
                                <li className={styles.repoItem} key={item.id} id={item.id}
                                    onClick={self.chooseRepo.bind(this, item.id)}>
                                    <div><span className={styles.repoName}>{item.name}</span>&bull;<span
                                        className={styles.repoLanguage}>{item.language}</span></div>
                                    <div className={styles.repoDescription}>{item.description}</div>
                                </li>
                            );
                        })
                    }
                </ul>
            </div>
        );
    }
}