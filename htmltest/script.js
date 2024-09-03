document.getElementById('submit-button').addEventListener('click', function() {
    //이름을 입력한 필드에 입력된 값을 가져오겠다.
    const name = document.getElementById('name').value;
    //이메일을 입력한 필드에 입력된 값을 가져오겠다.
    const email = document.getElementById('email').value;

    //console출력 
    console.log('이름:',name);
    console.log('이메일:',email);
    alert('제출 완료!');
});