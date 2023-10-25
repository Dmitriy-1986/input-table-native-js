function addTableRow() {
    const rowCount = 4;
    const cellCount = 4;
    const tbl = document.getElementById('myTable');

    for (let i = 0; i < rowCount; i++) {
        const row = tbl.insertRow(i + 1);
        const cell = row.insertCell();
        cell.innerHTML = i + 1;

        for (let j = 0; j < cellCount; j++) {
            const cell = row.insertCell(-1);
            const input = document.createElement('input');
            input.type = 'text';
            input.className = 'input_table';
            input.style.width = '90%';
            input.style.height = '100%';
            input.value = '';

            const name = `input_${i + 1}_${j + 1}`;
            const id = `input_${i + 1}_${j + 1}`;

            input.name = name;
            input.id = id;
            cell.appendChild(input);
        }
    }
}

addTableRow();