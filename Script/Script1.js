const main_principal = document.querySelector("#main");
window.onload = function(){
    let archivo = new XMLHttpRequest();
    archivo.open("GET","../Products/Products.json");
    archivo.onload = function (){
        if(archivo.status == 200){
            let datos = JSON.parse(archivo.responseText);
            for (let j = 0; j < datos.length; j++) {
                createSection(datos[j]);
            }
        }
    }   
    archivo.send();
}

function createSection(section_json){
    /* ATRIBUTOS DE LA SECCION */
    let title = section_json.curse;

    let section = document.createElement("SECTION");
    section.classList.add("container-section");
    /* agregamos el titulo y books */
    

    let title_section = document.createElement("DIV");
    title_section.classList.add("container-section-title");
    title_section.innerHTML = `<h3>${title}</h3>`;
    section.appendChild(title_section);

    let section_books = document.createElement("DIV");
    section_books.classList.add("container-section-books");
    
    /* falta optimizar */
    for (let i = 0; i < section_json.books.length; i++) {
        let book = section_json.books[i];
        console.log(book);
        section_books.appendChild(createBook(book.image,book.name,book.type,book.price,book.id));
    }
    section.appendChild(section_books);

    main_principal.appendChild(section);
}


function createBook(imagen,name,type,price,code){
    let book = document.createElement("DIV");
    book.classList.add("container-book");
    /* agregamos todos los atributos */
    
    
    
    let container_image = document.createElement("DIV");
    container_image.classList.add("container-book-image");
    
    let image = document.createElement("IMG");
    image.setAttribute("src",`Image/${imagen}`);
    image.setAttribute("loading","lazy");
    book.appendChild(container_image);
    container_image.appendChild(image);
    
    
    let container_information = document.createElement("DIV");
    container_information.classList.add("container-book-information");
    /* agregamos todos los atributos */
    
    
    let book_name = document.createElement("DIV");
    book_name.classList.add("book-information-name");
    book_name.innerHTML = `<h4>${name}</h4>`;
    container_information.appendChild(book_name);
    
    let book_type = document.createElement("DIV");
    book_type.classList.add("book-information-type");
    book_type.innerHTML = `<p>Tipo: <strong>${type}</strong></p>`;
    container_information.appendChild(book_type);
    
    let book_price = document.createElement("DIV");
    book_price.classList.add("book-information-price");
    book_price.innerHTML = `<p><strong>${price}</strong></p>`;
    container_information.appendChild(book_price);
    
    let book_code = document.createElement("DIV");
    book_code.classList.add("book-information-code");
    book_code.innerHTML = `<p>Código: <strong>${code}</strong></p>`;
    container_information.appendChild(book_code);
    
    book.appendChild(container_information);
    return book;
}