document.getElementById("nickname").innerHTML = "Josh";
document.getElementById("favorites").innerHTML = "Games";
document.getElementById("hometown").innerHTML = "Sydney";

const pageBody = document.body;
pageBody.style.fontFamily = "Arial", "sans-serif";

const pageList = document.getElementsByTagName('li');

console.log(pageList);

for (let i = 0; i < pageList.length; i++)
{
    let pageElement = pageList[i];

    pageElement.className = "listitem";
    pageElement.style.color = "red";
}

const newImage = document.createElement("img");
newImage.src = "https://static.wikia.nocookie.net/clashofclans/images/f/fa/Goblin_info.png/revision/latest/scale-to-width-down/500?cb=20170927232755";
pageBody.appendChild(newImage);