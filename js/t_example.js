// 'items' array of item objects; ids hardcoded for these default items
let items = [
  { id: "01995", quantity: 1, price: 20, description: "Climbing Rope" },
  { id: "01949", quantity: 1, price: 750, description: "3D Printer" },
  { id: "01985", quantity: 1, price: 350, description: "Go Pro" },
];

// To help demonstrate Console
console.log("** Basic Checks **");
console.log("*index by description*");
//let indexByDescription = items.findIndex(item => item.description === 'Climbing Rope');
console.log("Should be index 0 for Climbing Rope (id: 01995):");
console.log(items.findIndex((item) => item.description === "Climbing Rope"));

console.log("*index by id*");
//let indexById = items.findIndex(item => item.id === '01949');
console.log("Should be index 1 for 3D Printer (id: 01949):");
console.log(items.findIndex((item) => item.id === "01949"));

console.log("*index by last item in array*");
console.log("Should be index 2 for Go Pro (id: 01985):");
console.log(items.length - 1);

// to add new item being entered
function addItem() {
  const quantity = document.getElementById("quantity");
  const price = document.getElementById("price");
  const description = document.getElementById("description");
  const validationMsg = document.getElementById("error");
  //const idGen = Math.random().toString().substr(2, 6);
  //const idGen = Math.floor(100000 + Math.random() * 900000).toString();
  const idGen = Math.floor(000200 + Math.random() * 00300)
    .toString()
    .padStart(5, "02");
  // const idGen = Math.floor(000200 + Math.random() * 2).Math.ceil((000300)).toString();

  // newItem object being created
  let newItem = {
    id: idGen,
    quantity: parseInt(quantity.value),
    price: parseInt(price.value),
    description: description.value,
  };

  // validate newItem being entered
  if (newItem.quantity == undefined || quantity.value == "") {
    validationMsg.innerHTML = "Please enter a valid quanity.";
    return;
  } else if (/^\d*$/.test(quantity)) {
    validationMsg.innerHTML =
      "The quantity must be a whole number greater than zero.";
    return;
  } else if (newItem.quantity < 1) {
    validationMsg.innerHTML = "The quantity must be greater than zero.";
    return;
  } else if (newItem.price == undefined || price.value == "") {
    validationMsg.innerHTML = "Please enter a price.";
    return;
  } else if (
    price.value >> 0 !== parseFloat(price.value) ||
    isNaN(newItem.price)
  ) {
    validationMsg.innerHTML = "The price must be a whole number.";
    return;
  } else if (newItem.description == undefined || newItem.description == "") {
    validationMsg.innerHTML = "It is necesssary to enter a description.";
    return;
  }

  // adds newItem as an object to the items array
  items.push(newItem);

  console.log("** new item index and id **");
  // index/id of new item:
  console.log("index: " + (items.length - 1) + ", id: " + idGen);

  // the object properties of last item in array:
  console.log("** new item object **");
  console.log(items[items.length - 1]);

  console.log("");
  // gets index of each item (forEach w/callback)
  console.log('"itemIndex" forEach item:');
  items.forEach(function (item, index) {
    const itemIndex = index;
    console.log(`Index: ${itemIndex} ${item.description}`);
  });

  // resets default values in the form
  // this next line creates the intentional bug of no default qty
  document.getElementById("quantity").value = "";
  document.getElementById("price").value = "";
  document.getElementById("description").value = "";

  loadTableData();

  console.log("");
  console.log("Updated Items array:");
  console.log([items]);
}

// ===================

// calls loadTableData on page load
window.onload = () => {
  let itemData = items;
  loadTableData(itemData);
};

function removeNote() {
  let note = document.getElementById("note_examples");
  if (note != null) {
    note.remove();
  }
}

// clears all items from the array
function clearList() {
  items.length = 0;
  loadTableData();
  // and remove note about sample items
  removeNote();
}

// removes items from the array
function deleteItem(index) {
  let removed = items.splice(index, 1);
  console.log("deleted item:");
  console.log(removed);
  loadTableData();
  // and remove note about sample items
  removeNote();
}

// creates the table data
function loadTableData(itemData) {
  const tableBody = document.getElementById("tableData");
  let tableDataHtml = "";

  for (let item of items) {
    tableDataHtml += `<tr style="border-right: 0px solid; border-top: 0px solid; border-bottom: 0px solid">
                <td:last-child>
                    
                    <td style="border-top: 0px solid; font-weight: 500">${item.quantity}</td>
                    <td style="border-top: 0px solid; font-weight: 500">${item.price}</td>
                    <td style="border-top: 0px solid; font-weight: 500">${item.description}</td>
                    <td style="border-right: 0px solid; border-top: 0px solid; border-bottom: 0px solid">
                      <img src="images/delete_red_x.png" width="20" height="20" onclick="deleteItem((items.findIndex(item => item.description == '${item.description}')))" />
                        </td>
                <td:last-child style="border-right: 0px solid; border-bottom: 0px solid">
                </tr>`;
  }

  tableBody.innerHTML = tableDataHtml;
}
