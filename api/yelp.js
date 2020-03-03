import axios from 'axios';

export default axios.create({
    baseURL:'https://api.yelp.com/v3/businesses',
    headers:{
        Authorization : 'Bearer ufVwVcsbzip8xb1NZr3hpxTjgNBTuH9ftqA6eidUBHXL0klZUTA_TRzxvPgCS3-Hrhg3gWLBELtLnRwsi_AvFI12OoPwPLnESusJRbUKo8g9-ul9R1n8WoPdPwNQXnYx'
    }

})