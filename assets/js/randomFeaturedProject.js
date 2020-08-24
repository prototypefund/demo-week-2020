function getRandomProject() {
  return projects[Math.floor(Math.random() * projects.length)];
}

function renderProject(project) {
  var featuredContainer = document.querySelector(".featured-projects");
  featuredContainer.querySelector(".project-title").innerText = project.title;
  featuredContainer.querySelector(".project-brief").innerText = project.brief;
  featuredContainer.querySelector(".project-description").innerText = project.summary || "";
  featuredContainer.querySelector(".project-btn").href = project.url;
  featuredContainer.querySelector(".project-image img").src = project.image || "/assets/images/project_img_placeholder.png";

  var authorHTML = "";
  project.authors.forEach((author, index) => {
    if (author.link) {
      authorHTML += '<a href="'+author.link+'">'+author.author;
    } else {
      authorHTML += '<a>'+author.author;
    }

    if (index < project.authors.length - 1) {
      authorHTML += ', </a>';
    } else {
      authorHTML += '</a>';
    }
  });
  featuredContainer.querySelector(".project-authors").innerHTML = authorHTML;
}