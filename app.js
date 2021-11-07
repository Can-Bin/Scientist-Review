const scientists = [
    {
        id: 1,
        name: "Albert Einstein",
        job: "Physicist",
        img: "./img/Einstein.jpg",
        text: "Albert Einstein, (born March 14, 1879, Ulm, Württemberg, Germany—died April 18, 1955, Princeton, New Jersey, U.S.), German-born physicist who developed the special and general theories of relativity and won the Nobel Prize for Physics in 1921 for his explanation of the photoelectric effect.",
        // link: "https://en.wikipedia.org/wiki/Albert_Einstein",
    },

    {
        id: 2,
        name: "Ada Lovelace",
        job: "Computer Programmer",
        img: "./img/Ada Lovelace.jpeg",
        text: "Ada Lovelace, in full Ada King, countess of Lovelace, original name Augusta Ada Byron, Lady Byron, (born December 10, 1815, Piccadilly Terrace, Middlesex [now in London], England—died November 27, 1852, Marylebone, London), English mathematician, an associate of Charles Babbage, for whose prototype of a digital computer she created a program. She has been called the first computer programmer." , 
        // link: "https://en.wikipedia.org/wiki/Ada_Lovelace,      
    },

    {
        id: 3,
        name: "Charles Darwin",
        job: "Biologist",
        img: "./img/Darwin.jpg",
        text: "Charles Darwin, in full Charles Robert Darwin, (born February 12, 1809, Shrewsbury, Shropshire, England—died April 19, 1882, Downe, Kent), English naturalist whose scientific theory of evolution by natural selection became the foundation of modern evolutionary studies.",
        // link: "https://en.wikipedia.org/wiki/Charles_Darwin",        
    },

    {
        id: 4,
        name: "Galileo Galilei",
        job: "Astronomer",
        img: "./img/Galileo.jpg",
        text: "Galileo, in full Galileo Galilei, (born February 15, 1564, Pisa [Italy]—died January 8, 1642, Arcetri, near Florence), Italian natural philosopher, astronomer, and mathematician who made fundamental contributions to the sciences of motion, astronomy, and strength of materials and to the development of the scientific method.",
        // link: "https://en.wikipedia.org/wiki/Galileo_Galilei",        
    },

    {
        id: 5,
        name: "Marie Curie",
        job: "Physicist",
        img: "./img/Marie Curie.png",
        text: "Marie Curie, née Maria Salomea Skłodowska, (born November 7, 1867, Warsaw, Congress Kingdom of Poland, Russian Empire—died July 4, 1934, near Sallanches, France), Polish-born French physicist, famous for her work on radioactivity and twice a winner of the Nobel Prize. With Henri Becquerel and her husband, Pierre Curie, she was awarded the 1903 Nobel Prize for Physics. She was the sole winner of the 1911 Nobel Prize for Chemistry. She was the first woman to win a Nobel Prize, and she is the only woman to win the award in two different fields.",
        // link: "https://en.wikipedia.org/wiki/Marie_Curie",       
    },

    {
        id: 6,
        name: "Isaac Newton",
        job: "Physicist",
        img: "./img/Newton.jpg",
        text: "Isaac Newton, in full Sir Isaac Newton, (born December 25, 1642 [January 4, 1643, New Style], Woolsthorpe, Lincolnshire, England—died March 20 [March 31], 1727, London), English physicist and mathematician, who was the culminating figure of the Scientific Revolution of the 17th century. In optics, his discovery of the composition of white light integrated the phenomena of colours into the science of light and laid the foundation for modern physical optics.",
        // link: "https://en.wikipedia.org/wiki/Isaac_Newton",        
    },

    {
        id: 7,
        name: "Pythagoras",
        job: "Mathematician",
        img: "./img/Pythagoras.jpg",
        text: "Pythagoras, (born c. 570 BCE, Samos, Ionia [Greece]—died c. 500–490 BCE, Metapontum, Lucanium [Italy]), Greek philosopher, mathematician, and founder of the Pythagorean brotherhood that, although religious in nature, formulated principles that influenced the thought of Plato and Aristotle and contributed to the development of mathematics and Western rational philosophy. (For a fuller treatment of Pythagoras and Pythagorean thought, see Pythagoreanism).",
        // link: "https://en.wikipedia.org/wiki/Pythagoras",        
    },

    {
        id: 8,
        name: "Nicola Tesla",
        job: "Physicist",
        img: "./img/Tesla.jpeg",
        text: "Nikola Tesla, (born July 9/10, 1856, Smiljan, Austrian Empire [now in Croatia]—died January 7, 1943, New York, New York, U.S.), Serbian American inventor and engineer who discovered and patented the rotating magnetic field, the basis of most alternating-current machinery. He also developed the three-phase system of electric power transmission. He immigrated to the United States in 1884 and sold the patent rights to his system of alternating-current dynamos, transformers, and motors to George Westinghouse. In 1891 he invented the Tesla coil, an induction coil widely used in radio technology.",
        // link: "https://en.wikipedia.org/wiki/Nikola_Tesla"        
    },
    
];

const img = document.getElementById("person-img");
const author = document.getElementById("name");
const job = document.getElementById("job");
const info = document.getElementById("info");
// const link = document.getElementById("link");

const rightBtn = document.querySelector(".rightBtn");
const leftBtn = document.querySelector(".leftBtn");
const randomBtn = document.querySelector("#randombtn");


let currentItem = 0;
window.addEventListener("DOMContentLoaded", function(){
   showPerson(currentItem);
});

function showPerson() {
    const item = scientists[currentItem]
    img.src = item.img
    author.innerText = item.name
    job.innerText = item.job
    info.innerText = item.text
    // link.href = item.link;      
}

rightBtn.addEventListener("click", function(){
    currentItem ++;
    if(currentItem > scientists.length -1){
        currentItem = 0;
    }
    showPerson(currentItem);
    
});

leftBtn.addEventListener("click", function(){
    currentItem --;
    if(currentItem < 0){
        currentItem = scientists.length-1;
    }
    showPerson(currentItem);
});

randomBtn.addEventListener("click", function(){
    // let randomPerson = Math.floor(Math.random() * scientists.length);
    currentItem = Math.floor(Math.random() * scientists.length);
    showPerson();
});



