const button = document.getElementById('themeButton');

const backgrounds = [
  "url('https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=1600&auto=format&fit=crop')",
  "url('https://images.unsplash.com/photo-1501386761578-eac5c94b800a?q=80&w=1600&auto=format&fit=crop')",
  "url('https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=1600&auto=format&fit=crop')"
];

let current = 0;

button.addEventListener('click', () => {

  current++;

  if(current >= backgrounds.length){
    current = 0;
  }

  document.body.style.backgroundImage = backgrounds[current];

});
