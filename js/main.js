// const tabs = document.querySelector('.tabs');

// tabs.addEventListener('click', e => handleClick(e));

// function handleClick(e) {
//     const target = e.target;
//     const tabNum = target.dataset.tab;
//     const activeTab = document.querySelector('.tabs .active');
//     const activeContent = document.querySelector(
//         '.content .visible'
//     );
//     const currentContent = document.querySelector(
//         `.content__section[data-tab='${tabNum}']`
//     );

//     if (!tabNum) {
//         return;
//     }

//     activeTab.classList.remove('active');
//     target.classList.add('active');
//     activeContent.classList.remove('visible');
//     currentContent.classList.add('visible');
// }

// const projects = document.querySelectorAll('.project');

// for (let i = 0; i < projects.length; i++) {
//     projects[i].setAttribute("project-id", (i + 1));

//     const aux = document.querySelector(`[project-id*="${i}"]`);
//     console.log(aux);
// }

// document.addEventListener('DOMContentLoaded', function() {
//     //letiables
//     const loadMoreBtn = document.querySelector('#lmprojects');

//     //eventos
//     loadMoreBtn.addEventListener('click', loadMore);

//     //function
//     function loadMore(e) {

//         for (let i = 2; i < projects.length; i++) {
//             projects[i].style.display = "none";

//         }

//     }

// });

/*
var firstProject = document.querySelector('.project:first-of-type');
var projects = document.querySelectorAll('.project');




projects.forEach(function(project) {
    project.style.display = 'none';
});

var lmprojectsBtn = document.querySelector('#lmprojects');

lmprojectsBtn.addEventListener('click', function() {
    //firstProject.style.display = 'none';
    var secondProject = document.querySelectorAll('.project:nth-of-type(2)');
    secondProject.style.display = 'block';
    // button.style.display = 'none'; // oculta el botón después de cargar el segundo proyecto
});
*/
// -------------------------

document.addEventListener("DOMContentLoaded", () => {
    var projects = document.querySelectorAll(".project");
    var certifications = document.querySelectorAll(".certi");

    var lmprojectsBtn = document.querySelector("#lmprojects");
    var certificationsBtn = document.querySelector("#certificationsBtn");
    cargarCertis();
    cargarP();

    function cargarP() {
        for (let i = 0; i < projects.length; i++) {
            projects[i].setAttribute("project-id", i + 1);

            if (i >= 2) {
                projects[i].style.display = "none";
            }
        }
    }

    lmprojectsBtn.addEventListener("click", function() {
        for (let i = 1; i <= projects.length; i++) {
            let proyecto = document.querySelector("[project-id='" + i + "']");

            if (i > 3) {
                proyecto.style.display = "block";
            }

            if (i === projects.length) {
                lmprojectsBtn.value = "Load less";
                let llprojectsBtn = document.querySelector('input[value="Load less"]');

                llprojectsBtn.addEventListener("click", showLess);
            }
        }
    });

    function showLess(e) {
        e.preventDefault();

        for (let i = projects.length; i >= 3; i--) {
            let proyecto = document.querySelector("[project-id='" + i + "']");

            proyecto.style.display = "none";

            if (i === 2) {
                lmprojectsBtn.value = "Load More";
            }
        }
    }

    //cargar los meta id

    //true estan visibles
    //false estab coutlos
    //cargar mas
    // certificationsBtn.addEventListener("click", function() {
    //     for (let i = 0; i < certifications.length; i++) {
    //         let certis = document.querySelector("[certis-id='" + i + "']");

    //         if (i > 2) {
    //             certis.style.display = "block";
    //         }

    //         // console.log(i);
    //     }

    //     certificationsBtn.value = "Load less";
    //     //certificationsBtn.classList.add('loadlesscerti');
    //     certificationsBtn.id = "llcertisBtn";
    //     const llcertisBtn = document.querySelector("#llcertisBtn");

    //     llcertisBtn.addEventListener("click", showLessC);
    // });

    function cargarCertis() {
        for (let i = 0; i < certifications.length; i++) {
            certifications[i].setAttribute("certis-id", i);

            if (i >= 3) {
                certifications[i].style.display = "none";
            }
        }
        bandera = true;
    }

    certificationsBtn.addEventListener("click", () => {
        //si estan ocultos haras esto true osea debo mostrarlos
        if (bandera) {
            // alert("mostrando");
            for (let i = 0; i < certifications.length; i++) {
                let certis = document.querySelector("[certis-id='" + i + "']");

                if (i > 2) {
                    certis.style.display = "block";
                }

                // console.log(i);
            }
            certificationsBtn.value = "Load less";
            bandera = false;







            //si no estan ocultos haras esto
        } else

        if (!bandera) {
            // alert("ocultando");
            certificationsBtn.id = "llcertisBtn";
            const llcertisBtn = document.querySelector("#llcertisBtn");

            llcertisBtn.addEventListener("click", () => {
                for (let i = certifications.length - 1; i > 2; i--) {
                    let certis = document.querySelector("[certis-id='" + i + "']");

                    certis.style.display = "none";
                }




            });
            cargarCertis();
        }
    });
});