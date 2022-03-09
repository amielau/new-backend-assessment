document.getElementById("complimentButton").onclick = function () {
    axios.get("http://localhost:4000/api/compliment")
    .then(function (response) {
      const data = response.data;
      alert(data)
      
    
    });
  };

  const fortuneBtn = document.getElementById('fortuneButton');

  const nameBtn = document.getElementById('nameButton');
  const nameInput = document.getElementById("nameInput");
  const indexBtn = document.getElementById("indexButton");
  const indexInput = document.getElementById("indexInput");
  const form = document.querySelector("form");
  const newNameInput = document.getElementById("newNameInput");
  const newNameIndex = document.getElementById("newNameIndex")
  const submitForm = document.getElementById('submitForm')

  function getFortune() {
      axios.get("http://localhost:4000/api/fortune")
        .then((res) => {
            console.log(res.data);
            alert(res.data)
      })
  };

  function createName() {
      const newName = nameInput.value;

      const nameBody = {
          newName // newName: newName

      };

      axios.post("http://localhost:4000/api/name", nameBody)
      .then((res) => {
          let name = res.data[res.data.length - 1];
          alert(`you just registered ${name}`)

          nameInput.value = ``;
          console.log(res.data)
      })
  }

  function deleteName() {
      const newIndex = indexInput.value;

      axios.delete(`http://localhost:4000/api/delete/${newIndex}`)
        .then((res) => {
            alert("you have deleted a user")
            console.log(res.data)
        })

        .catch((err) => {
            console.log(err.response.data);
        })
  }

  function editName() {
      const nameChange = newNameInput.value;
      const indexChange = newNameIndex.value;

      const body = {
          nameChange
        }
          
          axios.put(`http://localhost:4000/api/edit/${indexChange}`, body)
          .then((res)=> {
              alert(res.data);
        })
    };

  fortuneBtn.addEventListener('click', getFortune);
  nameBtn.addEventListener('click', createName);
  indexBtn.addEventListener('click', deleteName);
  submitForm.addEventListener('click', editName)




//   document.getElementById("fortuneButton").onclick = function () {
//     axios.get("http://localhost:4000/api/fortune/")
//     .then(function (response) {
//       const data = response.data;
//       alert(data)
    
//       console.log(fortuneButton)
//     });
//   }

//   // let the user add their own compliment
//   document.getElementById("createComplimentBtn").onclick = function () {
//     axios.post("http://localhost:4000/api/compliment/")
//     .then(function (response) {
//       const data = response.data;
//       alert(data)
    
//       console.log(createComplimentButton)
//     })
//     }

//     // let the user add their own fortune
//     document.getElementById("createFortuneBtn").onclick = function () {
//         axios.post("http://localhost:4000/api/fortune/")
//         .then(function (response) {
//           const data = response.data;
//           alert(data)
        
//           console.log(createFortuneButton)
//         })
//         }



// notes: figure out what .value does in simple terms
// why is there an 'indexInput' and an 'indexBtn'
// i understood everything, my issue is remembering what to put where