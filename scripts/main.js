const myImage = document.querySelector("img");

myImage.onclick = () => {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "images/bicycle.jpg") {
        myImage.setAttribute("src", "images/view.jpg");
    } else {
        myImage.setAttribute("src", "images/bicycle.jpg");
    }
};

// 获取新按钮和标题的引用
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

// 个性化欢迎信息的函数
function setUserName() {
    const myName = prompt("请输入你的名字.");
    if (!myName) {
        setUserName();
    } else {
        localStorage.setItem("name", myName);
        myHeading.textContent = `Web 开发很有意思, ${myName}`;
    }
}

// 检测 name 数据是否存在
if (!localStorage.getItem("name")) {
    setUserName();
} else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Web 开发很有意思, ${storedName}`;
}

myButton.onclick = function () {
    setUserName();
};
