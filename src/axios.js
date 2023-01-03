import axios from 'axios'

export default  axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer bl8H9e78efPWSOGfEBAAR82IgBXjEzfB0TuABWujkUVxuGL34y-n2XFYeGUFn9rsYKiNo9L7bBN8rWljIN0FQur-EIKtnRZhxYVM-0NaMCz_754xKcyC3G9lTPmBY3Yx'
    }
})