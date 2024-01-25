const product = ['Iphone','Iphone 14 promax',
                'SamSung',
                'Macbook'];
const searchZoom = document.getElementById('search-zoom')
const resultKeyWord = document.getElementById('result-search');

let handleSearch = (e) => {
    let keyWord = product.filter((key) => {
        return key.toLowerCase().includes(searchZoom.value.toLowerCase())
    })
    // console.log(keyWord)
    if (searchZoom.value.length) {
        renderKeyWord(keyWord)
    }else {
        resultKeyWord.innerHTML = "";
    }
  
    e.preventDefault();
}

let renderKeyWord = (keyWord) => {
    const ulHTML = keyWord.map((element)=> {
        return `
        <ul>
            <li><a href="">${element}</a></li>
        </ul>
        `
    })
    resultKeyWord.innerHTML = ulHTML.join('');
}


searchZoom.addEventListener('input',handleSearch);
//  console.log(searchZoom)