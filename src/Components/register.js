import Inp from "./input";
function Register(){
    const arr = []
    for(let i = 1; i <= 31; i++){
        arr.push(i)
    }
    const arr1 = ['янв','фев','мар','апр','май','июн','июл','окт','сен','ноя','дек'];
 
    const arr2 = [];
    for(let i = 2022; i >= 1905; i--){
        arr2.push(i)
    }
    return(
        <div className="register">
            <div className="header">
                    <div className="name1">Регистрация</div>
                    <div className="name2">Быстро и легко.</div>
                    <img className="img1" src="https://static.xx.fbcdn.net/rsrc.php/v3/y2/r/__geKiQnSG-.png"></img>
            
            <div className="forms">
            <form> 
                        <Inp cl_name="inp_nm" name="Имя"/><Inp cl_name="inp_Snm" name="Фамилия"/>
                        <Inp cl_name='inp_email' name="Номер мобильного телефона или эл. адрес"/>
                        <Inp cl_name='inp_passw' name="Новый пароль"/>               
                    <label className="label">Дата рождения</label>
                    <div>
                        <select> {arr.map((arr,i) => (<option key={i}>{arr}</option>))}</select>
                        <select> {arr1.map((arr1,i) => (<option key={i}>{arr1}</option>))}</select>
                        <select> {arr2.map((arr2,i) => (<option key={i}>{arr2}</option>))}</select>
                    </div>
                    <label className="label">Пол</label>
                        <div>
                            <div className="date">
                                <label>Женщина</label>
                                <Inp type="radio" name="age" cl_name="radio_1"/>
                            </div>
                            <div className="date">
                                <label>Мужчина</label>
                                <Inp type="radio" name="age" cl_name="radio_2"/>    
                            </div>
                            <div className="date">
                                <label>Другое</label>
                                <Inp type="radio" name="age" cl_name="radio_3"/>
                            </div>
                        </div>

                        <p className="text1">
                            Люди,которые пользуются нашим сервисом,могли загрузить вашу контактную информацию на Facebook.<a href="#">Подробнее</a><br></br><br></br>
                            Нажимая кнопку Регистрация,вы принимаете <a href="#">Условия,Политику использования данных и Политику в отношении файлов cookie.</a> Вы можете получать от нас SMS-уведомления, отказаться от которых можно в любой момент.
                        </p>   

                    <button id="btn">Регистрация</button>
            </form>
                </div>
            </div>
        </div>    
    )}


export default Register