const refs = {
    btnFlex: document.querySelectorAll([type='button']),
    container: document.querySelector("#flex__container"),
    title: document.querySelector('#justify__content-title')
};

for (let i = 0; i < refs.btnFlex.length; i++) {
    refs.btnFlex[i].addEventListener('click', addClassName);
}

function addClassName(){
    console.log(this.value)
    switch (this.value){
        case "default":
            refs.container.classList='';
            refs.title.textContent = "По умолчанию";
            break;
        case "center":
            refs.container.classList='';
            refs.container.classList.add('flex__center');
            refs.title.textContent = "Элементы располагаются друг за другом в центре контейнера по главной оси."
            break;
        case "flex-start":
            refs.container.classList='';
            refs.container.classList.add('flex__start');
            refs.title.textContent = "Элементы располагаются друг за другом и прижимаются к началу контейнера по главной оси, в зависимости от её направления (flex-direction). Для элементов, которые не являются дочерними элементами flex контейнера, это значение обрабатывается как start."
            break;
        case "flex-end":
            refs.container.classList='';
            refs.container.classList.add('flex__end');
            refs.title.textContent = "Элементы располагаются друг за другом и прижимаются к концу контейнера по главной оси, в зависимости от её направления (flex-direction). Для элементов, которые не являются дочерними элементами flex контейнера, это значение обрабатывается как end."

            break;
        case "space-between":
            refs.container.classList='';
            refs.container.classList.add('flex__between');
            refs.title.textContent = "Элементы равномерно распределены вдоль главной оси контейнера. Расстояния между каждой парой соседних элементов равны. Первый элемент прижат к началу контейнера по главной оси, а последний - к концу."
            break;
        case "space-around":
            refs.container.classList='';
            refs.container.classList.add('flex__around');
            refs.title.textContent = "Элементы равномерно распределены вдоль главной оси контейнера. Расстояния между каждой парой соседних элементов равны. Пустые пространства перед первым элементом и после последнего элемента равны половине расстояния между парами соседних элементов."
            break;
        case "space-evenly":
            refs.container.classList='';
            refs.container.classList.add('flex__evenly');
            refs.title.textContent = "Расстояние между любыми двумя соседними элементами, а также перед первым и после последнего, было одинаковым."
            break;
    }
}

