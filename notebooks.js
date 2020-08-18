function mudar() {
    var checkd = window.document.getElementsByName('checktheme')
    var list = window.document.getElementById('list')
if (checkd[0].checked) {
    document.body.style.backgroundColor = "rgb(0, 0, 0)"
    document.body.style.color = "rgb(255,255,255)"
    list.style.color = "rgb(255,255,255)"
    }
else{
    document.body.style.backgroundColor = "rgb(255, 255, 255)"
    document.body.style.color = "rgb(0, 0, 0)"
    list.style.color = "rgb(0, 0, 0)"
    }
}