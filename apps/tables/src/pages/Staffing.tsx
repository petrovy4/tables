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

const mockStaffingData = [
  ['Всього за 42 омбр з підпорядкованими військовими частинами (при наявності окремих штурмових, мотопіхотних, стрілецьких батальйонів):', '6515', '700', '4236', '502', '65,02', '71,71', '2279', '198', '1302', '93', '109', '9', '67', '1', '5', '3', '23', '3', '8', '2', '4', '', '2', '', '', '', '176', '19', '17', '2', '8', '', '56', '13', '95', '4', '36', '2', '24', '', '', '', '', '', '35', '2', '', ''],
  ['Підрозділи, які залучені до виконання бойових завдань та не виведені на відновлення', '6515', '700', '4236', '502', '65,02', '71,71', '2279', '198', '1302', '93', '109', '9', '67', '1', '5', '3', '23', '3', '8', '2', '4', '', '2', '', '', '', '176', '19', '17', '2', '8', '', '56', '13', '95', '4', '36', '2', '24', '', '', '', '', '', '35', '2', '', ''],
  ['Управління', '225', '147', '185', '113', '82,22', '76,87', '40', '34', '12', '12', '4', '2', '1', '1', '', '', '2', '1', '', '', '', '', '1', '', '', '', '4', '4', '', '', '', '', '4', '4', '', '', '', '', '', '', '', '', '', '', '', '', '', '']
]

type StaffingType = string[]

const Staffing = () => {
  const [rows, setRows] = useState<StaffingType[]>([])
  const [dateFrom, setDateFrom] = useState('')
  const [dateTo, setDateTo] = useState('')
  const [brigade, setBrigade] = useState('')
  const search = (e: FormEvent) => {
    e.preventDefault()
    setRows(mockStaffingData)
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
                  <th colSpan={ 11 }>Укомплектованість станом на 03.09.2025</th>
                  <th colSpan={ 2 } rowSpan={ 3 }>Надійшло на доукомплектування</th>
                  <th colSpan={ 14 }>з них:</th>
                  <th colSpan={ 2 } rowSpan={ 3 }>Вибуло з списків військової частини</th>
                  <th colSpan={ 20 }>у тому числі:</th>
                </tr>
                <tr>
                  <th rowSpan={ 3 }>Підрозділ</th>
                  <th colSpan={ 2 } rowSpan={ 2 }>за штатом</th>
                  <th colSpan={ 2 } rowSpan={ 2 }>за списком</th>
                  <th colSpan={ 2 } rowSpan={ 2 }>% укомпл.</th>
                  <th colSpan={ 2 } rowSpan={ 2 }>некомплект</th>
                  <th colSpan={ 2 } rowSpan={ 2 }>потреба в доукомплектуванні до 85%</th>

                  <th colSpan={ 2 } rowSpan={ 2 }>з батальонів резерву, запасних рот</th>
                  <th colSpan={ 2 } rowSpan={ 2 }>з НЦ, КППК</th>
                  <th colSpan={ 2 } rowSpan={ 2 }>з інших військових частин</th>
                  <th colSpan={ 2 } rowSpan={ 2 }>після лікування</th>
                  <th colSpan={ 2 } rowSpan={ 2 }>з розпорядження</th>
                  <th colSpan={ 2 } rowSpan={ 2 }>призвано безпосередньо до військової частини</th>
                  <th colSpan={ 2 } rowSpan={ 2 }>призвано з ТЦК та СП (по мібілізації, на контракт)</th>

                  <th colSpan={ 2 } rowSpan={ 2 }>звільнено</th>
                  <th colSpan={ 2 } rowSpan={ 2 }>загиблі (померлі)</th>
                  <th colSpan={ 2 } rowSpan={ 2 }>переведено до інших в/ч</th>
                  <th colSpan={ 2 } rowSpan={ 2 }>виведено в розпорядження</th>
                  <th colSpan={ 10 }>з них</th>
                  <th colSpan={ 2 } rowSpan={ 2 }>інші причини</th>
                </tr>
                <tr>
                  <th colSpan={ 2 }>довгострокове лікування</th>
                  <th colSpan={ 2 }>СЗЧ</th>
                  <th colSpan={ 2 }>зниклі безвісті</th>
                  <th colSpan={ 2 }>полон</th>
                  <th colSpan={ 2 }>інші</th>
                </tr>
                <tr>
                  <th className="vertical-text">ВСЬОГО</th>
                  <th className="vertical-text">у т.ч. офіцерів</th>
                  <th className="vertical-text">ВСЬОГО</th>
                  <th className="vertical-text">у т.ч. офіцерів</th>
                  <th className="vertical-text">ВСЬОГО</th>
                  <th className="vertical-text">у т.ч. офіцерів</th>
                  <th className="vertical-text">ВСЬОГО</th>
                  <th className="vertical-text">у т.ч. офіцерів</th>
                  <th className="vertical-text">ВСЬОГО</th>
                  <th className="vertical-text">у т.ч. офіцерів</th>
                  <th className="vertical-text">ВСЬОГО</th>
                  <th className="vertical-text">у т.ч. офіцерів</th>

                  <th className="vertical-text">ВСЬОГО</th>
                  <th className="vertical-text">у т.ч. офіцерів</th>
                  <th className="vertical-text">ВСЬОГО</th>
                  <th className="vertical-text">у т.ч. офіцерів</th>
                  <th className="vertical-text">ВСЬОГО</th>
                  <th className="vertical-text">у т.ч. офіцерів</th>
                  <th className="vertical-text">ВСЬОГО</th>
                  <th className="vertical-text">у т.ч. офіцерів</th>
                  <th className="vertical-text">ВСЬОГО</th>
                  <th className="vertical-text">у т.ч. офіцерів</th>
                  <th className="vertical-text">ВСЬОГО</th>
                  <th className="vertical-text">у т.ч. офіцерів</th>

                  <th className="vertical-text">ВСЬОГО</th>
                  <th className="vertical-text">у т.ч. офіцерів</th>
                  <th className="vertical-text">ВСЬОГО</th>
                  <th className="vertical-text">у т.ч. офіцерів</th>
                  <th className="vertical-text">ВСЬОГО</th>
                  <th className="vertical-text">у т.ч. офіцерів</th>
                  <th className="vertical-text">ВСЬОГО</th>
                  <th className="vertical-text">у т.ч. офіцерів</th>
                  <th className="vertical-text">ВСЬОГО</th>
                  <th className="vertical-text">у т.ч. офіцерів</th>
                  <th className="vertical-text">ВСЬОГО</th>
                  <th className="vertical-text">у т.ч. офіцерів</th>

                  <th className="vertical-text">ВСЬОГО</th>
                  <th className="vertical-text">у т.ч. офіцерів</th>
                  <th className="vertical-text">ВСЬОГО</th>
                  <th className="vertical-text">у т.ч. офіцерів</th>
                  <th className="vertical-text">ВСЬОГО</th>
                  <th className="vertical-text">у т.ч. офіцерів</th>
                  <th className="vertical-text">ВСЬОГО</th>
                  <th className="vertical-text">у т.ч. офіцерів</th>
                  <th className="vertical-text">ВСЬОГО</th>
                  <th className="vertical-text">у т.ч. офіцерів</th>
                  <th className="vertical-text">ВСЬОГО</th>
                  <th className="vertical-text">у т.ч. офіцерів</th>
                </tr>
              </thead>
              <tbody>
                {
                  rows.map((row, i) => (
                    <tr key={ `row${i}` }>
                      { row.map((cell, i) => <td key={ `cell${i}` }>{ cell }</td>) }
                    </tr>
                  ))
                }
              </tbody>
            </table>
          </div>
      }
    </>
  )
}

export default Staffing
