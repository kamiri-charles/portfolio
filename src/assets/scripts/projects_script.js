const load_projects = (el, num) => {
    setTimeout(() => {
        el.innerHTML = '';
        for (let i = 0; i < num; i++) {
            el.innerHTML += '<div></div>\n';
        };
    }, 5000);
    el.innerHTML = '<canvas id="load-canvas"></canvas>';
};
export default load_projects;