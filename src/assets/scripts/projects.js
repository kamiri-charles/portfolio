const load_projects = (el, num) => {
    el.innerHTML = '';
    for (let i = 0; i < num; i++) {
        el.innerHTML += '<div></div>\n';
    }
};

export default load_projects;



