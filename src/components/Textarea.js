import React, { useState } from 'react'


export default function Textarea(props) {
 

    const [text, settext] = useState('')


    const [mail, setmail] = useState([])

    const [textlength, settextlength] = useState(0)

    const upperCase = () => {
        let newtext = text.toUpperCase();
        settext(newtext);
        
        props.showAlert('success', 'Converted to upper case')

    }

    const onchange = (event) => {
        settext(event.target.value)
        let xx=0;
        for (let i=0;i<text.length;i++){
            if (text[i]===/s+/) {
                xx+=1;
            }
        }

            let textl = text.length - xx +1;

            settextlength(textl)


    }

    const lowercase = () => {
        settext(text.toLowerCase())
        props.showAlert('success', 'Converted to lower case')
    }
    const Boldcase = () => {
        document.getElementById("exampleFormControlTextarea1").style.fontWeight="bold"
        props.showAlert('success', 'Converted to bold case')

    }


    const findemail = () => {

        let arr = text.split(' ');


        for (let i = 0; i < arr.length; i++) {
            if (arr[i].includes('@gmail.com')) {
                mail.push(arr[i]);
                setmail(mail)
                props.showAlert('success', 'Emails found')
                
            }
            else{
                let newArr=["No Emails Found"];
                setmail(newArr);
                props.showAlert('danger', 'No Emails found')
            }
            

        }

    }

    const cleartext = () => {
        settext('')
        props.showAlert('success', 'Text cleared!');
    }


    // const preview = () => {

    //     let prev = document.querySelector('.preview');
    //     if (prev.style.display!=="block") {
    //         prev.style.display = 'block'
    //     let textprev = document.querySelector('.textpreview');
    //     textprev.style.display = 'block'
    //     }
    //     else{
    //         prev.style.display = 'none'
    //     let textprev = document.querySelector('.textpreview');
    //     textprev.style.display = 'none'
    //     }
    // }

    const copy = () => {
        navigator.clipboard.writeText(text);
        props.showAlert('success', 'Copied to clip board')
    }

    const firstcapital = () => {
        let fcap = ""
        let textarr = text.split(' ');
        for (let i = 0; i < textarr.length; i++) {
            let word = `${textarr[i]} `;
            if (word===" " || word==="\n") {
                word="";
            }
            fcap += word.charAt(0).toUpperCase() + word.slice(1);
        }
        settext(fcap);
        
        

    }

    const removeSpace=()=>{
        let newtext="";
        let textarr= text.split('  ');
        for (let i = 0; i < textarr.length; i++){
            if (textarr[i]===" ") {     
                textarr[i]=""
            }
            newtext+=textarr[i];
        }
        settext(newtext);
    }


    return (
        <>
            <div className="mb-3 container my-4  ">

                <textarea value={text} onChange={onchange} placeholder="Enter your text here!" className="form-control " id="exampleFormControlTextarea1" rows="8"></textarea>
                <button disabled={text.length===0} onClick={upperCase} className="btn btn-primary my-2 mx-2">UpperCase</button>
                <button disabled={text.length===0} onClick={lowercase} className="btn btn-primary my-2 mx-2">LowerCase</button>
                <button disabled={text.length===0} onClick={findemail} className="btn btn-primary my-2 mx-2">Find Email</button>
                <button disabled={text.length===0} onClick={cleartext} className="btn btn-primary my-2 mx-2">Clear Text</button>
                {/* <button disabled={text.length===0} onClick={preview} className="btn btn-primary my-2 mx-2">Preview</button> */}
                <button disabled={text.length===0} onClick={firstcapital} className="btn btn-primary my-2 mx-2">First letter capital</button>

                <button disabled={text.length===0} onClick={copy} className="btn btn-primary my-2 mx-2">Copy Text</button>
                <button disabled={text.length===0} onClick={removeSpace} className="btn btn-primary my-2 mx-2">remove extra spaces</button>
                <button disabled={text.length===0} onClick={Boldcase} className="btn btn-primary my-2 mx-2">Bold</button>
            </div>
            <div className={`container text-${props.mode === "dark" ? "light" : "dark"}`}>
                <h2 className="">Your text summary</h2>
                <p>Your text containes {text.length} letters and {text.split(' ').filter((element) => { return element.length !== 0 }).length} words</p>
                <p>It will require {text.split(' ').length!==1?text.split(' ').length/80:'0'} minutes to read the paragraph</p><hr />
                <h2>Emails in your text : </h2>{mail.map(e=>e+" ")}<hr />
                <h2 className='preview'>Preview: </h2>
                <p className="textpreview">{text}</p>
            </div>
            
        </>

    )
}
