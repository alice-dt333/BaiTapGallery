/*Name this external file gallery.js*/

function upDate(previewPic){
    /* In this function you should 
       1) change the url for the background image of the div with the id = "image" 
       to the source file of the preview image
       
       2) Change the text of the div with the id = "image" 
       to the alt text of the preview image 
    */
    
    // Bước 1: Dùng console.log để kiểm tra sự kiện và dữ liệu ảnh (theo yêu cầu đề bài)
    console.log("Sự kiện upDate đã kích hoạt!");
    console.log("Alt của ảnh: " + previewPic.alt);
    console.log("Src của ảnh: " + previewPic.src);
    
    // Bước 2: Lấy thẻ div có id = "image"
    let imageDiv = document.getElementById("image");
    
    // Bước 3: Đổi chữ bên trong thành alt của ảnh nhỏ
    imageDiv.innerHTML = previewPic.alt;
    
    // Bước 4: Đổi hình nền thành src của ảnh nhỏ
    imageDiv.style.backgroundImage = "url('" + previewPic.src + "')";
}

function unDo(){
    /* In this function you should 
       1) Update the url for the background image of the div with the id = "image" 
       back to the orginal-image. You can use the css code to see what that original URL was
       
       2) Change the text of the div with the id = "image" 
       back to the original text. You can use the html code to see what that original text was
    */
    
    // Bước 1: Dùng console.log để kiểm tra khi chuột rời đi
    console.log("Sự kiện unDo đã kích hoạt!");
    
    // Bước 2: Lấy thẻ div có id = "image"
    let imageDiv = document.getElementById("image");
    
    // Bước 3: Đổi hình nền về lại url('') ban đầu (như trong file CSS)
    imageDiv.style.backgroundImage = "url('')";
    
    // Bước 4: Đổi văn bản về lại câu gốc (như trong file HTML)
    imageDiv.innerHTML = "Hover over an image below to display here.";
}