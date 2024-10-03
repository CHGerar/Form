const apiURL = 'https://sheet.best/api/sheets/b49040e2-472d-4117-b33c-cb98fbb8d6cb';

//Cap formulario
const form = document.getElementById('crudForm');
const dataTable = document.getElementById('dataTable');

// consumir API READ

const getData =async () => {
    try {
        const response = await axios.get(apiURL);
        renderTable(response.data);
    } catch (error) {
        console.error('Error al obtener los datos', error);
    }
}

const renderTable = (data) => {
    console.log(data);
    dataTable.innerHTML = '';
    data.forEach(item => {
        const row = `<tr class="border-b">
    <td class="py-2 px-4">${item.name}</td>
    <td class="py-2 px-4">${item.lastName}</td>
    <td class="py-2 px-4">${item.phone}</td>
    <td class="py-2 px-4"><img class= "w-16 h-16 object-cover rounded"src="${item.img}" alt=""></td>
    <td>
        <button class="text-white py-1 px-2 bg-green-500" onclick>editar</button>
        <button class="text-white py-1 px-2 bg-red-500" onclick>eliminar</button>
</td>
    </tr>`;
        dataTable.insertAdjacentHTML('beforeend', row)  
    });
}

getData()