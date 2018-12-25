// import _ from 'lodash'
import moment from 'moment'

console.info(moment().format('YYYY-MM-DD'))

const games = [
  'World War Z',
  '湯姆克蘭西：全境封鎖2',
  'Warcraft 3: Reforged',
]

const ok = Promise.resolve()
const bad = Promise.reject(new Error('Make An Error!!'))

ok.finally(() => { console.info('ok.finally works!!') })
bad.finally(() => { console.info('bad.finally works!!') })
