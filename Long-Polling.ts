// В чём разница между Long-Polling, Websockets и Serve-Sent Events ?

// Написать функцию sleep, которая останавливает выполнение кода на определённое время

async-await-sleep-example
async function sleep(time) {
    console.log('Начало')
     setTimeout(() => {
        console.log('Прошло 2 секунды')
    }, time, true)

}

const outer = async () => {
    let res = await sleep(2000)
}

outer ()

