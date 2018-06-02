export default function getProgramCollection(broadcastArray) {

    //функция добавления времени
    const concatTime = (startTime, allTime) => {
      let splitTime = startTime.split(':')
      let concatMinutes = splitTime[0]*60 + parseInt(splitTime[1]) + allTime

      let addOnlyHour = Math.trunc(concatMinutes/60) >=10 ? Math.trunc(concatMinutes/60) : `0${Math.trunc(concatMinutes/60)}`//добавляем ноль вначало, если число однозначное
      let addOnlyMinutes = concatMinutes%60 >=10 ? concatMinutes%60 : `0${concatMinutes%60}` //добавляем ноль вначало, если число однозначное

      let joinTime = `${addOnlyHour}:${addOnlyMinutes}`

      return joinTime
    }

    //функция вычитания из времени кол-ва минут
    const minusTime = (startTime, quantityMinutes) => {
      let splitTime = startTime.split(':')
      let concatMinutes = splitTime[0]*60 + parseInt(splitTime[1]) - quantityMinutes

      let addOnlyHour = Math.trunc(concatMinutes/60) >=10 ? Math.trunc(concatMinutes/60) : `0${Math.trunc(concatMinutes/60)}`//добавляем ноль вначало, если число однозначное
      let addOnlyMinutes = concatMinutes%60 >=10 ? concatMinutes%60 : `0${concatMinutes%60}` //добавляем ноль вначало, если число однозначное

      let joinTime = `${addOnlyHour}:${addOnlyMinutes}`

      return joinTime
    }

    //построение коллекции программ
    let endCollection = broadcastArray.reduce(function(prev, curr) {

      //вычисляем время начала передачи в зависимости от конца предыдущей передачи
      let startTimeCurrentCollection
      if(prev.length !== 0) {
        startTimeCurrentCollection = prev[prev.length - 1].endProgramTime
      } else {
        startTimeCurrentCollection = curr.startTime
      }

      //входящие данные
      let startTime = startTimeCurrentCollection
      let allTime = curr.allTime
      let endProgramTime = concatTime(curr.startTime, curr.allTime) //время окончания передачи

      let blocks = allTime/60*3 *2 //число блоков Р и ТПЕ
      let blocksArray = [] //массив коллекции
      let quantityMinutesPrevLastBlockAllTime = 0 //значение равное длительности последнего блока продолжения передачи в предыдущей коллекции передачи

      //узнаем сколько длилась последняя часть предыдущей передачи
      let prevLastItem = prev[prev.length - 1] //последняя передача в коллекции программ

      if(typeof prevLastItem !== 'undefined') {
        //узнаем последний блок был продолжением передачи или рекламой
        let prevLastBlock = prev[prev.length - 1].collection[prev[prev.length - 1].collection.length - 1] //последний блок в передаче

        if(prevLastBlock.id !== null) {
          let prevCollectionEndTime = prev[prev.length - 1].endProgramTime

          //вычисляем длительность последнеко блока предыдущей передачи
          let splitPrevLastBlock = prevLastBlock.startTime.split(':')
          let splitPrevCollectionEndTime = prevCollectionEndTime.split(':')
          let prevLastBlockAllTime = parseInt(splitPrevCollectionEndTime[0]*60 + parseInt(splitPrevCollectionEndTime[1])) - parseInt(splitPrevLastBlock[0]*60 + parseInt(splitPrevLastBlock[1]))

          //запоминаем в флаге
          switch (prevLastBlockAllTime) {
            case 15:
              quantityMinutesPrevLastBlockAllTime = 15
              blocks++ //добавляем последний блок в коллекцию передачи
              break
            case 10:
              quantityMinutesPrevLastBlockAllTime = 10
              blocks++ //добавляем последний блок в коллекцию передачи
              break
            case 5:
              quantityMinutesPrevLastBlockAllTime = 5
              blocks++ //добавляем последний блок в коллекцию передачи
              break
            default:
              quantityMinutesPrevLastBlockAllTime = 0
          }
        }
      }

      //построение коллекции передач
      for(let i=0; i < blocks; i++) {
        let lastItem = blocksArray[blocksArray.length - 1]

        if(typeof lastItem === 'undefined') {
          //регулируем длительность первого блока продолжения передачи в зависимости от по последнего блока продолжения передачи в предыдущей коллекции передачи
          switch (quantityMinutesPrevLastBlockAllTime) {
            case 15:
              blocksArray.push({'id': null, 'startTime': startTime}) //добавляем рекламу
              break
            default:
              blocksArray.push({'id': i, 'startTime': startTime}) //добавляем стандартной (15) длины первый блок текущей коллекции передачи
          }
        } else {
          if(lastItem.id !== null) {
            //узнаем время начала рекламы меньше времени окончания передачи
            if(endProgramTime > concatTime(lastItem.startTime, 15)) {
              switch (quantityMinutesPrevLastBlockAllTime) {
                case 10:
                  blocksArray.push({'id': null, 'startTime': concatTime(lastItem.startTime, 5)}) //добавляем начало (стандартная минус 10) во второй блок текущей коллекции передачи
                  quantityMinutesPrevLastBlockAllTime = 0
                  break
                case 5:
                  blocksArray.push({'id': null, 'startTime': concatTime(lastItem.startTime, 10)}) //добавляем начало (стандартная минус 5) во второй блок текущей коллекции передачи
                  quantityMinutesPrevLastBlockAllTime = 0
                  break
                default:
                  blocksArray.push({'id': null, 'startTime': concatTime(lastItem.startTime, 15)}) //добавляем начало стандартной (15) длины во второй блок текущей коллекции передачи
              }
            }
          } else {
            //узнаем время начала продолжения передачи меньше времени окончания передачи
            if(endProgramTime > concatTime(lastItem.startTime, 5)) {
              //добавляем блок продолжения передачи
              blocksArray.push({'id': i, 'startTime': concatTime(lastItem.startTime, 5)})
            }
          }
        }
      }

      //добавление новой коллекции передач в коллекцию программ
      let collectionItem = {'id': curr.id ,'collection': blocksArray, 'endProgramTime': endProgramTime}

      return [...prev, collectionItem];
    }, []);

  return endCollection;
}
