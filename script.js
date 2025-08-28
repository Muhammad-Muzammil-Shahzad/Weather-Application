let input = document.getElementById('input-country')
let search = document.getElementById('search')
let mainIcon = document.getElementById('main-icon')
let mainTemp = document.getElementById('main-temp')
let mainStatus = document.getElementById('main-status')
let mainDate = document.getElementById('main-date')
let mainPlace = document.getElementById('main-place')

let toFarenheitBtn = document.getElementById('btn-fn')
let toDegreeBtn = document.getElementById('btn-dc')

let firstDate = document.getElementById('date-day-one')
let secondDate = document.getElementById('date-day-two')
let thirdDate = document.getElementById('date-day-three')
let fourthDate = document.getElementById('date-day-four')
let fifthDate = document.getElementById('date-day-five')

let firstIcon = document.getElementById('weather-icon-one')
let secondIcon = document.getElementById('weather-icon-two')
let thirdIcon = document.getElementById('weather-icon-three')
let fourthIcon = document.getElementById('weather-icon-four')
let fifthIcon = document.getElementById('weather-icon-five')

let maxfirstTemp = document.getElementById('max-temp-one')
let maxsecondTemp = document.getElementById('max-temp-two')
let maxthirdTemp = document.getElementById('max-temp-three')
let maxfourthTemp = document.getElementById('max-temp-four')
let maxfifthTemp = document.getElementById('max-temp-five')

let minfirstTemp = document.getElementById('min-temp-one')
let minsecondTemp = document.getElementById('min-temp-two')
let minthirdTemp = document.getElementById('min-temp-three')
let minfourthTemp = document.getElementById('min-temp-four')
let minfifthTemp = document.getElementById('min-temp-five')

let firstResponse = document.getElementById('first-block-response')
let secondResponse = document.getElementById('second-block-response')
let thirdResponse = document.getElementById('third-block-response')
let fourthResponse = document.getElementById('fourth-block-response')

let DateForeCastOne = document.getElementById('for-dates-one')
let DateForeCastTwo = document.getElementById('for-dates-two')
let DateForeCastThree = document.getElementById('for-dates-three')
let DateForeCastFour = document.getElementById('for-dates-four')
let DateForeCastFive = document.getElementById('for-dates-five')
let DateForeCastSix = document.getElementById('for-dates-six')

let sunRiseTimeOne = document.getElementById('sun-rise-time-one')
let sunRiseTimeTwo = document.getElementById('sun-rise-time-two')
let sunRiseTimeThree = document.getElementById('sun-rise-time-three')
let sunRiseTimeFour = document.getElementById('sun-rise-time-four')
let sunRiseTimeFive = document.getElementById('sun-rise-time-five')
let sunRiseTimeSix = document.getElementById('sun-rise-time-six')

let sunSetTimeOne = document.getElementById('sun-set-time-one')
let sunSetTimeTwo = document.getElementById('sun-set-time-two')
let sunSetTimeThree = document.getElementById('sun-set-time-three')
let sunSetTimeFour = document.getElementById('sun-set-time-four')
let sunSetTimeFive = document.getElementById('sun-set-time-five')
let sunSetTimeSix = document.getElementById('sun-set-time-six')

let moonPhaseTxtOne = document.getElementById('moon-phase-text-one')
let moonPhaseTxtTwo = document.getElementById('moon-phase-text-two')
let moonPhaseTxtThree = document.getElementById('moon-phase-text-three')
let moonPhaseTxtFour = document.getElementById('moon-phase-text-four')
let moonPhaseTxtFive = document.getElementById('moon-phase-text-five')
let moonPhaseTxtSix = document.getElementById('moon-phase-text-six')

let RunMainFunc = async () => {
    let tofetch;
    let URL;
    try {

        if (input.value === "") {
            URL = `http://api.weatherapi.com/v1/forecast.json?key=f6af0232d74244ad88994112252808&q=Peshawar&days=7&aqi=no&alerts=no`
            tofetch = await fetch(URL);
        }

        else {
            URL = `http://api.weatherapi.com/v1/forecast.json?key=f6af0232d74244ad88994112252808&q=${input.value}&days=7&aqi=no&alerts=no`
            tofetch = await fetch(URL);
        }
        if (!tofetch.ok) {
            throw new Error(`Error ${tofetch.status}: ${tofetch.statusText}`)

        }
    }
    catch (error) {

        alert(`Failed to fetch weather data: ${error.message}`);
        console.error("Fetch error:", error);

    }

    let toJSON = await tofetch.json()

    mainTemp.innerText = `${toJSON.current.temp_c} °C`;
    mainStatus.innerText = toJSON.current.condition.text;
    mainDate.innerText = toJSON.location.localtime;
    mainPlace.innerText = `${toJSON.location.name} / ${toJSON.location.country}`
    firstResponse.innerText = `${toJSON.current.wind_kph} Km/h`;
    secondResponse.innerText = `${toJSON.current.humidity} %`;
    thirdResponse.innerText = `${toJSON.current.feelslike_c} °C`;
    fourthResponse.innerText = `${toJSON.current.pressure_mb} Mb`

    firstDate.innerText = toJSON.forecast.forecastday[1].date
    secondDate.innerText = toJSON.forecast.forecastday[2].date
    thirdDate.innerText = toJSON.forecast.forecastday[3].date
    fourthDate.innerText = toJSON.forecast.forecastday[4].date
    fifthDate.innerText = toJSON.forecast.forecastday[5].date

    maxfirstTemp.innerText = `${toJSON.forecast.forecastday[1].day.maxtemp_c}°C`
    maxsecondTemp.innerText = `${toJSON.forecast.forecastday[2].day.maxtemp_c}°C`
    maxthirdTemp.innerText = `${toJSON.forecast.forecastday[3].day.maxtemp_c}°C`
    maxfourthTemp.innerText = `${toJSON.forecast.forecastday[4].day.maxtemp_c}°C`
    maxfifthTemp.innerText = `${toJSON.forecast.forecastday[5].day.maxtemp_c}°C`

    minfirstTemp.innerText = `${toJSON.forecast.forecastday[1].day.mintemp_c}°C`
    minsecondTemp.innerText = `${toJSON.forecast.forecastday[2].day.mintemp_c}°C`
    minthirdTemp.innerText = `${toJSON.forecast.forecastday[3].day.mintemp_c}°C`
    minfourthTemp.innerText = `${toJSON.forecast.forecastday[4].day.mintemp_c}°C`
    minfifthTemp.innerText = `${toJSON.forecast.forecastday[5].day.mintemp_c}°C`

    mainIcon.src = `${toJSON.current.condition.code}.png`
    firstIcon.src = `${toJSON.forecast.forecastday[1].day.condition.code}.png`
    secondIcon.src = `${toJSON.forecast.forecastday[2].day.condition.code}.png`
    thirdIcon.src = `${toJSON.forecast.forecastday[3].day.condition.code}.png`
    fourthIcon.src = `${toJSON.forecast.forecastday[4].day.condition.code}.png`
    fifthIcon.src = `${toJSON.forecast.forecastday[5].day.condition.code}.png`

    sunRiseTimeOne.innerText = toJSON.forecast.forecastday[0].astro.sunrise
    sunSetTimeOne.innerText = toJSON.forecast.forecastday[0].astro.sunset
    moonPhaseTxtOne.innerText = toJSON.forecast.forecastday[0].astro.moon_phase
    DateForeCastOne.innerText = `Today Weather Forecast`

    sunRiseTimeTwo.innerText = toJSON.forecast.forecastday[1].astro.sunrise
    sunSetTimeTwo.innerText = toJSON.forecast.forecastday[1].astro.sunset
    moonPhaseTxtTwo.innerText = toJSON.forecast.forecastday[1].astro.moon_phase
    DateForeCastTwo.innerText = `${toJSON.forecast.forecastday[1].date}`

    sunRiseTimeThree.innerText = toJSON.forecast.forecastday[2].astro.sunrise
    sunSetTimeThree.innerText = toJSON.forecast.forecastday[2].astro.sunset
    moonPhaseTxtThree.innerText = toJSON.forecast.forecastday[2].astro.moon_phase
    DateForeCastThree.innerText = `${toJSON.forecast.forecastday[2].date}`

    sunRiseTimeFour.innerText = toJSON.forecast.forecastday[3].astro.sunrise
    sunSetTimeFour.innerText = toJSON.forecast.forecastday[3].astro.sunset
    moonPhaseTxtFour.innerText = toJSON.forecast.forecastday[3].astro.moon_phase
    DateForeCastFour.innerText = `${toJSON.forecast.forecastday[3].date}`

    sunRiseTimeFive.innerText = toJSON.forecast.forecastday[4].astro.sunrise
    sunSetTimeFive.innerText = toJSON.forecast.forecastday[4].astro.sunset
    moonPhaseTxtFive.innerText = toJSON.forecast.forecastday[4].astro.moon_phase
    DateForeCastFive.innerText = `${toJSON.forecast.forecastday[4].date}`

    sunRiseTimeSix.innerText = toJSON.forecast.forecastday[5].astro.sunrise
    sunSetTimeSix.innerText = toJSON.forecast.forecastday[5].astro.sunset
    moonPhaseTxtSix.innerText = toJSON.forecast.forecastday[5].astro.moon_phase
    DateForeCastSix.innerText = `${toJSON.forecast.forecastday[5].date}`

    for (let i = 0; i <= 23; i++) {

        let one_time = document.getElementById(`one-${i}-time`)
        one_time.innerText = toJSON.forecast.forecastday[0].hour[i].time

        let one_img = document.getElementById(`one-${i}-img`)
        one_img.src = `${toJSON.forecast.forecastday[0].hour[i].condition.code}.png`

        let one_status = document.getElementById(`one-${i}-status`)
        one_status.innerText = toJSON.forecast.forecastday[0].hour[i].condition.text

        let one_temp = document.getElementById(`one-${i}-temp`)
        one_temp.innerText = `${toJSON.forecast.forecastday[0].hour[i].temp_c}°C`


        let two_time = document.getElementById(`two-${i}-time`)
        two_time.innerText = toJSON.forecast.forecastday[1].hour[i].time

        let two_img = document.getElementById(`two-${i}-img`)
        two_img.src = `${toJSON.forecast.forecastday[1].hour[i].condition.code}.png`

        let two_status = document.getElementById(`two-${i}-status`)
        two_status.innerText = toJSON.forecast.forecastday[1].hour[i].condition.text

        let two_temp = document.getElementById(`two-${i}-temp`)
        two_temp.innerText = `${toJSON.forecast.forecastday[1].hour[i].temp_c}°C`


        let three_time = document.getElementById(`three-${i}-time`)
        three_time.innerText = toJSON.forecast.forecastday[2].hour[i].time

        let three_img = document.getElementById(`three-${i}-img`)
        three_img.src = `${toJSON.forecast.forecastday[2].hour[i].condition.code}.png`

        let three_status = document.getElementById(`three-${i}-status`)
        three_status.innerText = toJSON.forecast.forecastday[2].hour[i].condition.text

        let three_temp = document.getElementById(`three-${i}-temp`)
        three_temp.innerText = `${toJSON.forecast.forecastday[2].hour[i].temp_c}°C`


        let four_time = document.getElementById(`four-${i}-time`)
        four_time.innerText = toJSON.forecast.forecastday[3].hour[i].time

        let four_img = document.getElementById(`four-${i}-img`)
        four_img.src = `${toJSON.forecast.forecastday[3].hour[i].condition.code}.png`

        let four_status = document.getElementById(`four-${i}-status`)
        four_status.innerText = toJSON.forecast.forecastday[3].hour[i].condition.text

        let four_temp = document.getElementById(`four-${i}-temp`)
        four_temp.innerText = `${toJSON.forecast.forecastday[3].hour[i].temp_c}°C`


        let five_time = document.getElementById(`five-${i}-time`)
        five_time.innerText = toJSON.forecast.forecastday[3].hour[i].time

        let five_img = document.getElementById(`five-${i}-img`)
        five_img.src = `${toJSON.forecast.forecastday[3].hour[i].condition.code}.png`

        let five_status = document.getElementById(`five-${i}-status`)
        five_status.innerText = toJSON.forecast.forecastday[3].hour[i].condition.text

        let five_temp = document.getElementById(`five-${i}-temp`)
        five_temp.innerText = `${toJSON.forecast.forecastday[3].hour[i].temp_c}°C`


        let six_time = document.getElementById(`six-${i}-time`)
        six_time.innerText = toJSON.forecast.forecastday[3].hour[i].time

        let six_img = document.getElementById(`six-${i}-img`)
        six_img.src = `${toJSON.forecast.forecastday[3].hour[i].condition.code}.png`

        let six_status = document.getElementById(`six-${i}-status`)
        six_status.innerText = toJSON.forecast.forecastday[3].hour[i].condition.text

        let six_temp = document.getElementById(`six-${i}-temp`)
        six_temp.innerText = `${toJSON.forecast.forecastday[3].hour[i].temp_c}°C`
    }


    toFarenheitBtn.addEventListener('click', () => {

        mainTemp.innerText = `${toJSON.current.temp_f} °F`;
        thirdResponse.innerText = `${toJSON.current.feelslike_f} °F`;
        maxfirstTemp.innerText = `${toJSON.forecast.forecastday[1].day.maxtemp_f}°F`
        maxsecondTemp.innerText = `${toJSON.forecast.forecastday[2].day.maxtemp_f}°F`
        maxthirdTemp.innerText = `${toJSON.forecast.forecastday[3].day.maxtemp_f}°F`
        maxfourthTemp.innerText = `${toJSON.forecast.forecastday[4].day.maxtemp_f}°F`
        maxfifthTemp.innerText = `${toJSON.forecast.forecastday[5].day.maxtemp_f}°F`
        minfirstTemp.innerText = `${toJSON.forecast.forecastday[1].day.mintemp_f}°F`
        minsecondTemp.innerText = `${toJSON.forecast.forecastday[2].day.mintemp_f}°F`
        minthirdTemp.innerText = `${toJSON.forecast.forecastday[3].day.mintemp_f}°F`
        minfourthTemp.innerText = `${toJSON.forecast.forecastday[4].day.mintemp_f}°F`
        minfifthTemp.innerText = `${toJSON.forecast.forecastday[5].day.mintemp_f}°F`

        for (let k = 0; k <= 23; k++) {

            let one_temp = document.getElementById(`one-${k}-temp`)
            let two_temp = document.getElementById(`two-${k}-temp`)
            let three_temp = document.getElementById(`three-${k}-temp`)
            let four_temp = document.getElementById(`four-${k}-temp`)
            let five_temp = document.getElementById(`five-${k}-temp`)
            let six_temp = document.getElementById(`six-${k}-temp`)

            one_temp.innerText = `${toJSON.forecast.forecastday[0].hour[k].temp_f}°F`
            two_temp.innerText = `${toJSON.forecast.forecastday[1].hour[k].temp_f}°F`
            three_temp.innerText = `${toJSON.forecast.forecastday[2].hour[k].temp_f}°F`
            four_temp.innerText = `${toJSON.forecast.forecastday[3].hour[k].temp_f}°F`
            five_temp.innerText = `${toJSON.forecast.forecastday[4].hour[k].temp_f}°F`
            six_temp.innerText = `${toJSON.forecast.forecastday[5].hour[k].temp_f}°F`

        }

    })


    toDegreeBtn.addEventListener('click', () => {

        mainTemp.innerText = `${toJSON.current.temp_c} °C`;
        thirdResponse.innerText = `${toJSON.current.feelslike_c} °C`;
        maxfirstTemp.innerText = `${toJSON.forecast.forecastday[1].day.maxtemp_c}°C`
        maxsecondTemp.innerText = `${toJSON.forecast.forecastday[2].day.maxtemp_c}°C`
        maxthirdTemp.innerText = `${toJSON.forecast.forecastday[3].day.maxtemp_c}°C`
        maxfourthTemp.innerText = `${toJSON.forecast.forecastday[4].day.maxtemp_c}°C`
        maxfifthTemp.innerText = `${toJSON.forecast.forecastday[5].day.maxtemp_c}°C`
        minfirstTemp.innerText = `${toJSON.forecast.forecastday[1].day.mintemp_c}°C`
        minsecondTemp.innerText = `${toJSON.forecast.forecastday[2].day.mintemp_c}°C`
        minthirdTemp.innerText = `${toJSON.forecast.forecastday[3].day.mintemp_c}°C`
        minfourthTemp.innerText = `${toJSON.forecast.forecastday[4].day.mintemp_c}°C`
        minfifthTemp.innerText = `${toJSON.forecast.forecastday[5].day.mintemp_c}°C`

        for (let k = 0; k <= 23; k++) {

            let one_temp = document.getElementById(`one-${k}-temp`)
            let two_temp = document.getElementById(`two-${k}-temp`)
            let three_temp = document.getElementById(`three-${k}-temp`)
            let four_temp = document.getElementById(`four-${k}-temp`)
            let five_temp = document.getElementById(`five-${k}-temp`)
            let six_temp = document.getElementById(`six-${k}-temp`)

            one_temp.innerText = `${toJSON.forecast.forecastday[0].hour[k].temp_c}°C`
            two_temp.innerText = `${toJSON.forecast.forecastday[1].hour[k].temp_c}°C`
            three_temp.innerText = `${toJSON.forecast.forecastday[2].hour[k].temp_c}°C`
            four_temp.innerText = `${toJSON.forecast.forecastday[3].hour[k].temp_c}°C`
            five_temp.innerText = `${toJSON.forecast.forecastday[4].hour[k].temp_c}°C`
            six_temp.innerText = `${toJSON.forecast.forecastday[5].hour[k].temp_c}°C`

        }

    })


}

input.addEventListener('keydown', (event) => {
    if (event.key === "Enter") {
        RunMainFunc()
    }
})

RunMainFunc()

search.addEventListener('click', RunMainFunc)


