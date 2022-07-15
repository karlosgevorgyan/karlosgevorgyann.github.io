function Header(){
    return (   
        <div className="header">
            <div className="column1">
                <div className="p1">facebook</div>
                <div className="p2">Facebook помогает вам всегда оставаться на связи
                и общаться со своими знакомыми.</div>
             </div>
             <div className="column2">
                <input className="inp1" placeholder="Злектронный адрес или номер телефона"></input>
                <input className="inp2" placeholder="Пароль"></input>
                <button className="btn1">Вход</button>
                <a className="a" href="">Забыли пароль?</a>
                <hr className="hr"></hr>      
                <button className="btn2">Создать новый аккаунт</button>
                <div className="footer"><a className="a1">Создать Страницу</a> знаменитости, музыкальной группы или компании.</div>
             </div>
      
        </div>
        
    )
}

export default Header;