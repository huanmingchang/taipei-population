import axios from 'axios'

const BASE_URL = 'https://www.ris.gov.tw/rs-opendata/api/v1/datastore'
const population = 'ODRP019'
const year = '109'
const county = '臺北市'

export const GET_TAIPEI_DATA = `${BASE_URL}/${population}/${year}?COUNTY=${county}`
