// import './jspdf.min.js';
import axios from 'axios';
import {toastController} from '@ionic/vue';

async function axiosReq(params){
    for(let p in params){
        if(p === 'data'){
            params[p] = toFormData(params[p]);
        }
    }
    return await axios(params);
}

function validateForm(obj,rules){
    let validated = {
        allValid: true
    };
    for(let r in rules){
        if((rules[r] == "required" || rules[r].isRequired ) &&
            obj[r] == undefined || obj[r] == '' ){
                validated[r] = 'empty';
        }else if((rules[r] != "required" || rules[r].isRequired ) &&
            obj[r] == undefined || obj[r] == '' ){
                validated[r] = true;  
        }else if(r != 'callback'){
            let emailregex = /[a-z0-9._]+@[a-z]+\.[a-z]{2,3}/i;
            let intregex = /[0-9]+/;

            validated[r] = true;

            if(rules[r].isEmail &&  obj[r].toLowerCase().match(emailregex))
                validated[r] = true;
            else if (rules[r].isEmail ){
                validated[r] = 'invalid_email';
                break;
            }

            if(rules[r].isInteger && obj[r].match(intregex))
                validated[r] = true;
            else if(rules[r].isInteger) {
                validated[r] = 'invalid_number';
                break;
            }

            if(rules[r].regexMatch != null && obj[r].match(rules[r].regexMatch))
                validated[r] = true;
            else if(rules[r].regexMatch != null) {
                validated[r] = 'value_and_regex_not_match';
                break;
            }

            if(rules[r].equalTo != null &&  obj[r] == rules[r].equalTo)
                validated[r] = true;
            else if(rules[r].equalTo != null) {
                validated[r] = 'values_not_match';
                break;
            }

            if(typeof rules[r].maxChars == 'number' && rules[r].maxChars >= obj[r].length)
                validated[r] = true;
            else if(typeof rules[r].maxChars == 'number') {
                validated[r] = 'invalid_length_max';
                break;
            }

            if(typeof rules[r].minChars == 'number' && rules[r].minChars <= obj[r].length)
                validated[r] = true;
            else if(typeof rules[r].minChars == 'number') {
                validated[r] = 'invalid_length_min';
                break;
            }


        }
    }

    let someEmpty = false;
    if(rules.callback != null){
        for(let v in validated){
            if(validated[v] === 'empty'){
                validated.allValid = false;
                rules.callback();
                someEmpty = true;
                break;
            }
        }
    }
    if(!someEmpty){
        for(let v in validated){
            if(validated[v] != true){
                validated.allValid = false;
                if(rules[v].callback != null){
                    rules[v].callback(validated[v],v);
                    break;
                }

            }
        }
    }

    return validated;
}


// function toPdf(selector,saveAs,marg=undefined) {
//     var pdf = new jsPDF('p', 'pt', 'letter');

//     source = document.querySelector(selector);

//     specialElementHandlers = {

//         '#bypassme': function (element, renderer) {

//             return true
//         }
//     };
//     margins = (marg != undefined) ? marg : {
//         top: 20,
//         bottom: 20,
//         left: 20,
//         width: 500
//     };


//     pdf.fromHTML(
//         source,
//         margins.left,
//         margins.top, {
//             'width': margins.width,
//             'elementHandlers': specialElementHandlers
//         },

//         function (dispose) {       
//             pdf.save(saveAs);
//         }, margins
//     );
// }

async function openToast(msg, type) {
    try {
        await toastController.dismiss();
    } catch(e) {
        console.log(e);
    }
    
    const toast = await toastController
        .create({
        message: msg,
        color:type,
        duration: 2000
        })
    return toast.present();
}

function toFormData(obj){
    var fd = new FormData();
    for(var i in obj){
        fd.append(i,obj[i]);
    }
    return fd;
}


class LocalStore{
    set(key,value){localStorage.setItem(key,value);}
    get(key){return localStorage.getItem(key);}
    setObject(key,value){localStorage.setItem(key,JSON.stringify(value));}
    getObject(key){return JSON.parse(localStorage.getItem(key));}
    remove(key){localStorage.removeItem(key);}
    setInObject(parentKey,childKey,value){
        let parentObject = this.getObject(parentKey);
        parentObject[childKey] = value;
        this.setObject(parentKey,parentObject);
    }
    getInObject(parentKey,childKey){
        let parentObject = this.getObject(parentKey);
        return parentObject[childKey];
    }
}

const local = new LocalStore();









export { 
    axiosReq,
    validateForm,
    toFormData,
    openToast,
    local
}; 