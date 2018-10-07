export const triviaCategories = () => {
  let url = 'https://opentdb.com/api_category.php'

  return fetch(url)
    .then(data => data.json())
    .then(data => {
      //Raw data
      let categories = data.trivia_categories

      //Generate unique id for each category
      categories.forEach(item => {
        item.identifier = generateUUID()
      });

      return new Promise((resolve, reject) => {
        resolve(categories)
      })
    })
}

export const questionsForCategory = (category) => {
  const url = `https://opentdb.com/api.php?amount=10&category=${category.id}&type=boolean`

  return fetch(url)
    .then(response => response.json())
    .then(data => {
      //Clear the data
      let questions = data.results.map((item) => {
        let question = item.question.replace(/&quot;/g,'"').replace(/&#039;/g,'\'').trim()

        return {
          category: item.category,
          correctAnswer: JSON.parse(item.correct_answer.toLowerCase()),
          question: question,
          id: generateUUID()
        }
      })

      return new Promise((resolve, reject) => {
        resolve(questions)
      })
    })
}

const generateUUID = () =>  { 
  var d = new Date().getTime();
  if (typeof performance !== 'undefined' && typeof performance.now === 'function'){
      d += performance.now();
  }
  
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      var r = (d + Math.random() * 16) % 16 | 0;
      d = Math.floor(d / 16);
      return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
  });
}