import { FormEvent, useState } from 'react'

// const fetchData = async () => {
//   setLoading(true)
//   setError(null)
//   try {

//     const username = 'user1'
//     const password = 'user1'
//     const credentials = btoa(`${username}:${password}`)

//     const response = await fetch('http://army.belis.pro:8085/base/hs/BrigadeReport/getData/', {
//       headers: {
//         'Authorization': `Basic ${credentials}`,
//         'Content-Type': 'application/json'
//       }
//     })
//     if (!response.ok) {
//       throw new Error(`Ошибка: ${response.status}`)
//     }
//     const result = await response.json()
//     setData(result)
//   } catch (err) {
//     setError(err.message)
//   } finally {
//     setLoading(false)
//   }
// }

// const mockTrainingCentersData = [
//   {
//     id: 1,
//     date: '01.09.2025 00:00:00',
//     nc: '169',
//     nc_name: '67омбр',
//     ovu: 'СВ',
//     planned: 20
//   },
//   {
//     id: 2,
//     date: '01.09.2025 00:00:00',
//     nc: '169',
//     nc_name: 'оПбр',
//     ovu: 'СВ',
//     planned: 2
//   }
// ]

const trainingCentersDataHeader = ['Дата', 'НЦ', 'Найменування НЦ (ЦПП), військова частина', 'ОВУ', 'За планом', 'Вибуло', 'Залишки', 'Наданий ресурс для вивчення', 'Не вибуло', 'Триває відбір', 'Відмова в/ч', 'за віком', 'за станом здоров’я', 'морально-ділові якості', 'Не прибула в/ч', 'Не пройшов підготовку', 'Хворий', 'СЗЧ', 'Арешт', 'Відмова від виконання службових обов’язків', 'Обмежено придатний', 'Відпустка по хворобі', 'Звільнення', 'Додаток', 'Розпорядження', 'ПЕРЕВІРКА', 'Примітка', 'Дата отправки факт', 'Изменение', 'Вид изменения', 'ОВУ']
const mockTrainingCentersData = [
  ['01.09.2025 00:00:00', '169', '67 омбр', 'СВ', '20', '', '20', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 'Додаток1', '', '', '', '', '1', '3', '12 АК'],
  ['01.09.2025 00:00:00', '169', 'оПбр', 'СВ', '2', '2', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 'Додаток1', '', '', '', '', '1', '3', 'ЧБП КСВ'],
  ['01.09.2025 00:00:00', '169', '47 омбр', 'СВ', '5', '3', '2', '', '2', '', '', '', '', '', '', '', '', '2', '', '', '', '', '', 'Додаток1', '', '', '', '', '1', '3', 'ОК "Захід"']
]

// type TrainingCentersType = {
//   id: number
//   date: string
//   nc: string
//   nc_name: string
//   ovu: string
//   planned: number
// }

type TrainingCentersType = string[]

const TrainingCenters = () => {
  const [rows, setRows] = useState<TrainingCentersType[]>([])
  const [dateFrom, setDateFrom] = useState('')
  const [dateTo, setDateTo] = useState('')
  const [brigade, setBrigade] = useState('')
  const search = (e: FormEvent) => {
    e.preventDefault()
    setRows(mockTrainingCentersData)
  }

  return (
    <>
      <form className="mw-100 m-3" onSubmit={ search }>
        <div className="d-flex flex-wrap gap-3">
          <div>
            <label htmlFor="dateFrom" className="form-label">Date from</label>
            <input type="date" value={ dateFrom } onChange={ e => setDateFrom(e.target.value) } className="form-control" id="dateFrom" name="dateFrom" placeholder="Date from"></input>
          </div>
          <div>
            <label htmlFor="dateTo" className="form-label">Date to</label>
            <input type="date" value={ dateTo } onChange={ e => setDateTo(e.target.value) } className="form-control" id="dateTo" name="dateTo" placeholder="Date to"></input>
          </div>
          <div>
            <label htmlFor="brigade" className="form-label">Brigade</label>
            <select value={ brigade } onChange={ e => setBrigade(e.target.value) } className="form-select" id="brigade" name="brigade">
              <option value="">Select brigade</option>
              <option value="brigade1">Brigade1</option>
              <option value="brigade2">Brigade2</option>
            </select>
          </div>
        </div>
        <button className="btn btn-primary mt-3" type="submit">Search</button>
      </form>
      {
        !rows.length ? null :
          <div className="m-3 table-responsive">
            <table className="table table-bordered table-stripped table-responsive">
              <thead className="table-light">
                <tr>
                  { trainingCentersDataHeader.map((header, i) => <th key={ `header${i}` }>{ header }</th>) }
                  {/* <th>Дата</th>
                  <th>НЦ</th>
                  <th>Найменування НЦ (ЦПП), військова частина</th>
                  <th>ОВУ</th>
                  <th>За планом</th> */}
                </tr>
              </thead>
              <tbody>
                {
                  rows.map((row, i) => (
                    <tr key={ `row${i}` }>
                      { row.map((cell, i) => <td key={ `cell${i}` }>{ cell }</td>) }
                    </tr>
                    // <tr key={ row.id }>
                    //   <td>{ row.date }</td>
                    //   <td>{ row.nc }</td>
                    //   <td>{ row.nc_name }</td>
                    //   <td>{ row.ovu }</td>
                    //   <td>{ row.planned }</td>
                    // </tr>
                  ))
                }
              </tbody>
            </table>
          </div>
      }
    </>
  )
}

export default TrainingCenters
