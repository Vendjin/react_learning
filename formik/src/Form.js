export default function Form() {

    return (
        <form className={'form'}>
            <h2>Отправить пожертвование</h2>
            <label htmlFor="name">Ваше имя</label>
            <input id={'name'}
                   name={'name'}
                   type={'text'}
            />

            <label htmlFor="email">Ваша почта</label>
            <input type="text"
                   id={'email'}
                   name={'email'}
            />

            <label htmlFor="amount">Количество</label>
            <input type="number"
                   id={'amount'}
                   name={'amount'}
            />

            <label htmlFor="currency">Валюта</label>
            <select name="currency" id="currency">
                <option value="">Выберите валюту</option>
                <option value="USD">USD</option>
                <option value="UAH">UAH</option>
                <option value="RUB">RUB</option>
            </select>

            <label htmlFor="text">Ваше сообщение</label>
            <textarea name="text" id="text" cols="30" rows="10"></textarea>

            <label className="checkbox">
                <input name="terms" type="checkbox" />
                Соглашаетесь с политикой конфиденциальности?
            </label>

            <button type={"submit"}>Отправить</button>
        </form>
    )
}
