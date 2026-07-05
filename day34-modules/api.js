export async function getGitHubUser(username) {
  const response = await fetch(`https://api.github.com/users/${username}`);

  if (!response.ok) {
    throw new Error("找不到這個使用者");
  }

  const data = await response.json();
  return data;
}