// Trigger The Shuffler (Mixitup)
var mixer;

let containerEl = document.getElementById('shuffle')
setInterval(function () {
    mixer = mixitup(containerEl, {
    animation: {
      duration: 300
    }
  });
}, 1000);

// Get Data from the json file
async function projects () {

  let data = await fetch("../projects.json"),
    res = await data.json()

    // Attach the data into Html
    for (let i = 0; i < res.length; i++) {
      let createAnchor = document.createElement("a")
      createAnchor.classList.add("project-box", "col-lg-3", "mix", res[i].categories)
      createAnchor.setAttribute("href", res[i].link)
      createAnchor.setAttribute("target", "_blank")
      containerEl.appendChild(createAnchor)

      let createProjectImg = document.createElement("div"),
          createImg = document.createElement("img");
      createProjectImg.classList.add("project-img")
      createImg.setAttribute("src", res[i].imgSrc)
      createProjectImg.appendChild(createImg)

      let createProjectInfo = document.createElement("div"),
          createH5 = document.createElement("h5"),
          createP = document.createElement("p");
      createProjectInfo.classList.add("project-info")
      createH5.appendChild(document.createTextNode(res[i].name))
      createP.appendChild(document.createTextNode(res[i].used.join(" / ")))
      createProjectInfo.appendChild(createH5)
      createProjectInfo.appendChild(createP)

      let createHolder = document.createElement("div")
          createHolder.classList.add("holder")
          createHolder.appendChild(createProjectImg)
          createHolder.appendChild(createProjectInfo)
          createAnchor.appendChild(createHolder)
          console.log(createAnchor)
    }
}
projects()


