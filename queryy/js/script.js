// 1
const links = document.querySelectorAll('#link-list a');
links.forEach(link => {
    if (link.href.startsWith('http://')) {
        link.style.textDecoration = 'underline dashed';
    }
});

// 2
const treeItems = document.querySelectorAll('.tree li');
treeItems.forEach(item => {
    let childUL = item.querySelector('ul');
    if (childUL) {
        childUL.style.display = 'none';
        item.style.cursor = 'pointer';
        item.addEventListener('click', function (e) {
            if (e.target === item) {
                childUL.style.display = childUL.style.display === 'none' ? 'block' : 'none';
            }
        });
        item.addEventListener('mouseover', () => item.style.fontWeight = 'bold');
        item.addEventListener('mouseout', () => item.style.fontWeight = 'normal');
    }
});

// 3
let selectedBooks = new Set();
let lastSelectedIndex = null;
const bookItems = Array.from(document.querySelectorAll('#books li'));

bookItems.forEach((item, index) => {
    item.addEventListener('click', (e) => {
        if (!e.ctrlKey && !e.shiftKey) {
            selectedBooks.clear();
        }

        if (e.shiftKey && lastSelectedIndex !== null) {
            let [start, end] = [lastSelectedIndex, index].sort((a, b) => a - b);
            for (let i = start; i <= end; i++) {
                selectedBooks.add(i);
            }
        } else {
            if (selectedBooks.has(index)) {
                selectedBooks.delete(index);
            } else {
                selectedBooks.add(index);
            }
            lastSelectedIndex = index;
        }

        bookItems.forEach((book, i) => {
            book.style.backgroundColor = selectedBooks.has(i) ? 'orange' : '';
        });
    });
});

// 4
const table = document.getElementById('data-table');
const headers = table.querySelectorAll('th');
headers.forEach((header, colIndex) => {
    header.addEventListener('click', () => {
        let rows = Array.from(table.tBodies[0].rows);
        let isNumeric = !isNaN(rows[0].cells[colIndex].innerText);
        rows.sort((a, b) => {
            let valA = a.cells[colIndex].innerText;
            let valB = b.cells[colIndex].innerText;
            return isNumeric ? valA - valB : valA.localeCompare(valB);
        });
        rows.forEach(row => table.tBodies[0].appendChild(row));
    });
});

// 5
const resizable = document.getElementById('resizable');
const resizer = resizable.querySelector('.resizer');
resizer.addEventListener('mousedown', (e) => {
    e.preventDefault();
    window.addEventListener('mousemove', resize);
    window.addEventListener('mouseup', stopResize);

    function resize(e) {
        resizable.style.width = e.clientX - resizable.getBoundingClientRect().left + 'px';
        resizable.style.height = e.clientY - resizable.getBoundingClientRect().top + 'px';
    }

    function stopResize() {
        window.removeEventListener('mousemove', resize);
        window.removeEventListener('mouseup', stopResize);
    }
});
