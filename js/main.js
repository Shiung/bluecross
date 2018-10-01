$(function(){
    $('[data-toggle="tooltip"]').tooltip();


    var age = $("#age-select");
    var option ; 
    for( var i=0; i<=70; i++ ){
        option = '<option value='+i+'>'+i+'</option>'
        age.append(option)
    }

    //select 2
    $('select').each(function () {
        $(this).select2({
            theme: 'bootstrap4',
            placeholder: $(this).attr('placeholder'),
            allowClear: Boolean($(this).data('allow_clear')),
            minimumResultsForSearch: -1
        });
    });


    // login
    $("button.login-confirm").on('click',function(){
        var id = $("#login-input").val().trim();
        switch (id) {
            case 'admin':
                location.href = "table.html";
                break;  
            case 'sales':
                location.href = "table2.html";
                break;

            default:
                var div = document.createElement("div");
                div.innerHTML = "<div>管理者: admin</div><div>業務: sales</div>";
                swal({
                    className: "customer-swal",
                    title: "CAUTION",
                    content: div ,
                });
                break;
        }
        // location.href = "index.html";
    })
    // logout
    $(".logout-confirm").on('click',function(){
        location.href = "index.html";
    })

    $(".formList").on('click',function(){
        location.href = "step.html";
    })

    $(".menuList").on('click',function(e){
        e.preventDefault();
        location.href = "table2.html";
    })


    collapse();
    stepCollapse();

    $(".dropdown-item").on('click',function(){
        var dropdownSelect = $(this).parents('.dropdown').find('button.dropdown-toggle');
        dropdownSelect.siblings('.dropdown-menu').find('.dropdown-item').removeClass('active');
        $(this).addClass('active');
    });


    $("#phone").on('input',function(){
        var result = universal['checkPhone']($(this).val());
        if(result){
            $(this).siblings("i.material-icons").text("check_circle");
            $(this).siblings("i.material-icons").removeClass('text-danger');
            $(this).siblings("i.material-icons").addClass('active text-success'); 
        }else{
            $(this).siblings("i.material-icons").text("error");
            $(this).siblings("i.material-icons").removeClass('text-success');
            $(this).siblings("i.material-icons").addClass('active text-danger');
        }
        errorInfo($(this),result);
    });

    $(".swal-active").on('click',function(e){
        e.preventDefault();
        swalUse();
    })

    

});

// collapse function
function collapse(){
    $('.collapse').on('show.bs.collapse',function(){   
        var collapseSelect = $(this).parents('.accordion');
        collapseSelect.find('button.btn-link').attr('data-toggle','collapse');
        $(this).parents('.card').find('button.btn-link').attr('data-toggle',null);
        stepProccess(collapseSelect,$(this));
    }) 
}
function stepCollapse(){
    $(".circle").on('click',function(){
        var currentID =  $(this).parent().attr('class');
        if(!currentID.match('active')){
            $("#"+currentID).collapse('show');
        }
    })
}



// step-proccess
function stepProccess(area,target){
    area.siblings('.step-process').find('[class^="step-process-"]').removeClass('active');
    var currentID = target.attr('id');
    $("."+currentID).addClass('active');
}

//驗證
(function(obj){
    typeof module === 'object' && module.exports ? module.exports = obj : this[obj.name] = obj
})({
    name: 'universal', // 前端 <script> 標籤的全域名稱
    // checkEmail: val => /.+@.+\..+/.test(val),
    checkPassword (val) {
        return /.{8,}/.test(this._password = val)
    },
    checkConfirmPassword (val) {
        return this._password === val
    },
    checkPhone (val) {
        return /^\d{5,}$/.test(val)
    },
    // checkAddress: val => /[\u4e00-\u9fa5]/.test(val),
    // checkImage: ary => ary.length <= 3 && ary.every(file => file.width <= 150 || file.height <= 150),
    // checkCardNumber (val) {
    //     val = val.replace(/\s/g, '')
    //     return (/^4[0-9]{12}(?:[0-9]{3})?$/.test(val) && 'visa') ||
    //     (/^5[1-5][0-9]{14}$/.test(val) && 'master') || ''
    // }
})

// 驗證 info
function errorInfo(val,status){
    if(status){
        val.siblings('.error-info').hide();
    }else{
        val.siblings('.error-info').show();
    }
    
}

// swal
function swalUse(){
    swal({
        className: "customer-swal",
        title: "CAUTION",
        text: "For required fields, please fill in the correct information" ,
    });
}