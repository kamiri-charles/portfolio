const load_projects = (el, projects) => {
    setTimeout(() => {
        el.innerHTML = '';
        for (let i = 0; i < projects.length; i++) {
            el.innerHTML += '<a href=' + projects[i].link + ' target="_blank" class="project"><span class="title">' + projects[i].title + '</span> <img src=' + require("../images/" + projects[i].image) + ' /> <div class=desc>' + projects[i].desc +'</div></a>';
        };
    }, 3000);
    el.innerHTML = '<canvas id="load-canvas"></canvas>';
};
export default load_projects;