const main = document.querySelector(".main");
const boxList = document.querySelectorAll(".box");

boxList.forEach(b => {
    b.addEventListener("click", function() {
        let existingDiv = document.querySelector(".toggle-div");

        if (existingDiv) {
            existingDiv.remove();
        } else {
            b.style.color = "#144fc6";
            let div = document.createElement("div");
            div.classList.add("toggle-div");
            div.style.height = "12.5%";
            div.style.width = "100%";
            div.style.position = "absolute";
            div.style.bottom = "0";
            div.style.borderRadius = "1px 1px 20px 20px";
            div.style.backgroundColor = "#144fc6";
            main.append(div);
            
        }
    });
});