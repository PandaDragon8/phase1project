document.addEventListener('DOMContentLoaded', () => {

    const cat_btn = document.getElementById('cat_btn');
    const dog_btn = document.getElementById('dog_btn');
    const genJokeBtn = document.getElementById('gen-joke-btn');
    console.log(dog_btn)
    cat_btn.addEventListener('click', getRandomCat);
    dog_btn.addEventListener('click', getRandomDog);
    genJokeBtn.addEventListener('click', jokeGenHandler);
    })
    
    const catImg = "https://aws.random.cat/meow"
    
    function getRandomCat() { 
      console.log('click')
      fetch(catImg)
      .then(res => res.json())
      .then(json => {
        console.log(json.file)
        const parent = document.getElementById('cat_result')
        while (parent.firstChild){
          parent.removeChild(parent.lastChild)
        }
        const elem = document.createElement('img')
            elem.src = json.file
            parent.appendChild(elem)
    
      })
    };
    
    const dogImg = "https://random.dog/woof.json"
    
    function getRandomDog() {
      console.log('click')
      fetch(dogImg)
        .then(res => res.json())
        .then(data => {
          if(data.url.includes('.mp4')) {
            getRandomDog();
          }
          else {
            dog_result.innerHTML = `<img src=${data.url} alt="dog" />`;
          }
        });
    }
  
const jokeGen = "http://v2.jokeapi.dev/joke/Any"

  function jokeGenHandler(){
      fetch(jokeGen)
      .then(response => response.json())
      .then(data =>{
          console.log(data)
          let joke, jokeDelivery;
          if(data.joke){
              joke = data.joke;
              jokeDelivery = "";
          } else {
              joke = data.setup;
              jokeDelivery = data.delivery;
          }
          document.getElementById('category').innerHTML = data.category;
          document.getElementById('setup').innerHTML = joke;
          document.getElementById('delivery').innerHTML = jokeDelivery;
      });
  }
  
  jokeGenHandler();