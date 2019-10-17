
// fetch('http://localhost:3000/weather?address=!')
//   .then((response) => {
//     response.json().then((data) => {
//       if (data.error) {
//         console.log(data.error)
//       } else {
//         console.log(data.location)
//         console.log(data.forecast)
//       }
//     })
//   })

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')

weatherForm.addEventListener('submit', async(e) => {
  e.preventDefault()
  let location = search.value

  messageOne.textContent = 'Loading...'
  messageTwo.textContent = ''

//fetching with fetch

  // fetch(`/weather?address=${location}`)
  //   .then((response) => {
  //     response.json().then((data) => {
  //       if (data.error) {
  //         messageOne.textContent = (data.error)
  //         search.value = ''
  //       } else {
  //         messageOne.textContent = (data.location)
  //         messageTwo.textContent = (data.forecast)
  //         search.value = ''
  //       }
  //     })
  //   })

  //fetching with axios promises

  // axios.get(`/weather?address=${location}`)
  //   .then((res) => {
  //     console.log(res);
  //       if (res.data.error) {
  //         messageOne.textContent = (res.data.error)
  //         search.value = ''
  //       } else {
  //         messageOne.textContent = (res.data.location)
  //         messageTwo.textContent = (res.data.forecast)
  //         search.value = ''
  //       }
  //   })

  //fetching data with axios async await
  let {data} = await axios.get(`/weather?address=${location}`)
      console.log(data);
        if (data.error) {
          messageOne.textContent = (data.error)
          search.value = ''
        } else {
          messageOne.textContent = (data.location)
          messageTwo.textContent = (data.forecast)
          search.value = ''
        }
})