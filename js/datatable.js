$(document).ready(function(){
    $('#example').DataTable({
        "dom": '<"top"i>rt<"bottom-page d-flex justify-content-center"p><"clear">',
        // "lengthMenu": [[10, 20, 30, -1], [10, 20, 30, "All"]],
        "pageLength": 5,
        "responsive": true,
        "bLengthChange" : false,
        "bFilter": false,
        "bInfo": false,
        "ajax": 'data.json',
        "columns": [
            { "data": function(source, type, val){
                var checkBox = `
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="checkbox" id="${source.id}" value="option1">
                </div>
                `
                return checkBox;
            }},
            { "data": "id" },
            { "data": "owner" },
            { "data": "insueredName" },
            { "data": "productType" },
            { "data": "currency" },
            { "data": "create" },
            { "data": "sign" },
            { "data": "status" },
            { "data":function(source, type, val){
                var options = `
                <a href="javascript:;" class="swal-active"><i class="material-icons options">visibility</i></a>
                <a href="javascript:;" class="swal-active"><i class="material-icons options">print</i></a>
                `
                return options;
            }}
        ],
        "columnDefs": [
            { "orderable": false, "targets": [0,1,2,3,4,5,9] }
        ],
        "order": [],
        // "pagingType": "simple_numbers",
        "language":{
            paginate:
                {
                    previous: "<",
                    next: ">",
                    first: "|<",
                    last: ">|"
                }
        },
        // 重新綁定
        "fnDrawCallback" : function(oSettings){
        	$(".swal-active").on('click',function(e){
                e.preventDefault();
                swalUse();
            })
        }
    });

    $('#example2').DataTable({
        "dom": '<"top"i>rt<"bottom-page d-flex justify-content-center"p><"clear">',
        // "lengthMenu": [[10, 20, 30, -1], [10, 20, 30, "All"]],
        "pageLength": 5,
        "responsive": true,
        "bLengthChange" : false,
        "bFilter": false,
        "bInfo": false,
        "ajax": 'data.json',
        "columns": [
            { "data": "id" },
            { "data": "owner" },
            { "data": "insueredName" },
            { "data": "productType" },
            { "data": "currency" },
            { "data": "create" },
            { "data": "sign" },
            { "data": "status" },
            { "data":function(source, type, val){
                var options = `
                <a href="javascript:;" class="swal-active"><i class="material-icons options">visibility</i></a>
                <a href="javascript:;" class="swal-active"><i class="material-icons options">print</i></a>
                <a href="javascript:;" class="swal-active"><i class="material-icons options">edit</i></a>
                <a href="javascript:;" class="swal-active"><i class="material-icons options">delete</i></a>
                `
                return options;
            }}
        ],
        "columnDefs": [
            { "orderable": false, "targets": [0,1,2,3,4,8] }
        ],
        "order": [],
        // "pagingType": "simple_numbers",
        "language":{
            paginate:
                {
                    previous: "<",
                    next: ">",
                    first: "|<",
                    last: ">|"
                }
        },
        // 重新綁定
        "fnDrawCallback" : function(oSettings){
        	$(".swal-active").on('click',function(e){
                e.preventDefault();
                swalUse();
            })
        }
    });
});
