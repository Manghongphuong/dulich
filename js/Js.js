
        $(function () {
            // 1.Lướt lên
            $('#scroll-Top').click(function() {
                $('html,body').animate({scrollTop:0},2000)
            })

            // 2.zoom ảnh và đổi màu chữ
            $('.filtr-item img').hover(function(){
                    $(this).toggleClass('zoom');
            });
            $('.item-title a').hover(function(){
                    $(this).css("color","#2cdbb5");
            },function(){
                    $(this).css('color','#fff');
                   
            });
            $('.item-title p').hover(function(){
                    $(this).css("color","#2cdbb5");
            },function(){
                    $(this).css('color','#fff');
                   
            });
            // 3.slide video
            var stt = 0;
            starVideo = $("video:first").attr('number');
            endVideo =  $("video:last").attr('number');
            $('video').each(function () {
                if($(this).is(':visible')){
                    stt = parseInt($(this).attr('number'));
                }    
            });
            $(".next").click(function(){
                next = ++stt;
                if( next == endVideo){
                    stt = starVideo;
                }
                // alert(next);
                $('video').hide();
                $('video').eq(next).show();
            });
            $(".prev").click(function(){
                prev = --stt;
                if( prev == starVideo){
                    stt = endVideo;
                }
                // alert(prev);
                $('video').hide();
                $('video').eq(prev).show();
            });

            // $(".about-us-content").animate({
            //     margin: '-500px 0 0 45px'
            // }) 
        })
        // 4.Đăng ký
        function validateform() {
            //ten
                var ten = document.getElementById("hoten").value;
                if(ten =="")
                    document.getElementById("errname").innerHTML ="Tên không được bỏ trống";
                else
                    document.getElementById("errname").innerHTML ="";
            //email
                var x = document.getElementById("email").value;
                var atposition = x.indexOf("@");
                var dotposition = x.lastIndexOf(".");
                if (atposition < 1 || dotposition < (atposition + 2)
                        || (dotposition + 2) >= x.length) {
                    document.getElementById("erremail").innerHTML = "Email chưa đúng";
                }  else {
                    document.getElementById("erremail").innerHTML = "";
                }  
            //sdt

                var sdt = document.getElementById("sdt").value;
                if(sdt.length !=10){
                    document.getElementById("errsdt").innerHTML = "Số điện thoại chưa đúng";
                }else{
                    document.getElementById("errsdt").innerHTML = "";
                }
                var flag = false;
                var sdt = $("#input").value().trim;
            //tours
                var tour = document.getElementById("tour").value;
                if(tour =="")
                    document.getElementById("errtour").innerHTML ="Nhập tour đăng ký vào";
                else
                    document.getElementById("errtour").innerHTML ="";
        }
        function checkthamso(x){
            if(x==1) {
                var ten = document.getElementById("hoten").value;
                if(ten =="")
                    document.getElementById("errname").innerHTML ="Tên không được bỏ trống";
                else
                    document.getElementById("errname").innerHTML ="";
                }else if (x==2) {
                var x = document.getElementById("email").value;
                var atposition = x.indexOf("@");
                var dotposition = x.lastIndexOf(".");
                if (atposition < 1 || dotposition < (atposition + 2)
                        || (dotposition + 2) >= x.length) {
                    document.getElementById("erremail").innerHTML = "Email chưa đúng";
                }  else {
                    document.getElementById("erremail").innerHTML = "";
                }  
                }else if (x==3){
                var sdt = document.getElementById("sdt").value;
                if(sdt.length !=10){
                    document.getElementById("errsdt").innerHTML = "Số điện thoại chưa đúng";
                }else{
                    document.getElementById("errsdt").innerHTML = "";
                }
                var flag = false;
                var sdt = $("#input").value().trim;

                }else if(x==4){
                var tour = document.getElementById("tour").value;
                if(tour =="")
                    document.getElementById("errtour").innerHTML ="Nhập tour đăng ký vào";
                else
                    document.getElementById("errtour").innerHTML ="";
            }
        }  