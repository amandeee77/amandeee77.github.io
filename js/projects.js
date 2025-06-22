document.addEventListener("DOMContentLoaded", () => {
  const projectSection = document.querySelector("main");

  fetch("https://api.github.com/users/amandeee77/repos")
    .then(response => {
      if (!response.ok) {
        throw new Error(`GitHub API error: ${response.status}`);
      }
      return response.json();
    })
    .then(repos => {
      const filteredRepos = repos.filter(repo => !repo.fork && !repo.archived);

      const grid = document.createElement("div");
      grid.classList.add("projects-grid");

      filteredRepos.forEach(repo => {
        const article = document.createElement("article");
        article.classList.add("project");

        article.innerHTML = `
          <div class="project-content">
            <h2>${repo.name}</h2>
            <p>${repo.description || "No description provided."}</p>
            <a href="${repo.html_url}" target="_blank" aria-label="Visit ${repo.name} repository">View on GitHub</a>
          </div>
        `;

        grid.appendChild(article);
      });

      projectSection.appendChild(grid);
    })
    .catch(error => {
      console.error("Error fetching GitHub repos:", error);
      projectSection.innerHTML += `<p>Couldn't load project data.</p>`;
    });
});