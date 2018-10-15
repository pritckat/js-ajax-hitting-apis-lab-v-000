// your code here
function displayCommits() {
  const commits = JSON.parse(this.responseText);
  const commitsList = `<ul>${commits.map(
    commit => '<li><h3>' + commit.commit.author.name + ' (' +
    commit.author.login + ')</h3>' + commit.commit.message + '</li>'
  ).join('')}</ul>`;
  document.getElementById('details').innerHTML = commitsList;
}
