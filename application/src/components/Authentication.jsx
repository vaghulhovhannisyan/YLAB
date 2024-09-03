import '../style/Authentication.css'
function Authentication () {

    const authentication=()=>{    /*
        let login = document.getElementById('login').value
        let password = document.getElementById('password').value
        let base64 = require('base-64');
        fetch("url", {
            headers: new Headers({
              "Authorization": `Basic ${base64.encode(`${login}:${password}`)}`
            }),
          }).then(response => {
            if (!response.ok) throw new Error(response.status);
            return response.json();
          })
        */
    }

    return (
        <div className='box'>
            <h1>Авторизация</h1>
            <input type='text' className='login' placeholder='Введите почту' id='login'></input>
            <input type='text' className='password' placeholder='Введите пароль' id='password'></input>
            <input type='button' className='button' value='Войти' onClick={authentication}></input>
        </div>
    );
}
    export default Authentication ;
  