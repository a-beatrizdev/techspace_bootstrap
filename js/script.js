/* =========================================
   TECHSPACE - JAVASCRIPT
========================================= */

// Aguarda o carregamento completo do HTML
document.addEventListener("DOMContentLoaded", function () {

    // MENU DE NAVEGAÇÃO

    const menu = document.querySelector("#menuPrincipal");

    const linksMenu = document.querySelectorAll(
        ".navbar-nav .nav-link"
    );

    // Fecha o menu depois de selecionar uma opção
    linksMenu.forEach(function (link) {

        link.addEventListener("click", function () {

            if (menu.classList.contains("show")) {

                const menuBootstrap =
                    bootstrap.Collapse.getOrCreateInstance(menu);

                menuBootstrap.hide();

            }

        });

    });


    // ANO AUTOMÁTICO NO RODAPÉ

    const ano = document.querySelector("#anoAtual");

    if (ano) {
        ano.textContent = new Date().getFullYear();
    }


    // MENSAGEM DE CONFIRMAÇÃO

    console.log("TechSpace carregado com sucesso!");

});
