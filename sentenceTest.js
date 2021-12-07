function sentenceRead(text){
    let result = {
      sentenceLength: 0,
      numWords: 0,
      vowelCount: 0,
    }
    
    result.sentenceLength = text.length
    
    let sentenceArray1 = text.split(' ')
    
    result.numWords = sentenceArray1.length
    
    let sentenceArray2 = Array.from(text.toLowerCase())
    
    result.vowelCount = sentenceArray2.filter(letter => 'aeiou'.includes(letter)).length
    return result
    
    }
    
    console.log(sentenceRead("my name is dada."))