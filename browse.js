let uploadButton = document.getElementById("upload-button");
let chooseImage = document.getElementById("choosen-image");
let fileName = document.getElementById("file-Name");

uploadButton.onchange = () => {
    let reader = new FileReader();
    reader.readAsDataURL(uploadButton.files[0]);
    console.log(uploadButton.files[0]);
    reader.onload = () =>{
        chooseImage.setAttribute("src",reader.result);
    }
    fileName.textContent = uploadButton.files[0].name;
}