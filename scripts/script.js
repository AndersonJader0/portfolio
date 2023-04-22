var isOpen = false;

function toOpen(){
    const mobileAddress = document.querySelector(".mobile_address");
    const iconClose = document.querySelector("#iconClose");
    const iconOpen = document.querySelector("#iconOpen");

    if(isOpen == false){
        mobileAddress.style.height = "342.4px";
        iconClose.style.display = "block";
        iconOpen.style.display = "none";
        isOpen = true;
    }else{
        mobileAddress.style.height = "0";
        iconClose.style.display = "none";
        iconOpen.style.display = "block";
        isOpen = false;
    }
}