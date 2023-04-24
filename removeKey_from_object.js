let object = [{
    "wabaId": "1234523",
    "templateBody": {
        "name": "cloud_test_270323_9",
        "language": "en",
        "category": "MARKETING",
        "components": [{
            "type": "HEADER",
            "format": "DOCUMENT",
            "example": {
                "headerHandle": "https://www.africau.edu/images/default/sample.pdf"
            }
        }, {
            "type": "BODY",
            "text": "Knock Knock {{1}} cloud_test_270323_1 {{2}}",
            "example": {
                "bodyText": [
                    ["currency1", "currency2"]
                ]
            }
        }, {
            "type": "FOOTER",
            "text": "Thank a "
        }, {
            "type": "BUTTONS",
            "buttons": [{
                "type": "URL",
                "text": "Contact Details",
                "url": "https://google.com/{{1}}",
                "example": ["url"]
            }, {
                "type": "PHONE_NUMBER",
                "text": "Contact Details",
                "phoneNumber": "917021344402"
            }]
        }]
    },
    "lastStatus": "deleted",
    "status": [{
        "type": "complete",
        "createdAt": 1681368712006
    },
    {
        "type": "deleted",
        "createdAt": 1681368719007
    }
    ],
    "createdAt": 1681368714093,
    "isActive": true,
    "createdBy": "1234523"
}
]



/**
 * The function `objectRemove` recursively removes a specified key from an object and any nested
 * objects or arrays within it.
 * @param obj - The object from which the key needs to be removed.
 * @param key - The key is a string that represents the property name of the object that needs to be
 * removed. The function `objectRemove` takes an object and a key as parameters and removes the
 * property with the given key from the object. It also recursively searches through nested objects and
 * arrays to remove the property from them
 */

const objectRemove = (obj, key) => {
    delete obj[key]
    
    Object.keys(obj).forEach( val => {
      if(Array.isArray(obj[val])){
        arrayRemove(obj[val],key)
      }
      if((typeof obj[val] === "object" || typeof obj[val] === 'function') && (obj[val] !== null)){
        objectRemove(obj[val], key)
      }
    })
  }
  
  
  
/**
 * The function recursively removes a specified key from all objects and arrays within a given array.
 * @param arr - The array that needs to be modified by removing elements with a certain key.
 * @param key - The `key` parameter is a value that is used to identify and remove elements from the
 * array. It is passed as an argument to the `objectRemove` function, which is called for non-array
 * elements in the `arr` array.
 */
  const arrayRemove = (arr,key) => {
    arr.forEach(val => {
      if(Array.isArray(val)){
        arrayRemove(val, key)
      }else{
        objectRemove(val, key)
      }
    })
  }
  
  
/**
 * The function removes a specified key from either an array or an object.
 * @param data - The data parameter is the input data that we want to remove a key from. It can be an
 * array or an object.
 * @param key - The `key` parameter in the `removeKey` function is the key or property name that needs
 * to be removed from the `data` object or array.
 */
  const removeKey = (data, key) => {
    if(Array.isArray(data)){
      arrayRemove(data, key)
    }else{
      objectRemove(data, key)
    }
  }
  
  removeKey(object,'bodyText')
  
  console.log(JSON.stringify(object,null,4))