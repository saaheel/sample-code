const array = [1, 2,10, 16];

const double = [];

const newArray = array.forEach((num) => {
    double.push(num * 2)
})
console.log('foreach', double);

// map
const mapArray = array.map(num => num * 2)
console.log('map', mapArray);

// filter
const filterArray = array.filter(num => {
    return num > 5;
})
console.log('filter', filterArray);

// reduce
const reduceArray = array.reduce((accumulator, num) => {
    return accumulator + num;
}, 0)

console.log('reduce',reduceArray);
console.log('reduce',array);

// Complete the below questions using this array:
const dataArray = [
    {
      username: "john",
      team: "red",
      score: 5,
      items: ["ball", "book", "pen"]
    },
    {
      username: "becky",
      team: "blue",
      score: 10,
      items: ["tape", "backpack", "pen"]
    },
    {
      username: "susy",
      team: "red",
      score: 55,
      items: ["ball", "eraser", "pen"]
    },
    {
      username: "tyson",
      team: "green",
      score: 1,
      items: ["book", "pen"]
    },
  
  ];
  
  //Create an array using forEach that has all the usernames with a "!" to each of the usernames
  const foreachDataArray = [];
  dataArray.forEach((eachData) => {
    let {username} = eachData;
    username = `${username}!`
    foreachDataArray.push(username)
  })
  console.log('foreachDataArray',foreachDataArray);
  
  //Create an array using map that has all the usernames with a "? to each of the usernames
  const mapDataArray = dataArray.map(eachData => {
    let {username} = eachData;
    return username = `${username}?`
  })
  console.log(mapDataArray);
  //Filter the array to only include users who are on team: red
  const filterDataArray = dataArray.filter((eachData) => {
      let {team} = eachData;
      return (team === 'red') ? eachData : '';
  })
  console.log(filterDataArray);
  //Find out the total score of all users using reduce
  const reduceDataArray = dataArray.reduce((acc, eachData) => {
    let {score} = eachData;
    return acc + score;
  },0)
  console.log(reduceDataArray);
  // (1), what is the value of i?
  // (2), Make this map function pure:
  const arrayNum = [1, 2, 4, 5, 8, 9];
  const newNumArray = arrayNum.map((num, i) => {
      console.log(num, i);
    //   alert(num);
      return num * 2;
  })
  const newNumArrayPure = arrayNum.map((num, i) => {
    return num * 2;
})
console.log(newNumArrayPure);
  //BONUS: create a new list with all user information, but add "!" to the end of each items they own.
  const newDataArray = dataArray.map((eachData) => {
    eachData.items = eachData.items.map(item => {
		return item + "!"
	});
	return eachData;
  });

  console.log(newDataArray);