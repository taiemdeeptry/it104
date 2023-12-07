var productCount = 0;
function addProduct() {
    // Lấy giá trị từ các ô input
    var productName = document.getElementById('productName').value;
    var productPrice = document.getElementById('productPrice').value;
    var productQuantity = document.getElementById('productQuantity').value;
    var productType = document.getElementById('productType').value;

    productCount++;

    // Tạo một hàng mới trong bảng và thêm dữ liệu sản phẩm
    var table = document.querySelector('.product-box table tbody');
    var newRow = table.insertRow(table.rows.length);
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);
    var cell4 = newRow.insertCell(3);
    var cell5 = newRow.insertCell(4);

    cell1.innerHTML = table.rows.length;
    cell2.innerHTML = productName;
    cell3.innerHTML = productPrice;
    cell4.innerHTML = productQuantity;
    cell5.innerHTML = productType;

    // Xóa giá trị của các ô input
    document.querySelector('.t1 p').innerText = productCount + ' / 1000 Sản Phẩm';
    document.getElementById('productName').value = '';
    document.getElementById('productPrice').value = '';
    document.getElementById('productQuantity').value = '';
    document.getElementById('productType').value = '';
  }