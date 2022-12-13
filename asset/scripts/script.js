const outPar = document.querySelector("#output");
const subButton = document.querySelector("#submit");


subButton.addEventListener('click', event => {
    //Clear what exist in the output paragraph
    outPar.innerHTML = "";

    //Get the values of the two input fields
    const element1 = document.querySelector('[name="element1"]').value;
    const element2 = document.querySelector('[name="element2"]').value;

    /* 
    * Check if the the two element of the scale input field value is empty
    * an alert is displayed to inform user what's not done
    */
    if (element1 == "") {
        outPar.classList.add("hide");
        alert("Please input two weights to balance");
    } else if (element2 == "") {
        outPar.classList.add("hide");
        alert("Please input optional weights to select from for scale balancing");
    } else {

        /*
        * Split, convert to integer and Sort the two elements of the scale input field 
        * into an array in ascending order
        */
        elem1Arr = element1.split(",").map(Number).sort((a, b) => {
            return a - b;
        });
        elem2Arr = element2.split(",").map(Number).sort((a, b) => {
            return a - b;
        });

        /*
        * if the size of integers passed into the scale input field
        * is less or  more than two or its second weight is empty or zero, 
        *scale balancing will not be processed
        */

        if (elem1Arr.length !== 2 || elem1Arr[0] == 0) {
            outPar.classList.add("hide");
            alert("Weight added is less or more than two integers. Only two comma seperated weights can be added");
        } else {
            //the scale balancing is processed by calling the balanceScale function
            const output = balanceScale(elem1Arr, elem2Arr);
            outPar.classList.remove("hide");
            outPar.innerHTML = output;
        }
    }

});


/**
  * the balanceScale function processes the balancing of the scale
  * it takes two argument @elem1 which is the two positive integer of a balance   * scale
  * while @elem2 is the the available positive integer weights to be selected     * for balancing
  **/
function balanceScale(elem1, elem2) {
    const i = 0;
    const balanced = false;

    //find the difference between the two positive integers in the scale
    const remd = elem1[1] - elem1[0];

    //initialise output result as imbalance scale
    const result = "Scale Imbalanced";

    //check if scale integer are equal
    if (remd == 0) {
        return "Scale Balanced";
    }

    //Check if one of the integers in the available weight is sufficient for balancing
    for (k = 0; k < elem2.length; k++) {
        if (elem2[k] == remd) {
            result = [elem2[k]];
            balanced = true;
        }

    }

    //check for combination of two weights from available weights to balance the scale
    while (i < elem2.length - 1 && balanced == false) {
        const j = i;
        while (j < elem2.length && balanced == false) {
            if (elem2[i] + elem2[j + 1] == remd) {
                result = [elem2[i], elem2[j + 1]];
                balanced = true;
            } else if (elem2[i] + remd == elem2[j + 1]) {
                result = [elem2[i], elem2[j + 1]];
                balanced = true;
            }

            j++;
        }

        i++;

    }

    return result;
}