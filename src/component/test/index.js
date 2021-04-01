const TESTARRTRUE = [1,1,1,1,1,1,1,1]

const TESTARRFALSE = [1,1,1,1,0,1,1,1]

const TESTARRSUM = [1,2,3,4,5]

const TESTOBJ = [
    {
        id: 1,
        text: 'first string'
    },
    {
        id: 2,
        text: 'second string'
    },
    {
        id: 3,
        text: 'third string'
    },
]

export const ReduceBool = () => {

    let flag = TESTARRTRUE.reduce((flag,item) => item === 1 && flag ? flag = true : flag = false, true);//последней true это результат переменной по умолчанию
    let flag2 = TESTARRFALSE.reduce((flag,item) => item === 1 && flag ? flag = true : flag = false, true);//последней true это результат переменной по умолчанию
    
    let sum = TESTARRSUM.reduce((accum, item) => accum + item);

    let umnoj = TESTARRSUM.reduce((accum, item) => accum * item);

    let objID = TESTOBJ.reduce((arr_accum, item) => {
        arr_accum.push(item.id);
        return arr_accum;
    }, []);

    let objText = TESTOBJ.reduce((arr_accum, item) => {
        arr_accum.push(item.text);
        return arr_accum;
    }, [])

    return <div>
        <div>
            <p>Результат проверки на 0</p>
            <p>{`1 массив ${TESTARRTRUE}`}</p>
            <p>{`2 массив ${TESTARRFALSE}`}</p>
            <p>{`1 флаг = ${flag}`}</p>
            <p>{`2 флаг = ${flag2}`}</p>
        </div>
        <div>
            <p>Сумма элементов массива</p>
            <p>{`массив: ${TESTARRSUM}`}</p>
            <p>{`Результат: ${sum}`}</p>
        </div>
        <div>
            <p>Перемножение элементов массива</p>
            <p>{`массив: ${TESTARRSUM}`}</p>
            <p>{`Результат: ${umnoj}`}</p>
        </div>
        <div>
            <p>Работа с объектом</p>
            <p>{`Массив объектов: ${JSON.stringify(TESTOBJ)}`}</p>
            <p>{`ID: ${JSON.stringify(objID)}`}</p>
            <p>{`Text: ${JSON.stringify(objText)}`}</p>
        </div>
    </div>
}