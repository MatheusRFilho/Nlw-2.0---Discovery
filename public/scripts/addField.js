//procurar o botão
document.querySelector("#add-time")
.addEventListener('click', cloneField);

function cloneField() {

    const newFieldsContainer = document.querySelector('.schedule-item').cloneNode(true);

    const fields = newFieldsContainer.querySelectorAll('input')

    fields[0].value = "";
    fields[1].value = "";

    fields.forEach(function(field) {
        field.value = "";
    })

    document.querySelector('#schedule-items').appendChild(newFieldsContainer);
}
