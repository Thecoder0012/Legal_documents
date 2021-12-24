    /* constant variables */
    const open = document.getElementById('open');
    const modal_container = document.getElementById('modal_container');
    const saveButton = document.getElementById('save');
    const addComments = document.getElementById('addComments');
    const textArea = document.getElementById('textarea');
    const deleteButton = document.getElementById('delete');

    /* delete button */
    deleteButton.addEventListener('click', deleteText);

    function deleteText() {
      textArea.value = "";
    }

    /* textArea's value to localStorage */
    saveButton.addEventListener('click', saveText);

    function saveText() {
      localStorage.setItem('textarea', textArea.value);
    }
    /* reloading the website/fetching */
    window.onload = function () {
      fetch('https://test-api.development.testaviva.dk/api/documents?page=1')
        .then(res => res.json())
        .then(data => console.log(data))
      textArea.value = localStorage.getItem('textarea');
    }

    /* addEventListeners, open/close */
    open.addEventListener('click', () => {
      open.parentNode.removeChild(open);
      modal_container.classList.add('show');
    });
    saveButton.addEventListener('click', () => {
      modal_container.classList.remove('show');
      document.body.appendChild(open);
    });

    // add botton for the modal's message icons
    var addButton = document.getElementById('add').addEventListener('click', clickAdd);
    let count = 40;
    function clickAdd() {
      if (count == 20) {
        document.getElementById("add").removeEventListener("click", clickAdd);
      }
      count -= 2;
      var newArray = [];
      newArray.push(1);
      newArray.map(item => {
        var a = document.createElement('img');
        a.setAttribute('src', 'icon-comment.png');
        a.style.width = "30px";
        a.style.marginLeft = "10px";
        addComments.appendChild(a);
      })
}