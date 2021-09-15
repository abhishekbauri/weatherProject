const submitBtn = document.getElementById('submitBtn');
const cityname = document.getElementById('cityname');
const city_name = document.getElementById('city_name');
const temp_real_val = document.getElementById('temp_real_val');
const temp_status = document.getElementById('temp_status');

const dataHide = document.querySelector('.middle_layer');

const getInfo = async(event) => {
    event.preventDefault();
    let cityvalue = cityname.value;
    
    if(cityvalue === ""){
        city_name.innerText = `Please enter your city name`;
        dataHide.classList.add('data_hide');

    }else{
        try{
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityvalue}&units=metric&appid=875f9abbbe3d8af3e6dd9804c7bf815c`;
            const reponse = await fetch(url);
            const data = await reponse.json();
            const arrData = [data];

            city_name.innerText = `${arrData[0].name}, ${arrData[0].sys.country}`;
            temp_real_val.innerText = arrData[0].main.temp;
            // temp_status.innerText = arrData[0].weather[0].main;

            const tempMood = arrData[0].weather[0].main;
            //condition to check weather condition
            if(tempMood == "Clear"){
                temp_status.innerHTML = "<i class = 'fas fa-sun' style = 'color:#eccc68'> </i>";
            } else if(tempMood == "Clouds"){
                temp_status.innerHTML = "<i class = 'fas fa-cloud' style = 'color: #f1f2f6'> </i>";
            }else if(tempMood == "Rain"){
                temp_status.innerHTML = "<i class = 'fas fa-cloud-rain' style = 'color: #1274e6'> </i>";
            }else{
                temp_status.innerHTML = "<i class = 'fas fa-sun' style = 'color:#eccc68'> </i>";
            }

            dataHide.classList.remove('data_hide');

        }catch{
            city_name.innerText = `Please enter your City Name Correctly`;
            dataHide.classList.add('data_hide');
        }
        
    }

}

submitBtn.addEventListener('click', getInfo);
