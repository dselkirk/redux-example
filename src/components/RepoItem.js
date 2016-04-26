import React, {Component, PropTypes} from 'react';

import styles from '../styles/RepoItem.css';

export default class RepoItem extends Component {
    static propTypes = {
        actions: PropTypes.object,
        repo: PropTypes.object
    };

    render() {
        const repo = this.props.repo;
        return (
            <div className={styles.repoContainer} style={{display: repo && repo.size ? 'block' : 'none'}}>
                <div className={styles.repoKey}>Full Name:</div>
                <div className={styles.repoValue}>{repo.full_name}</div>
                <div className={styles.repoKey}>Description:</div>
                <div className={styles.repoValue}>{repo.description}</div>
                <div className={styles.repoKey}>Language:</div>
                <div className={styles.repoValue}>{repo.language}</div>
                <div className={styles.repoKey}>Link:</div>
                <div className={styles.repoValue}><a className={styles.repoLink} target="_blank"
                                                     href={repo.html_url}>{repo.html_url}</a></div>
            </div>
        );
    }
}