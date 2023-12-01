import data from "/data/data.js";

const boxContainer = document.querySelector("#box-container");
const btnContainer = document.querySelector(".button-container");
const audio = new Audio("audio/copy.mp3");

//load the shadow box
const displayShadowBox = (boxItem) => {
  boxItem.map((item) => {
    const div = document.createElement("div");
    div.style.backgroundColor = "#fff";
    div.style.boxShadow = item.boxshadow;
    div.style.display = "flex";
    div.style.flexDirection = "column";
    div.style.justifyContent = "center";
    div.style.alignItems = "center";
    div.style.cursor = "pointer";
    div.innerHTML = `
            
            <small>${item.title}</small>
            <span>box-shadow:${item.boxshadow};</span>
            <h5>copied!</h5>
            `;
    boxContainer.appendChild(div);
  });
  const copyText = document.querySelectorAll("#box-container div");
  

  copyText.forEach((item) => {
    item.addEventListener("click", function (e) {
      navigator.clipboard.writeText(e.currentTarget.children[1].textContent);
      audio.play();
      let transition = e.currentTarget;
      transition.classList.add("transition");
      let show = e.currentTarget.children[2];
      show.classList.add("show");
      setTimeout((e) => {
        show.classList.remove("show");
        transition.classList.remove("transition");
      }, 700);
    });
  });
};

//load category button
const categoryButton = () => {
  //unique category
  const categories = data.reduce(
    (values, item) => {
      if (!values.includes(item.category)) {
        values.push(item.category);
      }
      return values;
    },
    ["all"]
  );

  //create category button
  const categoryBtns = categories
    .map((category) => {
      if (category === "all") {
        return `
            <button type="button" class="category-btn active" data-id=${category}>${category}</button>
            `;
      } else {
        return `
           <button type="button" class="category-btn" data-id=${category}>${category}</button>
        `;
      }
    })
    .join("");
  btnContainer.innerHTML = categoryBtns;

  //load filtered box
  const filterBtns = btnContainer.querySelectorAll(".category-btn");

  filterBtns.forEach((singleBtn) => {
    singleBtn.addEventListener("click", function (e) {
      const activeBtns = btnContainer.querySelectorAll(".active");
      let selectedCategory = e.currentTarget.dataset.id;

      //active button
      activeBtns.forEach((activeBtn) => activeBtn.classList.remove("active"));
      singleBtn.classList.add("active");

      //filter item
      const filterItem = data.filter((categoryItem) => {
        if (categoryItem.category === selectedCategory) {
          return categoryItem;
        }
      });
      boxContainer.innerHTML = "";
      if (selectedCategory === "all") {
        displayShadowBox(data);
      } else {
        displayShadowBox(filterItem);
      }
    });
  });
};


// create Rgba color for box shadow

const rgba = (color, opacityValue) => {
  const r = parseInt(color.substr(1, 2), 16);
  const g = parseInt(color.substr(3, 2), 16);
  const b = parseInt(color.substr(5, 2), 16);
  return `${r},${g}, ${b},${opacityValue}`;
};

//generate random hex color code
const randomHexColorCode = () => {
  let n = (Math.random() * 0xfffff * 1000000).toString(16);
  return '#' + n.slice(0, 6);
};

//create shadow box 
const createShadowBox = () => {
      
  const totalLayer = document.querySelectorAll('.single-layer');
  let shadowValue = ""
 
 totalLayer.forEach((singleLayer,index) =>{
    if(index>0){
        shadowValue +=","
    }
    let x = singleLayer.querySelector('#h-offset').innerText;
    let y = singleLayer.querySelector('#v-offset').innerText;
    let blur = singleLayer.querySelector("#blur-value").innerText;
    let spread = singleLayer.querySelector("#spread-value").innerText;
    let color = singleLayer.querySelector('[data-id="color"]').value;
    let opacity = singleLayer.querySelector('[data-id="opacity"]').value;
    let checkboxValue = singleLayer.querySelector('#checkbox').checked=== true ? "inset" : " ";
    const rgbaValue = `rgba(${rgba(color,opacity)})`;
    shadowValue += `${x}px ${y}px ${blur}px ${spread}px ${rgbaValue} ${checkboxValue}`
 })
 
 document.getElementById('output-section').style.boxShadow = shadowValue;

 
  return shadowValue;
};

//take input field value
const takeInputFieldValueFromUser = () =>{
  const allInputField = document.querySelectorAll(".input-field");
  allInputField.forEach((inputfield) => {
    inputfield.addEventListener("input", (e) => {
      e.target.nextElementSibling.firstChild.innerText = e.target.value;
      createShadowBox();
    });
  });
}

//take color value
const takeInputTypeColorValueFromUser = ()=>{
  const mainColor = document.querySelectorAll(".type-color");
  mainColor.forEach((singleColor) => {
    singleColor.addEventListener("input", (e) => {
      e.target.nextElementSibling.value = e.target.value;
      e.target.nextElementSibling.nextElementSibling.nextElementSibling.value = e.target.value;
      createShadowBox();
    });
  });
}

const takeColorFromColorBox = () =>{
  const colorInput = document.querySelectorAll(".color-input");
  colorInput.forEach((singleInput) => {
    singleInput.addEventListener("input", (e) => {
      e.target.previousElementSibling.value = e.target.value;
      e.target.nextElementSibling.nextElementSibling.value = e.target.value;
      createShadowBox();
    });
  });
}

//take opacity value
const takeOpacityValueFromUser =  () =>{
  const opacityValues = document.querySelectorAll(".alpha");
  opacityValues.forEach((opacityValue) => {
    opacityValue.addEventListener("input", (e) => {
      e.target.nextElementSibling.style.opacity = e.target.value;
      console.log(e.target.value)
      createShadowBox();
    });
  }); 
}

//take checkbox value
const checkBoxValueFromUser = () =>{
  const checkboxes = document.querySelectorAll(".checkbox");
  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener("input", (e) => {
      if (e.target.checked === true) {
        createShadowBox();
      } else {
        createShadowBox();
      }
    });
  });
}
// delete selected layer
const deleteLayer = (e) => {
  const selectedItem = e.currentTarget.parentElement;
  const layerContainer = document.getElementById("layer-container");
  layerContainer.removeChild(selectedItem);
  createShadowBox()
};



//add layer
document.getElementById("add-layer-btn").addEventListener("click", () => {
  const layerContainer = document.getElementById("layer-container");
  const singleLayer = document.createElement("div");
  singleLayer.classList.add("single-layer");

  singleLayer.innerHTML = `
    <button  id="delete-btn"><i class="fa-solid fa-delete-left"></i></button>
    <div>
                <small class="offset-indicate">H</small>
                <input type="number" value="0" class="input-field" />
                <span><span id="h-offset" data-id="h">0</span> px horizontal offset</span>
              </div>

              <div>
                <small class="offset-indicate">V</small>
                <input type="number" value="2" class="input-field" />
                <span><span id="v-offset" data-id="v">2</span> px vertical offset</span>
              </div>

              <div>
                <small class="offset-indicate">B</small>
                <input type="number" value="8" class="input-field" />
                <span><span id="blur-value" data-id="blur">8</span> px blur</span>
              </div>

              <div>
                <small class="offset-indicate">S</small>
                <input type="number" value="0" class="input-field" />
                <span><span id="spread-value" data-id="spread">0</span> px spread</span>
              </div>

              <div>
              <small class="offset-indicate">C</small>
              <input type="text" value="#636363" class="type-color" data-id="color"/>
              <input class="color-input color-style" value="#636363"  type="color" data-id="color1" />
              <input
                type="range"
                class="alpha"
                min="0"
                max="1"
                step="0.05"
                value="0.2"
                data-id="opacity"
              />
              <input type="color" class="opacity-color" class="color-style" value="#636363"
              data-id="opacity1"/>
            </div>

            <div>
              <input type="checkbox" class="checkbox" id="checkbox"/>
              <span>inset</span>
            </div>

    `;
  
  layerContainer.appendChild(singleLayer);
  const deletebtn = singleLayer.querySelector("#delete-btn");
  deletebtn.addEventListener("click", deleteLayer);

  
  takeInputFieldValueFromUser()
  takeInputTypeColorValueFromUser();
  takeColorFromColorBox();
  takeOpacityValueFromUser();
  checkBoxValueFromUser();
  createShadowBox();
});



//reset button
document.getElementById("reset-btn").addEventListener("click", () => {
  const layerContainer = document.querySelectorAll("#layer-container");
  const layerCollections = layerContainer[0].children;
  let endValue = layerContainer[0].children.length - 1;
  for (let i = endValue; i > 0; i--) {
    layerCollections[i].parentElement.removeChild(layerCollections[i]);
  }
  const values = [0,2,8,0]
  const allInputField = document.querySelectorAll(".input-field");
  allInputField.forEach((inputfield,index)=>{
    inputfield.value = values[index];
    inputfield.nextElementSibling.firstChild.innerText = values[index];
  })
  document.querySelector('[data-id="color"]').value = "#636363"
  document.querySelector('[data-id="color1"]').value = "#636363"
  document.querySelector('[data-id="opacity"]').value = "0.2"
  document.querySelector('[data-id="opacity1"]').value = "#636363"
  document.querySelector('[data-id="opacity1"]').style.opacity = "0.2"
  document.querySelector("#checkbox").checked = false;
  createShadowBox()
});

// copy button
document.getElementById('copy-btn').addEventListener("click",()=>{
  const value = createShadowBox() 
    navigator.clipboard.writeText(value);
    audio.play();

})

//random button
document.getElementById('random-btn').addEventListener('click',()=>{
     const totalLayer = document.querySelectorAll('.single-layer');

     totalLayer.forEach((singleLayer) =>{
 
     singleLayer.querySelector('#h-offset').innerText = Math.floor(Math.random()*15);
     singleLayer.querySelector('#h-offset').parentElement.previousElementSibling.value =  singleLayer.querySelector('#h-offset').innerText;

     singleLayer.querySelector('#v-offset').innerText = Math.floor(Math.random()*15);
     singleLayer.querySelector('#v-offset').parentElement.previousElementSibling.value =  singleLayer.querySelector('#v-offset').innerText

     singleLayer.querySelector('#blur-value').innerText = Math.floor(Math.random()*15);
     singleLayer.querySelector('#blur-value').parentElement.previousElementSibling.value =  singleLayer.querySelector('#blur-value').innerText

     singleLayer.querySelector('#spread-value').innerText = Math.floor(Math.random()*15);
     singleLayer.querySelector('#spread-value').parentElement.previousElementSibling.value =  singleLayer.querySelector('#spread-value').innerText
    
     singleLayer.querySelector('[data-id="color"]').value = randomHexColorCode() ;
     singleLayer.querySelector('[data-id="color1"]').value = singleLayer.querySelector('[data-id="color"]').value 
     singleLayer.querySelector('[data-id="opacity1"]').value = singleLayer.querySelector('[data-id="color1"]').value
    
     singleLayer.querySelector('[data-id="opacity"]').value = Math.random() * (0.5 - 0.010) + 0.010
     singleLayer.querySelector('[data-id="opacity1"]').style.opacity = singleLayer.querySelector('[data-id="opacity"]').value ;

     singleLayer.querySelector('#checkbox').checked =  Math.floor(Math.random() * 2 ) === 0 ? false : true;
     
     createShadowBox()
 })
})



//dom content loaded
window.addEventListener("DOMContentLoaded", displayShadowBox(data), categoryButton(),takeInputFieldValueFromUser(),takeInputTypeColorValueFromUser(),takeColorFromColorBox(),takeOpacityValueFromUser(),checkBoxValueFromUser());
