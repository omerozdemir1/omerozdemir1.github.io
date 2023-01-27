const getUserGitHubAPI  = async () => {
    const APIResponse = await fetch('https://api.github.com/users/juliolimacostavalladares');
    const gitHubUser = await APIResponse.json();
    document.getElementById("img").src= gitHubUser.avatar_url;
    console.log(gitHubUser.avatar_url);
}
getUserGitHubAPI()
