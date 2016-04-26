const API_ROOT = 'https://api.github.com'


export default function repoSearch(keyword, callback) {
    fetch(`${API_ROOT}/search/repositories?q=${keyword}+user:angular&sort=stars&order=desc`)
        .then(function(response) {
            return response.json();
        }).then(function(data) {
        callback(data);
    }).catch(function(err) {
        console.log('Error ', err);
    });
}