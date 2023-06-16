document.addEventListener("click", (e) => {

    //Filter Movie Type
    if (e.target.matches('ul.filter-ul li')) {
        // console.log(e.target)
        let active_tab = e.target;
        const siblings = Array.from(active_tab.parentNode.children).filter(child => child !== active_tab);
        siblings.map(li => li.classList.remove('active'))
        active_tab.classList.add("active")
    }

    //Toggle Favorites SideBar 
    if (e.target.matches('.fav-toggle')) {
        // let fav_div = e.target;
        let sidebar = document.querySelector('aside');
        sidebar.classList.toggle("close");
    }

});