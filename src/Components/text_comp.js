import React, {useState} from 'react'

    const corrections ={
        'realy': "really",
        'tis': "this",
        'tiped': 'typed'
    
    }
    
    
    function TextComp() {
        const [content, setcontent] = useState("")
        const checkErr =(e)=>{
            let text = e.target.value
            if( text.charAt(text.length -1) == " "){
                let word_arr = text.split(" ")
                let word = word_arr[word_arr.length -2]
                if(word in corrections){          
                    setcontent((word_arr.slice(0, word_arr.length-2).join(" ") +" "+ corrections[word]).trim())
                }
                else{
                    setcontent(text)
                }
            }
            else{
              setcontent(text)
            }
         
        }
        return (
            <div>
                <h2>Auto Correction Text Box</h2>
            <textarea
            rows ={5}
            placeholder="Enter the description"
            value = {content}
            onChange={(e)=>{checkErr(e)}}

            ></textarea>
            
        </div>
        )
    }
    

export default TextComp

